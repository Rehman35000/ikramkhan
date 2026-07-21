'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MagneticButton from '@/components/MagneticButton'

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
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <main style={{ minHeight: '100vh', background: '#09090b', color: '#fafafa' }}>
      <Navbar />

      <section className="relative pt-40 pb-16 px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Our work</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-[-0.03em]">
                <span className="gradient-text">Work</span>
              </h1>
              <p className="text-lg" style={{ color: '#71717a' }}>
                Projects we have delivered, crafted with precision and purpose.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
                style={{
                  background: activeFilter === cat ? 'linear-gradient(135deg, #d4a843, #e8c564)' : 'rgba(255,255,255,0.03)',
                  color: activeFilter === cat ? '#09090b' : '#71717a',
                  border: `1px solid ${activeFilter === cat ? '#d4a843' : 'rgba(255,255,255,0.06)'}`,
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden transition-all duration-500 h-full"
                    style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0f0f12' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.12)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full" style={{ background: '#18181b' }} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/30 to-transparent" />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase" style={{ background: 'rgba(212,168,67,0.9)', color: '#09090b' }}>Featured</span>
                        </div>
                      )}
                      {project.logo && (
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: 'rgba(9,9,11,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <Image src={project.logo} alt="" width={24} height={24} className="object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-semibold mb-1.5" style={{ color: '#fafafa' }}>{project.title}</h3>
                      <p className="text-xs mb-4 leading-relaxed" style={{ color: '#52525b' }}>{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-medium" style={{ background: 'rgba(255,255,255,0.04)', color: '#71717a', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all" style={{ color: '#d4a843' }}>
                        Visit Site
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="rounded-2xl p-6 transition-all duration-500 h-full flex flex-col" style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0f0f12' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)' }}>
                        <span className="font-bold text-sm" style={{ color: '#09090b' }}>{project.title[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold truncate" style={{ color: '#fafafa' }}>{project.title}</h3>
                        <p className="text-[11px]" style={{ color: '#52525b' }}>{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: '#71717a' }}>{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-medium" style={{ background: 'rgba(255,255,255,0.04)', color: '#71717a', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl p-10 md:p-14 text-center" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-[-0.02em]" style={{ color: '#fafafa' }}>
              Want to see your project <span style={{ color: '#52525b' }}>here?</span>
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#71717a' }}>
              Let us build something extraordinary together.
            </p>
            <MagneticButton strength={0.15}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.2)]"
                style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)', color: '#09090b' }}
              >
                Start a project
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  )
}
