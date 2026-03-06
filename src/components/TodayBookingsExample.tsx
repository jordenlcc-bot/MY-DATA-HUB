import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../lib/firebaseClient';

interface Booking {
  id: string;
  customer_name: string;
  booking_date: string;
  status: string;
  vehicle_model: string;
}

export const TodayBookingsExample: React.FC<{ workshopId: string }> = ({ workshopId }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodayBookings = async () => {
      try {
        setLoading(true);
        // Start and end of today
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const endOfToday = new Date();
        endOfToday.setHours(23, 59, 59, 999);

        // Firestore reference specific to the tenant
        const bookingsRef = collection(firestore, `workshops/${workshopId}/bookings`);

        // Query for bookings scheduled for today
        const q = query(
          bookingsRef,
          where('booking_date', '>=', startOfToday.toISOString()),
          where('booking_date', '<=', endOfToday.toISOString())
        );

        const querySnapshot = await getDocs(q);
        const fetchedBookings: Booking[] = [];

        querySnapshot.forEach((doc) => {
          fetchedBookings.push({ id: doc.id, ...doc.data() } as Booking);
        });

        setBookings(fetchedBookings);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    if (workshopId) {
      fetchTodayBookings();
    }
  }, [workshopId]);

  if (loading) return <div>Loading today's bookings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Today's Bookings ({bookings.length})</h3>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>
            {b.customer_name} - {b.vehicle_model} at {new Date(b.booking_date).toLocaleTimeString()} [{b.status}]
          </li>
        ))}
      </ul>
    </div>
  );
};
