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
    title: 'NovaDash',
    category: 'Analytics',
    tech: 'React / Node.js',
    color: 'bg-red-500',
  },
  {
    title: 'PulseAI',
    category: 'AI Platform',
    tech: 'Next.js / TensorFlow',
    color: 'bg-rose-500',
  },
  {
    title: 'CloudForge',
    category: 'DevOps',
    tech: 'Go / Docker / K8s',
    color: 'bg-red-700',
  },
  {
    title: 'Fashion Hub',
    category: 'E-Commerce',
    tech: 'Next.js / Stripe',
    image: '/projects/fashion-hubb-hero.jpg',
    link: 'https://fashion-hubb-silk.vercel.app/',
    color: 'bg-rose-400',
  },
  {
    title: 'St. Elizabeth Hospital',
    category: 'Healthcare',
    tech: 'WordPress / WooCommerce',
    image: '/projects/st-elizabeth-hero.jpg',
    logo: '/projects/st-elizabeth-logo.png',
    link: 'https://st-elizabethhyderabad.com/',
    color: 'bg-red-600',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturedProjects() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4 border border-accent/20">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Products and platforms we&apos;re proud of.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 mb-6"
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] min-h-[280px]">
            <div className="relative overflow-hidden">
              <Image
                src={featured.image!}
                alt="Universal Link Education"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
            </div>
            <div className="p-7 md:p-9 flex flex-col justify-center relative">
              <div className="absolute top-5 right-5 w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center overflow-hidden">
                <Image src={featured.logo!} alt="Logo" width={30} height={30} className="object-contain" />
              </div>
              <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-bold mb-3 border border-accent/20">
                Featured
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {featured.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                A comprehensive online education platform with live interactive classes and student management for 500+ students worldwide.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full bg-accent/8 text-accent/70 text-[11px] font-medium border border-accent/10">
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-2.5 transition-all w-fit">
                Visit Site
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </div>
        </motion.a>

        {/* Small Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
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
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 cursor-default"
                {...wrapperProps}
              >
                {project.image && (
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-lg ${project.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{project.title[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-muted-foreground/80 font-medium">{project.tech}</span>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-white text-sm font-semibold shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
