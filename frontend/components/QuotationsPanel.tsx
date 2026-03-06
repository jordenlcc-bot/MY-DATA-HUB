import React from 'react';
import { Quotation } from '../types/quotation';

interface QuotationsPanelProps {
  quotations: Quotation[];
}

const QuotationsPanel: React.FC<QuotationsPanelProps> = ({ quotations }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 h-full">
      <h2 className="text-xl font-semibold mb-6 flex items-center justify-between">
        <span>Pending Quotations</span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {quotations.length}
        </span>
      </h2>
      <div className="space-y-4">
        {quotations.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-8">No pending quotations.</p>
        ) : (
          quotations.map((quotation) => (
            <div key={quotation.id} className="p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{quotation.customer_name}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded bg-yellow-100 text-yellow-800">
                  {quotation.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Total:</span> RM{quotation.total_amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Items:</span> {quotation.line_items.length}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-medium">Valid until:</span> {new Date(quotation.valid_until).toLocaleDateString()}
              </p>

              <div className="mt-4 flex gap-2 justify-end">
                <button className="text-sm text-red-600 hover:text-red-800 font-medium px-3 py-1.5 rounded hover:bg-red-50 transition-colors border border-transparent hover:border-red-200">
                  Reject
                </button>
                <button className="text-sm text-white bg-green-600 hover:bg-green-700 font-medium px-3 py-1.5 rounded transition-colors shadow-sm">
                  Accept & Book
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuotationsPanel;
