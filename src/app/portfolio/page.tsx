'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MagneticButton from '@/components/MagneticButton'
import { useThemeColors } from '@/hooks/useThemeColors'
import { useTheme } from '@/components/ThemeProvider'

const categories = ['All', 'Web App', 'AI/ML', 'SaaS', 'E-Commerce', 'Mobile', 'EdTech', 'Healthcare']

const projects = [
  {
    title: 'Universal Link Education',
    subtitle: 'EdTech Platform',
    description: 'Online education platform with live classes, multi-subject curriculum, and student management for 500+ students.',
    category: 'EdTech',
    tech: ['Next.js', 'TypeScript', 'Node.js'],
    image: '/projects/universal-link-hero.png',
    logo: '/projects/universal-link-logo.png',
    link: 'https://www.universallinkeducation.com/',
    featured: true,
  },
  {
    title: 'Fashion Hub',
    subtitle: 'E-Commerce Platform',
    description: 'Modern fashion e-commerce with curated collections, sizing tools, and seamless checkout.',
    category: 'E-Commerce',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    image: '/projects/fashion-hubb-hero.jpg',
    link: 'https://fashion-hubb-silk.vercel.app/',
  },
  {
    title: 'St. Elizabeth Hospital',
    subtitle: 'Healthcare Platform',
    description: 'Hospital website with doctor directory, departments, patient info, and WooCommerce for donations.',
    category: 'Healthcare',
    tech: ['WordPress', 'WooCommerce', 'Elementor'],
    image: '/projects/st-elizabeth-hero.jpg',
    logo: '/projects/st-elizabeth-logo.png',
    link: 'https://st-elizabethhyderabad.com/',
  },
]

export default function PortfolioPage() {
  const c = useThemeColors()
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.fg }}>
      <Navbar />

      <section className="relative pt-40 pb-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(800px circle at 50% 30%, ${c.accent}08, transparent 60%)` }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: c.accent }}>Our work</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-[-0.03em]">
                <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-lg" style={{ color: c.fgSecondary }}>
                Projects we have delivered, crafted with precision and purpose.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
                style={{
                  background: activeFilter === cat ? c.gradient : c.surface,
                  color: activeFilter === cat
                    ? (theme === 'light' ? '#FFFFFF' : '#111111')
                    : c.fgSecondary,
                  border: `1px solid ${activeFilter === cat ? 'transparent' : c.border}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {project.featured || project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden transition-all duration-500 h-full card-hover-glow"
                    style={{ border: `1px solid ${c.border}`, background: c.cardBg }}>
                    <div className="relative h-48 overflow-hidden">
                      {project.image ? (
                        <Image src={project.image} alt={project.title} fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      ) : (
                        <div className="w-full h-full" style={{ background: c.surface }} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/30 to-transparent" />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                            style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111' }}>Featured</span>
                        </div>
                      )}
                      {project.logo && (
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: 'rgba(9,9,11,0.8)', border: `1px solid ${c.border}` }}>
                          <Image src={project.logo} alt="" width={24} height={24} className="object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-semibold mb-1.5" style={{ color: c.fg }}>{project.title}</h3>
                      <p className="text-xs mb-4 leading-relaxed" style={{ color: c.fgSecondary }}>{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-medium"
                            style={{ background: c.surface, color: c.fgSecondary, border: `1px solid ${c.border}` }}>{t}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: c.accent }}>
                        Visit Site
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="rounded-2xl p-6 transition-all duration-500 h-full flex flex-col" style={{ border: `1px solid ${c.border}`, background: c.cardBg }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: c.gradient }}>
                        <span className="font-bold text-sm" style={{ color: theme === 'light' ? '#FFFFFF' : '#111111' }}>{project.title[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold truncate" style={{ color: c.fg }}>{project.title}</h3>
                        <p className="text-[11px]" style={{ color: c.fgSecondary }}>{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: c.fgSecondary }}>{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-medium"
                          style={{ background: c.surface, color: c.fgSecondary, border: `1px solid ${c.border}` }}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{ border: `1px solid ${c.border}`, background: c.cardBg }}>
            <div className="absolute inset-0" style={{ background: `radial-gradient(600px circle at 50% 50%, ${c.accent}08, transparent 60%)` }} />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-[-0.02em]" style={{ color: c.fg }}>
                Want to see your project here?
              </h2>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: c.fgSecondary }}>
                Let us build something extraordinary together.
              </p>
              <MagneticButton strength={0.15}>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{ background: c.gradient, color: theme === 'light' ? '#FFFFFF' : '#111111', boxShadow: `0 4px 24px ${c.glow}` }}>
                  Start a project
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  )
}
