'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import SchedulingModal from './SchedulingModal';

export default function About() {
  const [schedulingOpen, setSchedulingOpen] = useState(false);

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              About Me
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a passionate frontend developer skilled in modern web
                technologies with a focus on responsive, clean, and user-friendly
                design. I specialize in building performant web applications
                using React.js, Next.js, and Tailwind CSS.
              </p>
              <p>
                My approach combines clean code with pixel-perfect design. I
                believe in creating digital experiences that are not only visually
                appealing but also accessible and intuitive. When I&apos;m not
                coding, you&apos;ll find me exploring new technologies, learning
                about AI agents and automation, or working on Shopify storefronts.
              </p>
              <p>
                Currently focused on building responsive web applications and
                expanding my expertise in AI-driven development workflows.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-col items-center gap-8">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative w-full h-full rounded-[2rem] border border-border overflow-hidden shadow-2xl">
                <Image
                  src="/ceo.png"
                  alt="Ikram Khan - CEO"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSchedulingOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              style={{ background: '#e53935', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book 1-to-1 Meeting
            </button>
          </div>
        </div>
      </div>

      <SchedulingModal isOpen={schedulingOpen} onClose={() => setSchedulingOpen(false)} />
    </section>
  );
}
