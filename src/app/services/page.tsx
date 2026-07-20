'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    description:
      'We build custom web applications, single-page apps, and full-stack solutions tailored to your business needs. Our team leverages modern frameworks and architectures to deliver scalable, performant, and maintainable web products.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    description:
      'From concept to App Store launch, we craft native and cross-platform mobile applications that deliver seamless experiences. Our mobile solutions are optimized for performance, accessibility, and user engagement.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    description:
      'Great products start with great design. We combine user research, data-driven insights, and aesthetic excellence to create interfaces that are intuitive, beautiful, and conversion-focused. Every pixel serves a purpose.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    description:
      'Harness the power of artificial intelligence to transform your business. We build intelligent systems using machine learning, natural language processing, and computer vision to automate processes and unlock new possibilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    description:
      'We build end-to-end SaaS platforms from the ground up. From multi-tenant architecture to subscription billing, we handle every layer of the stack so you can focus on growing your product and serving your customers.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    description:
      'Migrate, optimize, and scale your infrastructure with confidence. Our cloud experts design and manage robust architectures across AWS, Azure, and GCP, ensuring reliability, security, and cost-efficiency at every stage.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
  {
    title: 'API Development',
    description:
      'We design and build robust, well-documented APIs that power your applications and integrate seamlessly with third-party services. Our APIs are built for scale, security, and developer experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    features: [
      'RESTful API design & development',
      'GraphQL schema design & resolvers',
      'Microservices architecture & orchestration',
      'Third-party API integrations',
      'API versioning, documentation & rate limiting',
    ],
  },
  {
    title: 'Maintenance & Support',
    description:
      'Software needs ongoing care to stay performant and secure. We provide comprehensive maintenance and support services to keep your systems running smoothly, including bug fixes, updates, monitoring, and continuous improvement.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 5.384a2.025 2.025 0 01-2.864-2.864l5.384-5.384m2.864 2.864L18 7.5l-4.5-4.5L9 6.75l4.5 4.5 2.864 2.864z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12h3.75" />
      </svg>
    ),
    features: [
      'Bug fixes & issue resolution',
      'Performance optimization & profiling',
      'Security audits & vulnerability patching',
      '24/7 monitoring & alerting setup',
      'Feature enhancements & version updates',
    ],
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ServicesPage() {
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
                  Our Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Comprehensive software solutions engineered to transform your ideas into
                scalable, high-performance digital products. From strategy to deployment,
                we deliver excellence at every stage.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="glass-panel group relative p-8 rounded-2xl border border-border/50 bg-surface/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg
                          className="w-5 h-5 text-accent shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 group/link"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
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
                  Have a project in mind?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Let&apos;s discuss how IKANOVA can help bring your vision to life
                  with the right technology and strategy.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-colors duration-200"
                >
                  Start a Conversation
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
