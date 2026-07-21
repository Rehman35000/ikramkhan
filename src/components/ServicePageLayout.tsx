'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  heroContent: ReactNode;
  whatIsSection: ReactNode;
  benefits: { title: string; description: string; icon: ReactNode }[];
  technologies: { category: string; items: string[] }[];
  process: { step: string; title: string; description: string }[];
  caseStudy?: { title: string; description: string; metrics: { label: string; value: string }[]; tech: string[] };
  faqs: FAQItem[];
  ctaTitle?: string;
  ctaDescription?: string;
}

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl transition-all duration-300"
          style={{
            border: `1px solid ${openIndex === i ? 'rgba(212,168,67,0.15)' : 'rgba(255,255,255,0.04)'}`,
            background: openIndex === i ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.015)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
          >
            <span className="text-sm font-semibold pr-4" style={{ color: '#fafafa' }}>{item.question}</span>
            <svg
              className="w-4 h-4 shrink-0 transition-transform duration-300"
              style={{
                color: openIndex === i ? '#d4a843' : '#52525b',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-sm leading-[1.8]" style={{ color: '#71717a' }}>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ServicePageLayout({
  badge,
  title,
  highlight,
  description,
  heroContent,
  whatIsSection,
  benefits,
  technologies,
  process,
  caseStudy,
  faqs,
  ctaTitle = 'Ready to get started?',
  ctaDescription = 'Let us discuss how we can help bring your vision to life.',
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(800px circle at 50% 30%, rgba(212,168,67,0.03), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>{badge}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
              {title} <span className="gradient-text">{highlight}</span>
            </h1>
            <p className="text-lg sm:text-xl leading-[1.7] max-w-2xl" style={{ color: '#71717a' }}>
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="px-6 lg:px-8 -mt-4">
        <div className="max-w-7xl mx-auto">
          {heroContent}
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {whatIsSection}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-8" style={{ background: 'rgba(212,168,67,0.008)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Why choose us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-16" style={{ color: '#fafafa' }}>
            Benefits of working with IKANOVA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl transition-all duration-500 card-hover-glow"
                style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212,168,67,0.12)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843', border: '1px solid rgba(212,168,67,0.08)' }}>
                  {benefit.icon}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#fafafa' }}>{benefit.title}</h3>
                <p className="text-sm leading-[1.7]" style={{ color: '#71717a' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Tech stack</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-16" style={{ color: '#fafafa' }}>
            Technologies we use
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}
              >
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#fafafa' }}>{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: 'rgba(212,168,67,0.06)', color: '#a1a1aa', border: '1px solid rgba(212,168,67,0.08)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8" style={{ background: 'rgba(212,168,67,0.008)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Our process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-16" style={{ color: '#fafafa' }}>
            How we deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold mb-4"
                  style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}>
                  {step.step}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#fafafa' }}>{step.title}</h3>
                <p className="text-sm leading-[1.7]" style={{ color: '#71717a' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {caseStudy && (
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Case study</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-8" style={{ color: '#fafafa' }}>
              {caseStudy.title}
            </h2>
            <div className="p-8 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
              <p className="text-sm leading-[1.8] mb-6" style={{ color: '#a1a1aa' }}>{caseStudy.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {caseStudy.metrics.map((m, i) => (
                  <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.08)' }}>
                    <div className="text-2xl font-bold gradient-text mb-1">{m.value}</div>
                    <div className="text-[10px] tracking-wider uppercase" style={{ color: '#52525b' }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{ background: 'rgba(255,255,255,0.04)', color: '#71717a', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-12" style={{ color: '#fafafa' }}>
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-[-0.03em]" style={{ color: '#fafafa' }}>
            {ctaTitle}
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#71717a' }}>
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.25)]"
              style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}
            >
              Start a project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(212,168,67,0.06)]"
              style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#fafafa' }}
            >
              Schedule a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
