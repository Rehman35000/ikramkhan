'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, FormEvent } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { useThemeColors } from '@/hooks/useThemeColors'

interface FormData {
  fullName: string
  email: string
  phone: string
  university: string
  position: string
  skills: string
  whyInterested: string
}

const positions = [
  'Frontend Development',
  'Backend Development',
  'Mobile App Development',
  'UI/UX Design',
  'AI / Machine Learning',
  'DevOps & Cloud',
  'Full Stack Development',
  'QA / Testing',
]

export default function InternshipPopup() {
  const c = useThemeColors()
  const { theme } = useTheme()
  const border = theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'

  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    position: '',
    skills: '',
    whyInterested: '',
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/internship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          degree: '—',
          fieldOfStudy: '—',
          yearOfStudy: '—',
          graduationYear: '—',
          availableFrom: '—',
          duration: '—',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setIsSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    background: c.bg,
    border: `1px solid ${border}`,
    color: c.fg,
    borderRadius: '12px',
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
            className="fixed inset-0 z-[100]"
            style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
              style={{
                background: c.cardBg,
                border: `1px solid ${border}`,
                borderRadius: '24px',
                boxShadow: theme === 'light'
                  ? '0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)'
                  : '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                style={{
                  background: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)',
                  color: c.fgSecondary,
                }}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div
                className="px-6 pt-8 pb-4 text-center"
                style={{
                  background: `linear-gradient(135deg, ${c.accent}08, transparent)`,
                  borderRadius: '24px 24px 0 0',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: c.gradient, boxShadow: `0 0 24px ${c.glow}` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme === 'light' ? '#FFFFFF' : '#111111'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                </motion.div>
                <h2 className="text-xl font-bold mb-1" style={{ color: c.fg }}>
                  We&apos;re Hiring <span className="gradient-text">Interns!</span>
                </h2>
                <p className="text-xs max-w-xs mx-auto" style={{ color: c.fgSecondary }}>
                  Join IKANOVA and work on real-world projects with our engineering team.
                </p>
              </div>

              <div className="px-6 pb-6 pt-2">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: `${c.accent}0f` }}
                    >
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Applied!</h3>
                    <p className="text-xs mb-4" style={{ color: c.fgSecondary }}>
                      We&apos;ll review your application and get back to you soon.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 16px ${c.glow}` }}
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Full Name *</label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                          style={inputStyle}
                          placeholder="you@email.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Phone *</label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                          style={inputStyle}
                          placeholder="+92 300 1234567" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>University *</label>
                      <input type="text" name="university" required value={formData.university} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="e.g. COMSATS University" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Preferred Position *</label>
                      <select name="position" required value={formData.position} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all appearance-none"
                        style={inputStyle}>
                        <option value="" disabled>Select a position</option>
                        {positions.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Key Skills *</label>
                      <input type="text" name="skills" required value={formData.skills} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="e.g. JavaScript, React, Python" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-wider uppercase mb-1.5" style={{ color: c.fgSecondary }}>Why IKANOVA? *</label>
                      <textarea name="whyInterested" required rows={2} value={formData.whyInterested} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none transition-all resize-none"
                        style={inputStyle}
                        placeholder="Brief reason..." />
                    </div>

                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="flex-1 py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                        style={{
                          background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
                          color: c.fgSecondary,
                          border: `1px solid ${border}`,
                        }}
                      >
                        Skip
                      </button>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-[2] py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                        style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 20px ${c.glow}` }}
                      >
                        {isSubmitting ? (
                          <><svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Submitting...</>
                        ) : 'Apply Now'}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
