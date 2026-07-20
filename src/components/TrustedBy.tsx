'use client';

import { motion } from 'framer-motion';

const companies = ['TechVault', 'DataFlow', 'CloudNine', 'Quantix', 'NexGen', 'Synapse'];

export default function TrustedBy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm font-medium tracking-wider uppercase mb-12"
        >
          Trusted by Industry Leaders
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-2 text-muted-foreground/40 group-hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                <span className="text-xl font-bold tracking-tight">{company}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
