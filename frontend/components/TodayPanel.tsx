import React from 'react';
import { Booking } from '../types/booking';

interface TodayPanelProps {
  bookings: Booking[];
}

const TodayPanel: React.FC<TodayPanelProps> = ({ bookings }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 h-full">
      <h2 className="text-xl font-semibold mb-6 flex items-center justify-between">
        <span>Today's Bookings</span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {bookings.length}
        </span>
      </h2>
      <div className="space-y-4">
        {bookings.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-8">No bookings scheduled for today.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{booking.customer_name}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  booking.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                  booking.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                  booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {booking.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Time:</span> {new Date(booking.booking_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Duration:</span> {booking.estimated_duration_minutes} mins
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Mechanic:</span> {booking.assigned_mechanic}
              </p>

              {booking.status !== 'completed' && (
                <div className="mt-4 flex justify-end">
                   <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                     Mark Complete
                   </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodayPanel;
