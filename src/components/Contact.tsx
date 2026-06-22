'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from './AnimatedSection';

const meetingTypes = [
  {
    title: '15-Minute Chat',
    desc: 'Quick introduction or casual conversation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    color: 'bg-accent/10 text-accent',
    href: 'mailto:ikramullah35000@gmail.com?subject=15min%20Meeting%20Request&body=Hi%20Ikram%2C%0A%0AI%27d%20like%20to%20schedule%20a%2015-minute%20chat.',
  },
  {
    title: '30-Minute Deep Dive',
    desc: 'Project discussion or technical consultation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M12 14l-2 2 2 2 2-2-2-2z" />
      </svg>
    ),
    color: 'bg-purple-500/10 text-purple-400',
    href: 'mailto:ikramullah35000@gmail.com?subject=30min%20Meeting%20Request&body=Hi%20Ikram%2C%0A%0AI%27d%20like%20to%20schedule%20a%2030-minute%20meeting%20to%20discuss%20a%20potential%20project.',
  },
  {
    title: 'Instant Call',
    desc: 'Call me directly right now',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    color: 'bg-emerald-500/10 text-emerald-400',
    href: 'tel:03098660810',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: '#fafafa' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#111' }}>
              Contact &amp; Meetings
            </h2>
            <div className="h-px flex-1" style={{ background: '#e5e7eb' }} />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#111' }}>
                  Book a Meeting
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                  Choose the type of meeting that fits your needs. I&apos;ll get back to you promptly.
                </p>
              </div>

              <div className="space-y-3">
                {meetingTypes.map((mt) => (
                  <a
                    key={mt.title}
                    href={mt.href}
                    target={mt.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={mt.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: '#fff', borderColor: '#e5e7eb' }}
                  >
                    <div className={`w-11 h-11 rounded-xl ${mt.color} flex items-center justify-center shrink-0`}>
                      {mt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold group-hover:text-[#e53935] transition-colors" style={{ color: '#111' }}>
                        {mt.title}
                      </p>
                      <p className="text-xs" style={{ color: '#888' }}>
                        {mt.desc}
                      </p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-colors group-hover:text-[#e53935]" style={{ color: '#888' }}>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { label: 'GitHub', href: 'https://github.com', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385' },
                  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'M20.447 20.452h-3.554v-5.569' },
                  { label: 'WhatsApp', href: 'https://wa.me/923098660810', icon: 'M17.472 14.382c-.297-.149' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium transition-colors hover:text-[#e53935]" style={{ color: '#888' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl border p-6 sm:p-8 shadow-sm" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#111' }}>
                Send a Message
              </h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(229,57,53,0.1)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e53935' }}>
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#111' }}>Message sent!</h4>
                  <p className="text-sm" style={{ color: '#666' }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none"
                        style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                        placeholder="Your Name"
                        onFocus={(e) => e.target.style.borderColor = '#e53935'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none"
                        style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                        placeholder="your@email.com"
                        onFocus={(e) => e.target.style.borderColor = '#e53935'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none resize-none"
                      style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                      placeholder="Tell me about your project..."
                      onFocus={(e) => e.target.style.borderColor = '#e53935'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                    style={{ background: '#e53935', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
