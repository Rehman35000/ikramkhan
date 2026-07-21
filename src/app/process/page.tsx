'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, users, and goals.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We architect the solution with detailed specs and timelines.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description: 'Wireframes, prototypes, and pixel-perfect UI designs.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development',
    description: 'Agile sprints with code reviews and continuous integration.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous QA including unit, integration, and performance testing.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Deployment',
    description: 'Zero-downtime releases with environment setup and monitoring.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Support',
    description: 'Ongoing maintenance, optimization, and feature enhancements.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const stepVariantsRight: Variants = {
  hidden: { opacity: 0, x: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProcessPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#09090b' }}>
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(800px circle at 50% 30%, rgba(212,168,67,0.03), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>How we work</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
                <span className="gradient-text">Process</span>
              </h1>
              <p className="text-lg sm:text-xl leading-[1.7]" style={{ color: '#71717a' }}>
                A proven methodology that transforms ideas into exceptional software.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px" style={{ background: 'rgba(212,168,67,0.1)' }} />

            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  variants={isLeft ? stepVariants : stepVariantsRight}
                  className={`relative flex items-start mb-12 last:mb-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row`}
                >
                  <div className={`hidden sm:block sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="p-6 rounded-2xl transition-all duration-300" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                          style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}>
                          {step.number}
                        </div>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843', border: '1px solid rgba(212,168,67,0.08)' }}>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: '#fafafa' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-[1.7]" style={{ color: '#71717a' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 w-2.5 h-2.5 rounded-full z-10 mt-8" style={{ background: '#d4a843', border: '2px solid #09090b', boxShadow: '0 0 12px rgba(212,168,67,0.4)' }} />

                  <div className="sm:hidden pl-10 w-full">
                    <div className="p-5 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                          style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}>
                          {step.number}
                        </div>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843', border: '1px solid rgba(212,168,67,0.08)' }}>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: '#fafafa' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-[1.7]" style={{ color: '#71717a' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden sm:block sm:w-1/2 ${isLeft ? 'sm:pl-10' : 'sm:pr-10'}`} />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-12 sm:p-16 rounded-3xl text-center overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(212,168,67,0.03), transparent 60%)' }} />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-[-0.03em]" style={{ color: '#fafafa' }}>
                  Ready to start?
                </h2>
                <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#71717a' }}>
                  Let us bring your vision to life with our proven process.
                </p>
                <MagneticButton strength={0.15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.25)]"
                    style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}
                  >
                    Get in touch
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
