'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into understanding your business, users, and goals through workshops, research, and stakeholder interviews.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'We architect the solution with detailed technical specifications, project timelines, and milestone definitions.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Our design team creates wireframes, prototypes, and pixel-perfect UI designs with your brand identity.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Agile development with sprint cycles, code reviews, and continuous integration for reliable, clean code.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Testing',
    description:
      'Rigorous QA testing including unit tests, integration tests, performance testing, and user acceptance testing.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Deployment',
    description:
      'Seamless deployment with zero-downtime releases, environment setup, and production monitoring.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Support',
    description:
      'Ongoing maintenance, performance optimization, security updates, and feature enhancements post-launch.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stepVariantsRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                  Our Process
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A proven methodology that transforms ideas into exceptional software.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-accent/20" />

            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  variants={isLeft ? stepVariants : stepVariantsRight}
                  className={`relative flex items-start mb-16 last:mb-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row`}
                >
                  <div className={`hidden sm:block sm:w-1/2 ${isLeft ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div className="glass-panel p-8 rounded-2xl border border-border/50 bg-surface/50 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-background font-bold text-lg shrink-0">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background z-10 mt-10" />

                  <div className={`sm:hidden pl-14 w-full`}>
                    <div className="glass-panel p-6 rounded-2xl border border-border/50 bg-surface/50 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-background font-bold text-lg shrink-0">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden sm:block sm:w-1/2 ${isLeft ? 'sm:pl-12' : 'sm:pr-12'}`} />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-panel relative p-12 sm:p-16 rounded-2xl border border-border/50 bg-surface/50 backdrop-blur-sm text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Ready to start your project?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s bring your vision to life with our proven process. From discovery
                  to deployment, we&apos;re with you every step of the way.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-colors duration-200"
                >
                  Get in Touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
