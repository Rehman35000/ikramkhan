'use client';

import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    quote: 'Afand Yar, CEO, worked with us professionally and handled the entire project on time. He explained every step clearly, analyzed our requirements well, and provided great and fast service.',
    name: 'Afand Yar',
    role: 'Chief Executive Officer',
    company: 'TechVentures',
    initials: 'AY',
    rating: 5,
  },
  {
    quote: 'IKANOVA delivered a flawless e-commerce platform for us. The team was responsive, detail-oriented, and met every deadline. Their communication throughout the project was outstanding.',
    name: 'Ayesha Khan',
    role: 'Founder',
    company: 'StyleNest',
    initials: 'AK',
    rating: 5,
  },
  {
    quote: 'The hospital website they built exceeded our expectations. Professional team, clean design, and delivered ahead of schedule. They are always available whenever we need support or updates.',
    name: 'Dr. Tariq Mehmood',
    role: 'Director',
    company: 'St. Elizabeth Hospital',
    initials: 'TM',
    rating: 5,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="absolute inset-0" style={{ background: 'rgba(212, 168, 67, 0.008)' }} />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4" style={{ color: '#fafafa' }}>
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="max-w-xl text-lg" style={{ color: '#71717a' }}>
            Real results from real partnerships.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group relative p-7 rounded-2xl transition-all duration-500 card-hover-glow flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: `1px solid ${activeIndex === i ? 'rgba(212,168,67,0.15)' : 'rgba(255,255,255,0.04)'}`,
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,168,67,0.15)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                setActiveIndex(i);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4" fill="#d4a843" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-[1.8] mb-6 flex-1" style={{ color: '#a1a1aa' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(212,168,67,0.05))', color: '#d4a843', border: '1px solid rgba(212,168,67,0.1)' }}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#fafafa' }}>{testimonial.name}</p>
                  <p className="text-xs" style={{ color: '#52525b' }}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
