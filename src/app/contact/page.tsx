'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import MagneticButton from '@/components/MagneticButton'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
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
      const res = await fetch('/api/contact', {
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

  const contactLinks = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'ikanovaofficial@gmail.com',
      href: 'mailto:ikanovaofficial@gmail.com',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Phone',
      value: '+92 309 866 0810',
      href: 'tel:+923098660810',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Office',
      value: 'Blue Area, F-7, Islamabad',
      href: 'https://maps.google.com',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/923098660810',
    },
  ]

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/ikanova',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/923098660810',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/ikanova',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/ikanova',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  const officeLocations = [
    {
      city: 'Islamabad',
      subtitle: 'Head Office',
      address: 'Blue Area, F-7, Islamabad',
    },
    {
      city: 'Karachi',
      subtitle: 'Regional Office',
      address: 'Clifton, Phase 5, Karachi',
    },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#09090b', color: '#fafafa' }}>
      <Navbar />

      <section className="pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-4"
              >
                Get in{' '}
                <span className="gradient-text">touch</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg max-w-xl"
                style={{ color: '#71717a' }}
              >
                Let us discuss how we can help transform your business with technology.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="space-y-3">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.label === 'Office' ? '_blank' : undefined}
                      rel={link.label === 'Office' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3.5 p-4 rounded-xl transition-all duration-300 group cursor-pointer"
                      style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.12)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843', border: '1px solid rgba(212,168,67,0.08)' }}>
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-[10px] mb-0.5 tracking-wider uppercase" style={{ color: '#52525b' }}>{link.label}</p>
                        <p className="text-sm transition-colors" style={{ color: '#fafafa' }}>
                          {link.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <MagneticButton key={social.label} strength={0.3}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{ background: 'rgba(255,255,255,0.03)', color: '#52525b', border: '1px solid rgba(255,255,255,0.04)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#d4a843'; e.currentTarget.style.borderColor = 'rgba(212,168,67,0.15)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#52525b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    </MagneticButton>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-56 rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.02), #09090b, rgba(212,168,67,0.02))' }}>
                    <div className="text-center">
                      <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="rgba(212,168,67,0.12)" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 2.499l1.527-1.527a2.25 2.25 0 013.182 0l1.527 1.527m-2.25-3.75L12 15l-2.25-2.25" />
                      </svg>
                      <p className="text-xs" style={{ color: 'rgba(212,168,67,0.12)' }}>Map View</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center h-full text-center p-12 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'rgba(212,168,67,0.08)' }}
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="w-8 h-8"
                      fill="none" viewBox="0 0 24 24" stroke="#d4a843" strokeWidth={2}
                    >
                      <motion.path
                        strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#fafafa' }}>Message Sent!</h3>
                  <p style={{ color: '#71717a' }} className="max-w-sm text-sm">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: '#a1a1aa' }}>
                        Name *
                      </label>
                      <input
                        type="text" id="name" name="name" required
                        value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm placeholder-[#3f3f46] focus:outline-none transition-all"
                        style={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.06)', color: '#fafafa' }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: '#a1a1aa' }}>
                        Email *
                      </label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm placeholder-[#3f3f46] focus:outline-none transition-all"
                        style={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.06)', color: '#fafafa' }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: '#a1a1aa' }}>
                      Company
                    </label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm placeholder-[#3f3f46] focus:outline-none transition-all"
                      style={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.06)', color: '#fafafa' }}
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: '#a1a1aa' }}>
                      Subject *
                    </label>
                    <select
                      id="subject" name="subject" required
                      value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all appearance-none"
                      style={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.06)', color: '#fafafa' }}
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Project Discussion</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: '#a1a1aa' }}>
                      Message *
                    </label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm placeholder-[#3f3f46] focus:outline-none transition-all resize-none"
                      style={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.06)', color: '#fafafa' }}
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 px-5 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b', boxShadow: '0 4px 24px rgba(212,168,67,0.2)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-[-0.02em]">
              Our{' '}
              <span className="gradient-text">offices</span>
            </h2>
            <p className="text-center mb-10 text-sm" style={{ color: '#52525b' }}>
              Find us around the world
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {officeLocations.map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(212,168,67,0.15)' }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl text-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mx-auto mb-3" style={{ background: '#d4a843', boxShadow: '0 0 8px rgba(212,168,67,0.5)' }} />
                  <h3 className="text-sm font-semibold mb-0.5" style={{ color: '#fafafa' }}>{office.city}</h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#d4a843' }}>{office.subtitle}</p>
                  <p className="text-xs" style={{ color: '#71717a' }}>{office.address}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
