'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  images: { src: string; alt: string }[];
  links: {
    demo: string;
    github: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div
        className="relative rounded-[32px] border overflow-hidden transition-all duration-500"
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col lg:flex-row">
          {/* Left: Project Number */}
          <div className="lg:w-[140px] flex-shrink-0 flex items-start justify-start p-8 lg:p-10 lg:border-r lg:border-white/[0.06]">
            <span
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter select-none transition-colors duration-500"
              style={{
                color: 'rgba(255, 255, 255, 0.08)',
                fontFeatureSettings: '"tnum"',
              }}
            >
              <span className="group-hover:text-white/[0.15] transition-colors duration-500">
                {project.number}
              </span>
            </span>
          </div>

          {/* Right: Content */}
          <div className="flex-1 p-8 sm:p-10 lg:px-12 lg:py-10 flex flex-col gap-6">
            {/* Top row: Category + Live Project button */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {project.category}
              </span>

              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
                aria-label={`View live demo of ${project.title}`}
              >
                Live Project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </motion.a>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 leading-tight tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-[15px] leading-relaxed max-w-2xl" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-1">
                  <span className="text-[13px] font-medium" style={{ color: 'rgba(255, 255, 255, 0.35)' }}>
                    {tech}
                  </span>
                  {i < project.techStack.length - 1 && (
                    <span className="text-white/15 text-xs mx-1">&middot;</span>
                  )}
                </span>
              ))}
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {project.images.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/[0.06]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>

            {/* GitHub Link */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-300 hover:text-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.3)' }}
                aria-label={`View source code of ${project.title}`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-60"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
