// src/app/test-connection/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { database } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TestConnectionPage() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = () => {
    setLoading(true);
    setError(null);

    try {
      if (!database) {
        throw new Error('Firebase Database instance is undefined. Check your environment variables.');
      }
      const connectedRef = ref(database, '.info/connected');
      const unsubscribe = onValue(connectedRef, (snapshot) => {
        const connected = snapshot.val();
        setIsConnected(connected === true);
        setLoading(false);
      }, (err) => {
        setError(err.message);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err: any) {
      setError(err.message || 'Failed to connect');
      setLoading(false);
    }
  };

  const copyConfig = () => {
    const config = `NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-data-hub-eae9c
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://my-data-hub-eae9c-default-rtdb.asia-southeast1.firebasedatabase.app`;
    navigator.clipboard.writeText(config);
    alert('Configuration template copied to clipboard!');
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl min-h-screen flex items-center justify-center">
      <Card className="w-full border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
        <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <CardTitle className="flex items-center justify-between text-slate-900 dark:text-slate-100">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">database</span>
              Firebase Connection Status
            </span>
            <Button variant="ghost" size="icon" onClick={checkConnection} disabled={loading} className="text-slate-500 hover:text-primary dark:text-slate-400">
              <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">

          <div className={cn(
            "flex items-center gap-4 p-5 rounded-lg border transition-all duration-300",
            isConnected ? "bg-primary/5 border-primary/20" : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
          )}>
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
              loading ? "bg-slate-200 dark:bg-slate-800" : isConnected ? "bg-primary text-slate-900" : "bg-red-500 text-white"
            )}>
               {loading ? <RefreshCw className="h-5 w-5 animate-spin text-slate-400" /> :
                isConnected ? <CheckCircle className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Current Status</h3>
              <p className={cn(
                "text-xl font-black tracking-tight",
                loading ? "text-slate-400" : isConnected ? "text-primary" : "text-red-500"
              )}>
                {loading ? 'Verifying Connection...' : isConnected ? 'System Operational' : 'Connection Failed'}
              </p>
            </div>

            {error && (
              <Badge variant="destructive" className="ml-auto animate-pulse">Error</Badge>
            )}
          </div>

          {error && (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm border border-red-100 dark:border-red-900/30 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Connection Error</p>
                <p className="opacity-90">{error}</p>
              </div>
            </div>
          )}

          {!isConnected && !loading && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Troubleshooting Steps</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Follow these instructions to connect your local environment to Firebase.</p>

                <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="pl-2"><span className="font-semibold text-slate-900 dark:text-white">Access Firebase Console</span>: Go to Project Settings &gt; General.</li>
                  <li className="pl-2"><span className="font-semibold text-slate-900 dark:text-white">Copy Config</span>: Locate the "firebaseConfig" object code block.</li>
                  <li className="pl-2"><span className="font-semibold text-slate-900 dark:text-white">Create Environment File</span>: Create a file named <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 font-mono text-xs">.env.local</code> in the root.</li>
                  <li className="pl-2"><span className="font-semibold text-slate-900 dark:text-white">Paste Variables</span>: Use the template below.</li>
                </ol>
              </div>

              <div className="relative group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 dark:bg-slate-800 flex items-center px-3 border-b border-slate-200 dark:border-slate-700">
                   <span className="text-[10px] font-mono text-slate-500">.env.local template</span>
                </div>
                <pre className="bg-slate-50 dark:bg-black text-slate-600 dark:text-slate-300 p-4 pt-10 rounded-lg text-xs overflow-x-auto font-mono">
{`NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
...`}
                </pre>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2 h-6 text-xs bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 shadow-sm transition-all"
                  onClick={copyConfig}
                >
                  <Copy className="h-3 w-3 mr-1.5" /> Copy
                </Button>
              </div>

              <p className="text-xs text-slate-400 text-center italic">
                Note: Restart your development server after updating .env files.
              </p>
            </div>
          )}

          {isConnected && (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-slate-900 dark:text-white text-sm flex items-start gap-3 animate-in zoom-in-95 duration-300">
              <span className="material-symbols-outlined text-primary">verified</span>
              <div>
                <p className="font-bold text-primary mb-1">Ready for Development</p>
                <p className="opacity-80">Your application handles user authentication and database operations securely via Firebase.</p>
              </div>
            </div>
          )}

        </CardContent>
      </Card>
    </div>
  );
}
