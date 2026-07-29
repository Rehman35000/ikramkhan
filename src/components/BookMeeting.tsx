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
  const [step, setStep] = useState<'calendar' | 'form' | 'confirm'>('calendar')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let d = 1; d <= daysInMonth; d++) days.push(d)
    return days
  }, [year, month, daysInMonth, firstDay])

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
    setSelectedDay(null)
    setSelectedTime(null)
    setStep('calendar')
  }

  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
    setSelectedDay(null)
    setSelectedTime(null)
    setStep('calendar')
  }

  const canGoPrev = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth())

  const handleContinue = () => {
    if (!selectedDay || !selectedTime) return
    setStep('form')
  }

  const handleSubmit = async () => {
    setError('')
    if (!name || !email) { setError('Please fill in your name and email.'); return }
    setIsSubmitting(true)
    try {
      const dateStr = formatDate(year, month, selectedDay!)
      const res = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date: dateStr, time: selectedTime, notes }),
      })
      if (!res.ok) throw new Error('Failed')
      setStep('confirm')
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
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
    setStep('calendar')
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80]"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={reset}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
                  {step === 'calendar' ? 'Select Date & Time' : step === 'form' ? 'Your Details' : 'Confirmed'}
                </span>
              </div>
              <button onClick={reset} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                style={{ background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)' }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={c.fgSecondary} strokeWidth={2}>
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {step === 'calendar' && (
                  <motion.div key="calendar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="flex items-center justify-between mb-5">
                      <button onClick={prevMonth} disabled={!canGoPrev} className="w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                        style={{ background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)', color: c.fg }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
                      </button>
                      <span className="text-sm font-semibold" style={{ color: c.fg }}>{months[month]} {year}</span>
                      <button onClick={nextMonth} className="w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer"
                        style={{ background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)', color: c.fg }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {daysOfWeek.map(d => (
                        <div key={d} className="text-center text-[10px] font-semibold tracking-wider uppercase py-2" style={{ color: c.fgSecondary }}>{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-6">
                      {calendarDays.map((day, i) => (
                        <div key={i} className="aspect-square">
                          {day !== null && !isPastDate(year, month, day) ? (
                            <button onClick={() => setSelectedDay(day)}
                              className="w-full h-full rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer"
                              style={{
                                background: selectedDay === day ? c.gradient : 'transparent',
                                color: selectedDay === day ? (theme === 'light' ? '#FFFFFF' : '#111111') : c.fg,
                                border: selectedDay === day ? 'none' : `1px solid transparent`,
                                boxShadow: selectedDay === day ? `0 0 16px ${c.glow}` : 'none',
                              }}
                              onMouseEnter={(e) => { if (selectedDay !== day) (e.target as HTMLElement).style.background = theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)' }}
                              onMouseLeave={(e) => { if (selectedDay !== day) (e.target as HTMLElement).style.background = 'transparent' }}>
                              {day}
                            </button>
                          ) : day !== null ? (
                            <div className="w-full h-full rounded-xl text-xs font-medium flex items-center justify-center" style={{ color: c.fgSecondary + '40' }}>{day}</div>
                          ) : null}
                        </div>
                      ))}
                    </div>

                    {selectedDay && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-xs font-semibold mb-3" style={{ color: c.fgSecondary }}>
                          Available times for {months[month]} {selectedDay}, {year}
                        </p>
                        <div className="grid grid-cols-4 gap-2 mb-5">
                          {timeSlots.map(t => (
                            <button key={t} onClick={() => setSelectedTime(t)}
                              className="py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer"
                              style={{
                                background: selectedTime === t ? c.gradient : (theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'),
                                color: selectedTime === t ? (theme === 'light' ? '#FFFFFF' : '#111111') : c.fg,
                                border: `1px solid ${selectedTime === t ? 'transparent' : border}`,
                                boxShadow: selectedTime === t ? `0 0 12px ${c.glow}` : 'none',
                              }}>
                              {t}
                            </button>
                          ))}
                        </div>

                        <motion.button onClick={handleContinue} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
                          style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}` }}>
                          Continue
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {step === 'form' && (
                  <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-5 p-3 rounded-xl flex items-center gap-3" style={{ background: `${c.accent}08`, border: `1px solid ${border}` }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${c.accent}0f`, color: c.accent }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: c.fg }}>{months[month]} {selectedDay}, {year}</p>
                        <p className="text-[10px]" style={{ color: c.fgSecondary }}>{selectedTime} — 30 min</p>
                      </div>
                      <button onClick={() => setStep('calendar')} className="ml-auto text-[10px] font-semibold underline underline-offset-2 cursor-pointer" style={{ color: c.accent }}>Change</button>
                    </div>

                    {error && (
                      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl text-xs font-medium flex items-start gap-2 mb-4"
                        style={{ background: `${c.accent}0f`, border: `1px solid ${c.accent}20`, color: c.accent }}>
                        <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {error}
                      </motion.div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Name *</label>
                        <input value={name} onChange={e => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                          style={{ background: c.bg, border: `1px solid ${border}`, color: c.fg, borderRadius: '14px' }}
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Email *</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                          style={{ background: c.bg, border: `1px solid ${border}`, color: c.fg, borderRadius: '14px' }}
                          placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Notes</label>
                        <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3}
                          className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none"
                          style={{ background: c.bg, border: `1px solid ${border}`, color: c.fg, borderRadius: '14px' }}
                          placeholder="What would you like to discuss?" />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <button onClick={() => setStep('calendar')} className="px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
                        style={{ background: 'transparent', border: `1px solid ${border}`, color: c.fgSecondary, borderRadius: '14px' }}>
                        Back
                      </button>
                      <motion.button onClick={handleSubmit} disabled={isSubmitting} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 rounded-full text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                        style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}`, borderRadius: '14px' }}>
                        {isSubmitting ? (
                          <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Booking...</>
                        ) : 'Confirm Booking'}
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 'confirm' && (
                  <motion.div key="confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${c.accent}0f` }}>
                      <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
                          strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </motion.svg>
                    </motion.div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Meeting Booked!</h3>
                    <p className="text-sm mb-2" style={{ color: c.fgSecondary }}>
                      {months[month]} {selectedDay}, {year} at {selectedTime}
                    </p>
                    <p className="text-xs mb-6 max-w-xs mx-auto" style={{ color: c.fgSecondary }}>
                      A confirmation email has been sent to {email}. We look forward to speaking with you.
                    </p>
                    <button onClick={reset} className="px-8 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
                      style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}`, borderRadius: '14px' }}>
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
