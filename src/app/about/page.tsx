'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    initials: 'AM',
    bio: 'Visionary leader with 15+ years of experience in software engineering and business strategy.',
    gradient: 'from-accent to-accent-secondary',
  },
  {
    name: 'Jordan Lee',
    role: 'CTO',
    initials: 'JL',
    bio: 'Full-stack architect passionate about building scalable systems and mentoring engineering teams.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Sam Rivera',
    role: 'Head of Design',
    initials: 'SR',
    bio: 'Award-winning designer crafting intuitive interfaces that delight users and drive engagement.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Casey Kim',
    role: 'Lead Engineer',
    initials: 'CK',
    bio: 'Problem solver who thrives on turning complex requirements into elegant, maintainable solutions.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

const values = [
  {
    title: 'Engineering Excellence',
    description: 'We write clean, scalable, maintainable code.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Client Partnership',
    description: 'We work as an extension of your team.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the technology curve.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'Transparent communication and honest delivery.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '8+', label: 'Years' },
  { value: '150+', label: 'Projects' },
  { value: '50+', label: 'Team Members' },
];

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <AnimatedSection className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            About <span className="gradient-text">IKANOVA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            We&apos;re a team of engineers, designers, and strategists building software that moves businesses forward.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2018, IKANOVA was born from a simple belief: every business deserves access to world-class software solutions. We started as a small team of passionate engineers and designers who wanted to bridge the gap between innovative technology and real-world business needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the years, we&apos;ve grown into a full-service technology partner, helping startups, SMEs, and enterprises transform their digital landscape. Our approach combines deep technical expertise with a genuine understanding of our clients&apos; goals, ensuring every solution we deliver drives measurable impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries, adopting emerging technologies and refining our processes to deliver software that&apos;s not just functional — it&apos;s exceptional.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative rounded-2xl border border-border bg-surface/50 p-8 sm:p-10">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Trusted by clients across 20+ countries
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Mission & Vision
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-border bg-background p-8 sm:p-10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                    <line x1="9.69" y1="8" x2="21.17" y2="8" />
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                    <line x1="14.31" y1="16" x2="2.83" y2="16" />
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative software solutions that drive growth, efficiency, and digital transformation.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-border bg-background p-8 sm:p-10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in technology consulting and software development, known for engineering excellence and client success.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The foundation of every project we undertake.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <AnimatedSection key={value.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-border bg-surface/50 p-6 sm:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The people behind the code.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <AnimatedSection key={member.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-border bg-background p-6 sm:p-8 text-center"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
