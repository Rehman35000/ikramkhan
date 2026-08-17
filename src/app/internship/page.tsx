'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { useThemeColors } from '@/hooks/useThemeColors'

interface InternshipFormData {
  fullName: string
  email: string
  phone: string
  university: string
  degree: string
  fieldOfStudy: string
  yearOfStudy: string
  graduationYear: string
  position: string
  availableFrom: string
  duration: string
  skills: string
  github: string
  linkedin: string
  portfolio: string
  whyInterested: string
  experience: string
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

const durations = [
  '1 Month',
  '2 Months',
  '3 Months',
  '6 Months',
]

const years = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  'Final Year',
  'Graduate',
  'Masters',
  'PhD',
]

export default function InternshipPage() {
  const c = useThemeColors()
  const { theme } = useTheme()
  const border = theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'

  const [formData, setFormData] = useState<InternshipFormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    degree: '',
    fieldOfStudy: '',
    yearOfStudy: '',
    graduationYear: '',
    position: '',
    availableFrom: '',
    duration: '',
    skills: '',
    github: '',
    linkedin: '',
    portfolio: '',
    whyInterested: '',
    experience: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setIsSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email us directly at ikanovaofficial@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    background: c.bg,
    border: `1px solid ${border}`,
    color: c.fg,
    borderRadius: '14px',
  }

  const benefits = [
    { icon: '🎯', title: 'Real Projects', desc: 'Work on live client projects from day one' },
    { icon: '👨‍🏫', title: 'Mentorship', desc: 'Guidance from senior engineers and designers' },
    { icon: '📜', title: 'Certificate', desc: 'Official internship completion certificate' },
    { icon: '💼', title: 'Portfolio', desc: 'Build a strong professional portfolio' },
    { icon: '🤝', title: 'Networking', desc: 'Connect with industry professionals' },
    { icon: '🚀', title: 'Career Growth', desc: 'Potential full-time job opportunities' },
  ]

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.fg }}>
      <Navbar />

      <section className="pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                style={{ background: `${c.accent}0f`, border: `1px solid ${border}`, color: c.accent }}
              >
                <span className="text-[10px] font-semibold tracking-widest uppercase">Now Accepting Applications</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-4"
              >
                Open <span className="gradient-text">Internship</span> Program
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg max-w-xl mx-auto"
                style={{ color: c.fgSecondary }}
              >
                Join IKANOVA and gain hands-on experience building real-world software products.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="p-6 transition-all duration-300"
                  style={{ background: c.cardBg, border: `1px solid ${border}`, borderRadius: '18px', boxShadow: theme === 'light' ? '0 1px 3px rgba(0,0,0,0.04)' : '0 1px 3px rgba(0,0,0,0.3)' }}
                >
                  <span className="text-2xl mb-3 block">{b.icon}</span>
                  <h3 className="text-sm font-bold mb-1" style={{ color: c.fg }}>{b.title}</h3>
                  <p className="text-xs" style={{ color: c.fgSecondary }}>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <AnimatedSection>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center p-12"
                  style={{ background: c.cardBg, border: `1px solid ${border}`, borderRadius: '18px', boxShadow: theme === 'light' ? '0 1px 3px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.3), 0 12px 24px rgba(0,0,0,0.4)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: `${c.accent}0f` }}
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="w-8 h-8"
                      fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}
                    >
                      <motion.path
                        strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: c.fg }}>Application Submitted!</h3>
                  <p style={{ color: c.fgSecondary }} className="max-w-sm text-sm">
                    Thank you for applying to the IKANOVA internship program. We have sent you a confirmation email and will review your application within 5 business days.
                  </p>
                </motion.div>
              </AnimatedSection>
            ) : (
              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-6 p-8 sm:p-10"
                  style={{ background: c.cardBg, border: `1px solid ${border}`, borderRadius: '18px', boxShadow: theme === 'light' ? '0 1px 3px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.3), 0 12px 24px rgba(0,0,0,0.4)' }}>

                  <div>
                    <h2 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Personal Information</h2>
                    <p className="text-xs" style={{ color: c.fgSecondary }}>Basic contact and identity details</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Full Name *</label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="john@university.edu" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="+92 300 1234567" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>LinkedIn Profile</label>
                      <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="https://linkedin.com/in/yourprofile" />
                    </div>
                  </div>

                  <div className="h-px" style={{ background: border }} />

                  <div>
                    <h2 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Education</h2>
                    <p className="text-xs" style={{ color: c.fgSecondary }}>Your academic background</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>University / College *</label>
                      <input type="text" name="university" required value={formData.university} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="e.g. COMSATS University" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Degree *</label>
                      <input type="text" name="degree" required value={formData.degree} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="e.g. BS Computer Science" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Field of Study *</label>
                      <input type="text" name="fieldOfStudy" required value={formData.fieldOfStudy} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="e.g. Software Engineering" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Current Year *</label>
                      <select name="yearOfStudy" required value={formData.yearOfStudy} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all appearance-none"
                        style={inputStyle}>
                        <option value="" disabled>Select year</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Expected Graduation Year *</label>
                    <input type="text" name="graduationYear" required value={formData.graduationYear} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                      style={inputStyle}
                      placeholder="e.g. 2027" />
                  </div>

                  <div className="h-px" style={{ background: border }} />

                  <div>
                    <h2 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Internship Details</h2>
                    <p className="text-xs" style={{ color: c.fgSecondary }}>What you want to do and when</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Preferred Position *</label>
                      <select name="position" required value={formData.position} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all appearance-none"
                        style={inputStyle}>
                        <option value="" disabled>Select a position</option>
                        {positions.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Duration *</label>
                      <select name="duration" required value={formData.duration} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all appearance-none"
                        style={inputStyle}>
                        <option value="" disabled>Select duration</option>
                        {durations.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Available From *</label>
                    <input type="date" name="availableFrom" required value={formData.availableFrom} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                      style={inputStyle} />
                  </div>

                  <div className="h-px" style={{ background: border }} />

                  <div>
                    <h2 className="text-lg font-bold mb-1" style={{ color: c.fg }}>Skills & Portfolio</h2>
                    <p className="text-xs" style={{ color: c.fgSecondary }}>Show us what you can do</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Technical Skills *</label>
                    <input type="text" name="skills" required value={formData.skills} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                      style={inputStyle}
                      placeholder="e.g. JavaScript, React, Python, Node.js" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>GitHub Profile</label>
                      <input type="url" name="github" value={formData.github} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="https://github.com/yourusername" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Portfolio / Website</label>
                      <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="https://yourportfolio.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Relevant Experience</label>
                    <textarea name="experience" rows={3} value={formData.experience} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none"
                      style={inputStyle}
                      placeholder="Describe any previous projects, hackathons, or work experience..." />
                  </div>

                  <div className="h-px" style={{ background: border }} />

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: c.fgSecondary }}>Why do you want to intern at IKANOVA? *</label>
                    <textarea name="whyInterested" required rows={4} value={formData.whyInterested} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none"
                      style={inputStyle}
                      placeholder="Tell us what excites you about this opportunity and what you hope to learn..." />
                  </div>

                  <motion.button type="submit" disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-5 rounded-full font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}` }}>
                    {isSubmitting ? (
                      <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Submitting...</>
                    ) : 'Submit Application'}
                  </motion.button>
                </form>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
