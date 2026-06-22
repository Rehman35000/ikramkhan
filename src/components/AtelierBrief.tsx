'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const projectOptions = [
  'Agentic AI',
  'Automations',
  'Web Applications',
  'Website',
  'E-commerce',
  'Management System',
  'WordPress CMS',
  'Not Sure Yet',
];

const industryOptions = [
  'Healthcare',
  'Finance & Fintech',
  'E-commerce & Retail',
  'Education & E-Learning',
  'Real Estate & Property',
  'Technology & SaaS',
  'Marketing & Media',
  'Logistics & Transportation',
  'Hospitality & Travel',
  'Other',
];

export default function AtelierBrief() {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const [industry, setIndustry] = useState('');
  const [industryOpen, setIndustryOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', success: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: '#fafafa' }}>
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
              Atelier Brief
            </h2>
            <div className="h-px flex-1" style={{ background: '#e5e7eb' }} />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Dropdown */}
          <AnimatedSection>
            <div className="rounded-2xl border p-6 sm:p-8 shadow-sm" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#111' }}>
                What are you building?
              </h3>
              <p className="text-sm mb-6" style={{ color: '#666' }}>
                Select the type of project you have in mind.
              </p>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between rounded-xl border px-5 py-3.5 text-sm font-medium transition-all"
                  style={{
                    background: '#fafafa',
                    borderColor: open ? '#e53935' : '#e5e7eb',
                    color: selected ? '#111' : '#888',
                  }}
                >
                  <span>{selected || 'Choose a project type...'}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform duration-200"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {open && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-xl overflow-hidden z-20"
                    style={{ background: '#fff', borderColor: '#e5e7eb' }}
                  >
                    {projectOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSelected(opt);
                          setOpen(false);
                        }}
                        className="w-full text-left px-5 py-3 text-sm font-medium transition-colors hover:bg-[#fafafa]"
                        style={{
                          color: selected === opt ? '#e53935' : '#111',
                          background: selected === opt ? 'rgba(229,57,53,0.04)' : 'transparent',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selected && (
                <div className="mt-6 p-4 rounded-xl border" style={{ background: 'rgba(229,57,53,0.04)', borderColor: 'rgba(229,57,53,0.1)' }}>
                  <p className="text-sm font-medium" style={{ color: '#e53935' }}>
                    You selected: <span className="font-bold">{selected}</span>
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#888' }}>
                    Great choice! Fill out the form and let&apos;s bring your idea to life.
                  </p>
                </div>
              )}

              <div className="mt-6">
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>
                  Industry
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIndustryOpen(!industryOpen)}
                    className="w-full flex items-center justify-between rounded-xl border px-5 py-3.5 text-sm font-medium transition-all"
                    style={{
                      background: '#fafafa',
                      borderColor: industryOpen ? '#e53935' : '#e5e7eb',
                      color: industry ? '#111' : '#888',
                    }}
                  >
                    <span>{industry || 'Select your industry...'}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-200"
                      style={{ transform: industryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {industryOpen && (
                    <div
                      className="absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-xl overflow-hidden z-20"
                      style={{ background: '#fff', borderColor: '#e5e7eb' }}
                    >
                      {industryOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setIndustry(opt);
                            setIndustryOpen(false);
                          }}
                          className="w-full text-left px-5 py-3 text-sm font-medium transition-colors hover:bg-[#fafafa]"
                          style={{
                            color: industry === opt ? '#e53935' : '#111',
                            background: industry === opt ? 'rgba(229,57,53,0.04)' : 'transparent',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Contact Form */}
          <AnimatedSection>
            <div className="rounded-2xl border p-6 sm:p-8 shadow-sm" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#111' }}>
                Send a Message
              </h3>
              <p className="text-sm mb-6" style={{ color: '#666' }}>
                Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>

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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>
                      Name <span style={{ color: '#e53935' }}>*</span>
                    </label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none"
                      style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                      placeholder="Your name"
                      onFocus={(e) => e.target.style.borderColor = '#e53935'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>
                      Email <span style={{ color: '#e53935' }}>*</span>
                    </label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none"
                      style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                      placeholder="your@email.com"
                      onFocus={(e) => e.target.style.borderColor = '#e53935'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>
                      Subject <span style={{ color: '#e53935' }}>*</span>
                    </label>
                    <input
                      type="text" required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none"
                      style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                      placeholder="Project Inquiry"
                      onFocus={(e) => e.target.style.borderColor = '#e53935'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>
                      What&apos;s on your mind? <span style={{ color: '#e53935' }}>*</span>
                    </label>
                    <textarea
                      required rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none resize-none"
                      style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                      placeholder="Tell me about your project..."
                      onFocus={(e) => e.target.style.borderColor = '#e53935'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: '#666' }}>
                      What does success look like?
                    </label>
                    <textarea
                      rows={2}
                      value={form.success}
                      onChange={(e) => setForm({ ...form, success: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none resize-none"
                      style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#111' }}
                      placeholder="Describe the outcome you&apos;re working towards..."
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
