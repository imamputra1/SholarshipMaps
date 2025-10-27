
import React from 'react';
import MonthNavigator from '../components/calendar/MonthNavigator';
import CalendarGrid from '../components/calendar/CalendarGrid';
import EventList from '../components/calendar/EventList';
import FunFact from '../components/calendar/FunFact';

export default function CalenderPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Kalender Beasiswa</h1>
          <p className="text-gray-400">Navigasi dan lihat timeline pendaftaran beasiswa.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Utama (Kiri) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Navigasi Bulan</h2>
              <MonthNavigator />
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-8">
              <h2 className="text-xl font-semibold mb-4">Grid Kalender</h2>
              <CalendarGrid />
            </div>
          </div>

          {/* Sidebar (Kanan) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Daftar Event</h2>
              <EventList />
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Fakta Menarik</h2>
              <FunFact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
