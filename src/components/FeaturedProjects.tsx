'use client';

import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: 'Universal Link Education',
    category: 'EdTech',
    tech: 'Next.js / PostgreSQL',
    image: '/projects/universal-link-hero.png',
    logo: '/projects/universal-link-logo.png',
    link: 'https://www.universallinkeducation.com/',
    featured: true,
    description: 'A comprehensive online education platform with live interactive classes and student management for 500+ students worldwide.',
    metrics: '500+ Students',
  },
  {
    title: 'Fashion Hub',
    category: 'E-Commerce',
    tech: 'Next.js / Stripe',
    image: '/projects/fashion-hubb-hero.jpg',
    link: 'https://fashion-hubb-silk.vercel.app/',
    description: 'Modern fashion e-commerce with curated collections, sizing tools, and seamless checkout.',
    metrics: '2x Conversion',
  },
  {
    title: 'St. Elizabeth Hospital',
    category: 'Healthcare',
    tech: 'WordPress / WooCommerce',
    image: '/projects/st-elizabeth-hero.jpg',
    logo: '/projects/st-elizabeth-logo.png',
    link: 'https://st-elizabethhyderabad.com/',
    description: 'Hospital website with doctor directory, departments, patient info, and donation system.',
    metrics: '3x Engagement',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function FeaturedProjects() {
  const featured = projects[0];
  const others = projects.slice(1);
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start'],
  });

  const featuredImageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="absolute inset-0" style={{ background: 'rgba(212, 168, 67, 0.008)' }} />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>Portfolio</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4" style={{ color: '#fafafa' }}>
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="max-w-xl text-lg" style={{ color: '#71717a' }}>
            Products and platforms we are proud of.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden transition-all duration-500 mb-4 border-glow"
            style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0f0f12' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
          >
            <div className="grid md:grid-cols-[1.1fr_1fr] min-h-[320px] lg:min-h-[400px]">
              <div className="relative overflow-hidden">
                <motion.div style={{ scale: featuredImageScale }} className="absolute inset-0">
                  <Image
                    src={featured.image!}
                    alt="Universal Link Education"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0f0f12]/60" />

                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                    style={{ background: 'rgba(212,168,67,0.9)', color: '#09090b' }}>
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center relative">
                {featured.logo && (
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                    style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.1)' }}>
                    <Image src={featured.logo} alt="Logo" width={32} height={32} className="object-contain" />
                  </div>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843', border: '1px solid rgba(212,168,67,0.1)' }}>
                    {featured.category}
                  </span>
                  <span className="text-[10px] font-medium tracking-wider" style={{ color: '#52525b' }}>{featured.metrics}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight" style={{ color: '#fafafa' }}>
                  {featured.title}
                </h3>
                <p className="text-sm leading-[1.7] mb-5 max-w-md" style={{ color: '#a1a1aa' }}>
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-medium"
                      style={{ background: 'rgba(255,255,255,0.04)', color: '#71717a', border: '1px solid rgba(255,255,255,0.06)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all w-fit group/link" style={{ color: '#d4a843' }}>
                  Visit Site
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {others.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden transition-all duration-500 h-full"
                style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0f0f12' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/30 to-transparent" />
                  {project.logo && (
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: 'rgba(9,9,11,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <Image src={project.logo} alt="" width={24} height={24} className="object-contain" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(212,168,67,0.06)', color: '#d4a843' }}>
                      {project.category}
                    </span>
                    <span className="text-[10px] font-medium" style={{ color: '#52525b' }}>{project.metrics}</span>
                  </div>
                  <h4 className="text-base font-semibold mb-1.5" style={{ color: '#fafafa' }}>
                    {project.title}
                  </h4>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#71717a' }}>{project.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#d4a843' }}>
                    Visit Site
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <MagneticButton strength={0.15}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.2)] group"
              style={{
                background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                color: '#09090b',
              }}
            >
              View all projects
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
