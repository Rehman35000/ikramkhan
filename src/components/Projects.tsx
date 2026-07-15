'use client';

import { motion } from 'framer-motion';
import ProjectCard, { type Project } from './ProjectCard';

const projects: Project[] = [
  {
    number: '01',
    category: 'Full Stack',
    title: 'Universal Link Education',
    description:
      'A comprehensive education platform connecting students with universal learning resources, courses, and academic guidance for holistic development.',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Web App'],
    images: [
      { src: '/image1.png', alt: 'Universal Link Education dashboard preview' },
      { src: '/image2.png', alt: 'Universal Link Education courses preview' },
    ],
    links: {
      demo: 'https://www.universallinkeducation.com/',
      github: '#',
    },
  },
  {
    number: '02',
    category: 'E-Commerce',
    title: 'Fashion Hubb',
    description:
      'A modern fashion e-commerce platform showcasing curated collections with seamless shopping experience and style inspiration.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'E-Commerce'],
    images: [
      { src: '/image2.png', alt: 'Fashion Hubb store preview' },
      { src: '/image1.png', alt: 'Fashion Hubb product page preview' },
    ],
    links: {
      demo: 'https://fashion-hubb-silk.vercel.app/',
      github: '#',
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial gradient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(ellipse, rgba(229, 57, 53, 0.4), transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.3), transparent 70%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 tracking-tight leading-none">
              Projects
            </h2>
            <p className="text-sm sm:text-[15px] max-w-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>
              A curated selection of recent work spanning full-stack applications, e-commerce platforms, and AI-powered solutions.
            </p>
          </div>

          {/* Divider line */}
          <div className="mt-10 h-px bg-gradient-to-r from-white/10 via-white/[0.05] to-transparent" />
        </motion.div>

        {/* Project Cards with overlapping effect */}
        <div className="flex flex-col -mt-4">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className={index > 0 ? '-mt-8 sm:-mt-12' : ''}
              style={{ zIndex: projects.length - index }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 sm:mt-24 text-center"
        >
          <p className="text-sm mb-6" style={{ color: 'rgba(255, 255, 255, 0.25)' }}>
            More projects coming soon
          </p>
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
