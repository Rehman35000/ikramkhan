'use client';

import { motion, type Variants } from 'framer-motion';

const testimonials = [
  {
    quote: 'Afand Yar, CEO, worked with us professionally and handled the entire project on time. He explained every step clearly, analyzed our requirements well, and provided great and fast service. Always available for any queries.',
    name: 'Afand Yar',
    role: 'Chief Executive Officer',
    company: 'TechVentures',
  },
  {
    quote: 'IKANOVA delivered a flawless e-commerce platform for us. The team was responsive, detail-oriented, and met every deadline. Their communication throughout the project was outstanding.',
    name: 'Ayesha Khan',
    role: 'Founder',
    company: 'StyleNest',
  },
  {
    quote: 'The hospital website they built exceeded our expectations. Professional team, clean design, and delivered ahead of schedule. They are always available whenever we need support or updates.',
    name: 'Dr. Tariq Mehmood',
    role: 'Director',
    company: 'St. Elizabeth Hospital',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            What our <span className="gradient-text">clients say</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <svg className="w-6 h-6 text-muted mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
