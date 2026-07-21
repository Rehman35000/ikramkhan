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
    color: 'bg-neutral-800',
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
    color: 'bg-neutral-700',
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
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                <span className="gradient-text">Work</span>
              </h1>
              <p className="text-muted-foreground">
                Projects we have delivered, crafted with precision and purpose.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-foreground text-background'
                    : 'bg-surface text-muted hover:text-foreground border border-border'
                }`}
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
                transition={{ duration: 0.2 }}
                className="group"
              >
                {project.featured || project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/10 transition-all duration-200 h-full"
                  >
                    <div className="relative h-40 overflow-hidden">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-0.5 rounded bg-foreground/90 text-background text-[10px] font-medium">Featured</span>
                        </div>
                      )}
                      {project.logo && (
                        <div className="absolute top-3 right-3 w-7 h-7 rounded bg-white/90 flex items-center justify-center overflow-hidden">
                          <Image src={project.logo} alt="" width={22} height={22} className="object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-1 group-hover:text-foreground transition-colors">{project.title}</h3>
                      <p className="text-xs text-muted mb-3 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-surface text-muted text-[10px] font-medium border border-border">{t}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium group-hover:gap-1.5 transition-all">
                        Visit Site
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="rounded-xl border border-border bg-card p-4 hover:border-foreground/10 transition-all duration-200 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg ${project.color} flex items-center justify-center shrink-0`}>
                        <span className="text-white font-bold text-xs">{project.title[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold truncate">{project.title}</h3>
                        <p className="text-[11px] text-muted">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-surface text-muted text-[10px] font-medium border border-border">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <AnimatedSection>
          <div className="rounded-xl border border-border bg-card p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Want to see your project <span className="text-muted">here?</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Let us build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start a project
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  )
}
