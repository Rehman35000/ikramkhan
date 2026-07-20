'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
    color: 'bg-rose-400',
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
    color: 'bg-red-600',
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4 border border-accent/20">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">Work</span>
              </h1>
              <p className="text-muted-foreground">
                Projects we&apos;ve delivered — crafted with precision and purpose.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group"
              >
                {project.featured || project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border-2 border-accent/20 bg-card overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full"
                  >
                    <div className="relative h-44 overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className={`w-full h-full ${project.color}`} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-accent text-white text-[10px] font-bold shadow-md">Featured</span>
                        </div>
                      )}
                      {project.logo && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-md bg-white/90 flex items-center justify-center overflow-hidden">
                          <Image src={project.logo} alt="" width={26} height={26} className="object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-accent/8 text-accent/70 text-[10px] font-medium border border-accent/10">{t}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-xs group-hover:gap-2 transition-all">
                        Visit Site
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="rounded-xl border border-border bg-card p-5 hover:border-accent/25 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${project.color} flex items-center justify-center shrink-0`}>
                        <span className="text-white font-bold text-sm">{project.title[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-foreground truncate group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-[11px] text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-surface text-muted-foreground text-[10px] font-medium border border-border">{t}</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground/70 font-medium">{project.category}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Want to see your project <span className="text-accent">here?</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Let&apos;s build something extraordinary together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-white text-sm font-semibold shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  )
}
