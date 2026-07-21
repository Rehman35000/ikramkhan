'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications, SPAs, and full-stack solutions built with modern frameworks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    features: [
      'Custom web applications & SPAs',
      'React, Next.js, and Vue.js development',
      'Node.js and Python backend engineering',
      'PostgreSQL, MongoDB, and Redis databases',
      'Progressive Web Apps (PWA)',
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    features: [
      'React Native & Flutter cross-platform apps',
      'Native Swift (iOS) & Kotlin (Android) development',
      'Offline-first architecture & data sync',
      'Push notifications & real-time features',
      'App Store & Play Store submission',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that transforms complex problems into intuitive interfaces.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    features: [
      'User research & persona development',
      'Wireframing & interactive prototyping',
      'Design system creation & documentation',
      'Usability testing & iteration',
      'Responsive & mobile-first design',
    ],
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent systems using machine learning, NLP, and computer vision.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    features: [
      'Custom machine learning model development',
      'Natural language processing & chatbots',
      'Computer vision & image recognition',
      'AI agent orchestration & automation',
      'Predictive analytics & recommendation engines',
    ],
  },
  {
    title: 'SaaS Development',
    description: 'End-to-end SaaS platforms from multi-tenant architecture to subscription billing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    features: [
      'Multi-tenant architecture & data isolation',
      'Subscription billing & payment integration',
      'Role-based access control & permissions',
      'Analytics dashboards & reporting',
      'White-label solutions & customization',
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud-native infrastructure across AWS, Azure, and GCP for reliability and scale.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    features: [
      'AWS, Azure, and GCP architecture design',
      'Cloud migration & modernization',
      'Infrastructure as Code (Terraform, Pulumi)',
      'CI/CD pipeline setup & DevOps practices',
      'Cost optimization & performance monitoring',
    ],
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#09090b' }}>
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(800px circle at 50% 30%, rgba(212,168,67,0.03), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What we offer</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
                <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg sm:text-xl leading-[1.7]" style={{ color: '#71717a' }}>
                Comprehensive software solutions engineered to transform your ideas into
                scalable, high-performance digital products.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-8 rounded-2xl transition-all duration-500 card-hover-glow"
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843', border: '1px solid rgba(212,168,67,0.08)' }}>
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2" style={{ color: '#fafafa' }}>
                  {service.title}
                </h3>

                <p className="text-sm leading-[1.7] mb-5" style={{ color: '#71717a' }}>
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm" style={{ color: '#a1a1aa' }}>
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#d4a843" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton strength={0.15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group/link"
                    style={{ color: '#52525b' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#d4a843'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#52525b'; }}
                  >
                    Get Started
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </MagneticButton>
              </motion.div>
            ))}
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
                  Have a project in mind?
                </h2>
                <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#71717a' }}>
                  Let us discuss how IKANOVA can help bring your vision to life.
                </p>
                <MagneticButton strength={0.15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.25)]"
                    style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}
                  >
                    Start a conversation
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
