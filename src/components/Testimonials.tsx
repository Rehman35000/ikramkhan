'use client';

import { motion, type Variants } from 'framer-motion';

const testimonials = [
  {
    quote: 'Afand Yar, CEO, worked with us professionally and handled the entire project on time. He explained every step clearly, analyzed our requirements well, and provided great and fast service. Always available for any queries — highly recommended!',
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
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-8 border border-border bg-card/50 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 via-accent/20 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg className="w-10 h-10 text-accent/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-foreground font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
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
