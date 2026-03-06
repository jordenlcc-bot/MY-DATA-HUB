import React from 'react';
import { Lead } from '../types/lead';

interface LeadsPanelProps {
  leads: Lead[];
}

const LeadsPanel: React.FC<LeadsPanelProps> = ({ leads }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 h-full">
      <h2 className="text-xl font-semibold mb-6 flex items-center justify-between">
        <span>Unread Leads</span>
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {leads.length}
        </span>
      </h2>
      <div className="space-y-4">
        {leads.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-8">No unread leads.</p>
        ) : (
          leads.map((lead) => (
            <div key={lead.id} className="p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{lead.customer_name}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded bg-indigo-100 text-indigo-800 capitalize">
                  {lead.source}
                </span>
              </div>
              <p className="text-sm text-gray-800 font-medium mb-1">
                {lead.vehicle_model}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">
                "{lead.inquiry_details}"
              </p>

              <div className="mt-4 flex gap-2 justify-end">
                <button className="text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-1.5 rounded hover:bg-gray-200 transition-colors">
                  Mark Read
                </button>
                <button className="text-sm text-white bg-blue-600 hover:bg-blue-700 font-medium px-3 py-1.5 rounded transition-colors">
                  Create Quote
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LeadsPanel;
