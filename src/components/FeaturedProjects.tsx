'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Universal Link Education',
    category: 'EdTech',
    tech: 'Next.js / PostgreSQL',
    image: '/projects/universal-link-hero.png',
    logo: '/projects/universal-link-logo.png',
    link: 'https://www.universallinkeducation.com/',
    featured: true,
  },
  {
    title: 'Fashion Hub',
    category: 'E-Commerce',
    tech: 'Next.js / Stripe',
    image: '/projects/fashion-hubb-hero.jpg',
    link: 'https://fashion-hubb-silk.vercel.app/',
  },
  {
    title: 'St. Elizabeth Hospital',
    category: 'Healthcare',
    tech: 'WordPress / WooCommerce',
    image: '/projects/st-elizabeth-hero.jpg',
    logo: '/projects/st-elizabeth-logo.png',
    link: 'https://st-elizabethhyderabad.com/',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function FeaturedProjects() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Products and platforms we are proud of.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/10 transition-all duration-200 mb-4"
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] min-h-[260px]">
            <div className="relative overflow-hidden">
              <Image
                src={featured.image!}
                alt="Universal Link Education"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
            </div>
            <div className="p-7 md:p-9 flex flex-col justify-center relative">
              {featured.logo && (
                <div className="absolute top-5 right-5 w-9 h-9 rounded-md bg-surface border border-border flex items-center justify-center overflow-hidden">
                  <Image src={featured.logo} alt="Logo" width={28} height={28} className="object-contain" />
                </div>
              )}
              <span className="inline-block w-fit px-2 py-0.5 rounded bg-surface text-[10px] font-medium text-muted mb-3 border border-border">
                Featured
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-foreground transition-colors">
                {featured.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                A comprehensive online education platform with live interactive classes and student management for 500+ students worldwide.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-surface text-[10px] font-medium text-muted border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all w-fit">
                Visit Site
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </div>
        </motion.a>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {others.map((project) => {
            const Wrapper = project.link ? motion.a : motion.div;
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Wrapper
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -2 }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/10 transition-all duration-200 cursor-default"
                {...wrapperProps}
              >
                {project.image && (
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                <div className="p-4">
                  <h4 className="text-sm font-semibold mb-0.5 group-hover:text-foreground transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-muted">{project.category}</p>
                    <span className="text-[10px] text-muted font-medium">{project.tech}</span>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View all projects
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
