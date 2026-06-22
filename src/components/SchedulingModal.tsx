'use client';

import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM',
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function SchedulingModal({ isOpen, onClose }: Props) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (month === 0) { setYear(year - 1); setMonth(11); }
    else setMonth(month - 1);
    setSelectedDate(null);
    setSelectedTime('');
  };

  const nextMonth = () => {
    if (month === 11) { setYear(year + 1); setMonth(0); }
    else setMonth(month + 1);
    setSelectedDate(null);
    setSelectedTime('');
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    const dateStr = `${months[month]} ${selectedDate}, ${year}`;
    const subject = encodeURIComponent('Book 1-to-1 Meeting with Ikram Khan');
    const body = encodeURIComponent(
      `Hi Ikram,\n\nI'd like to schedule a 1-to-1 meeting.\n\nDate: ${dateStr}\nTime: ${selectedTime}\n\nLooking forward to connecting!`
    );
    window.location.href = `mailto:ikramullah35000@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  const isPastDate = (day: number) => {
    const d = new Date(year, month, day);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return d < now;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden"
        style={{ background: '#fff', borderColor: '#e5e7eb' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: '#e5e7eb' }}>
          <div>
            <h3 className="text-lg font-bold" style={{ color: '#111' }}>Schedule a Meeting</h3>
            <p className="text-xs mt-0.5" style={{ color: '#888' }}>Pick a date and time that works for you</p>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: '#666' }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <button type="button" onClick={prevMonth} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: '#666' }}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span className="text-sm font-bold" style={{ color: '#111' }}>
              {months[month]} {year}
            </span>
            <button type="button" onClick={nextMonth} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: '#666' }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((d) => (
              <div key={d} className="text-center text-xs font-medium py-1.5" style={{ color: '#888' }}>
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`e-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const past = isPastDate(day);
              const sel = selectedDate === day;
              return (
                <button
                  key={day}
                  type="button"
                  disabled={past}
                  onClick={() => setSelectedDate(day)}
                  className="rounded-lg text-sm font-medium py-2 transition-all"
                  style={{
                    background: sel ? '#e53935' : 'transparent',
                    color: sel ? '#fff' : past ? '#ccc' : '#111',
                    cursor: past ? 'not-allowed' : 'pointer',
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {selectedDate && (
            <div className="mt-5 pt-5 border-t" style={{ borderColor: '#e5e7eb' }}>
              <p className="text-sm font-medium mb-3" style={{ color: '#111' }}>
                Select a time slot for {months[month]} {selectedDate}
              </p>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium border transition-all"
                    style={{
                      background: selectedTime === t ? '#e53935' : '#fafafa',
                      color: selectedTime === t ? '#fff' : '#555',
                      borderColor: selectedTime === t ? '#e53935' : '#e5e7eb',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t" style={{ borderColor: '#e5e7eb', background: '#fafafa' }}>
          <p className="text-xs" style={{ color: '#888' }}>
            {selectedDate && selectedTime
              ? `${months[month]} ${selectedDate}, ${year} at ${selectedTime}`
              : 'Select a date and time to continue'}
          </p>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTime}
            className="rounded-full px-6 py-2 text-sm font-bold text-white transition-all"
            style={{
              background: selectedDate && selectedTime ? '#e53935' : '#ccc',
              cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed',
            }}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
