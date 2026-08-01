'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeColors } from '@/hooks/useThemeColors'
import { useTheme } from '@/components/ThemeProvider'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
]

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function isPastDate(year: number, month: number, day: number) {
  const date = new Date(year, month, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

function formatDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

interface BookMeetingProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookMeeting({ isOpen, onClose }: BookMeetingProps) {
  const c = useThemeColors()
  const { theme } = useTheme()
  const border = theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'

  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [error, setError] = useState('')

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let d = 1; d <= daysInMonth; d++) days.push(d)
    return days
  }, [daysInMonth, firstDay])

  const canGoPrev = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth())

  const handleSubmit = async () => {
    setError('')
    if (!selectedDay) { setError('Please select a date.'); return }
    if (!selectedTime) { setError('Please select a time.'); return }
    if (!name || !email) { setError('Please fill in your name and email.'); return }
    setIsSubmitting(true)
    try {
      const dateStr = formatDate(year, month, selectedDay)
      const res = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date: dateStr, time: selectedTime, notes }),
      })
      if (!res.ok) throw new Error('Failed')
      setIsDone(true)
    } catch {
      setError('Something went wrong. Try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setYear(today.getFullYear())
    setMonth(today.getMonth())
    setSelectedDay(null)
    setSelectedTime(null)
    setName('')
    setEmail('')
    setNotes('')
    setIsDone(false)
    setError('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80]"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={reset}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="fixed inset-4 sm:inset-auto sm:top-[5%] sm:left-1/2 sm:-translate-x-1/2 z-[90] overflow-auto"
            style={{ maxWidth: '580px', maxHeight: '90vh', borderRadius: '18px', background: c.cardBg, border: `1px solid ${border}`, boxShadow: theme === 'light' ? '0 24px 80px rgba(0,0,0,0.15)' : '0 24px 80px rgba(0,0,0,0.6)' }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
              style={{ background: c.cardBg, borderBottom: `1px solid ${border}` }}>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={1.5}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: c.fg }}>
                  {isDone ? 'Confirmed' : 'Book a Meeting'}
                </span>
              </div>
              <button onClick={reset} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                style={{ background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)' }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={c.fgSecondary} strokeWidth={2}>
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {isDone ? (
              <div className="p-6 text-center py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${c.accent}0f` }}>
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Meeting Booked!</h3>
                <p className="text-sm mb-2" style={{ color: c.fgSecondary }}>
                  {months[month]} {selectedDay}, {year} at {selectedTime}
                </p>
                <p className="text-xs mb-6 max-w-xs mx-auto" style={{ color: c.fgSecondary }}>
                  Confirmation sent to {email}. We will be in touch shortly.
                </p>
                <button onClick={reset} className="px-8 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
                  style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}`, borderRadius: '14px' }}>
                  Done
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <button onClick={() => { if (canGoPrev) { setMonth(m => m === 0 ? (setYear(y => y - 1), 11) : m - 1); setSelectedDay(null); setSelectedTime(null) } }}
                      disabled={!canGoPrev} className="w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                      style={{ background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)', color: c.fg }}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <span className="text-sm font-semibold" style={{ color: c.fg }}>{months[month]} {year}</span>
                    <button onClick={() => { setMonth(m => m === 11 ? (setYear(y => y + 1), 0) : m + 1); setSelectedDay(null); setSelectedTime(null) }}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer"
                      style={{ background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)', color: c.fg }}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-[2px] mb-0">
                    {daysOfWeek.map(d => (
                      <div key={d} className="text-center text-[10px] font-semibold tracking-wider uppercase py-1.5" style={{ color: c.fgSecondary }}>{d}</div>
                    ))}
                    {calendarDays.map((day, i) => (
                      <div key={i} className="aspect-square">
                        {day !== null && !isPastDate(year, month, day) ? (
                          <button onClick={() => setSelectedDay(day)}
                            className="w-full h-full rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer"
                            style={{
                              background: selectedDay === day ? c.gradient : 'transparent',
                              color: selectedDay === day ? (theme === 'light' ? '#FFFFFF' : '#111111') : c.fg,
                            }}
                            onMouseEnter={(e) => { if (selectedDay !== day) (e.target as HTMLElement).style.background = theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)' }}
                            onMouseLeave={(e) => { if (selectedDay !== day) (e.target as HTMLElement).style.background = 'transparent' }}>
                            {day}
                          </button>
                        ) : day !== null ? (
                          <div className="w-full h-full rounded-lg text-xs font-medium flex items-center justify-center" style={{ color: `${c.fgSecondary}40` }}>{day}</div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDay && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="text-[10px] font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>
                      {months[month]} {selectedDay} — Select time
                    </p>
                    <div className="grid grid-cols-4 gap-1.5 mb-1">
                      {timeSlots.map(t => (
                        <button key={t} onClick={() => setSelectedTime(t)}
                          className="py-1.5 rounded-lg text-[11px] font-medium transition-all duration-150 cursor-pointer"
                          style={{
                            background: selectedTime === t ? c.gradient : (theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'),
                            color: selectedTime === t ? (theme === 'light' ? '#FFFFFF' : '#111111') : c.fg,
                            border: `1px solid ${selectedTime === t ? 'transparent' : border}`,
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedDay && selectedTime && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 pt-1">
                    {error && (
                      <div className="p-2.5 rounded-xl text-xs font-medium flex items-start gap-2"
                        style={{ background: `${c.accent}0f`, border: `1px solid ${c.accent}20`, color: c.accent }}>
                        <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {error}
                      </div>
                    )}
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name *"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                      style={{ background: c.bg, border: `1px solid ${border}`, color: c.fg, borderRadius: '12px' }} />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email *"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                      style={{ background: c.bg, border: `1px solid ${border}`, color: c.fg, borderRadius: '12px' }} />
                    <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} placeholder="What to discuss? (optional)"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all resize-none"
                      style={{ background: c.bg, border: `1px solid ${border}`, color: c.fg, borderRadius: '12px' }} />
                    <motion.button onClick={handleSubmit} disabled={isSubmitting} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-full text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                      style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}`, borderRadius: '14px' }}>
                      {isSubmitting ? (
                        <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Booking...</>
                      ) : 'Confirm Booking'}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
