import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex-shrink-0 flex flex-col">
        <div className="h-16 flex items-center justify-center border-b px-4">
          <h1 className="text-xl font-bold text-gray-800">Workshop Pro</h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {['Dashboard', 'Leads', 'Quotations', 'Bookings', 'Products', 'Invoices', 'Settings'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm font-medium ${
                    item === 'Dashboard'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
        <div className="p-8 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
