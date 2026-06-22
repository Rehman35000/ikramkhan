'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTypewriter } from '@/hooks/useTypewriter';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'AI Automations' },
  { value: '8+', label: 'Countries Served' },
];

const floatingCards = [
  {
    label: 'AI Automation',
    value: '98%',
    sub: 'Accuracy Rate',
    className: 'top-8 -right-6',
    delay: '0s',
  },
  {
    label: 'Projects',
    value: '50+',
    sub: 'Delivered',
    className: 'bottom-12 -left-4',
    delay: '1s',
  },
  {
    label: 'Response Time',
    value: '<24hr',
    sub: 'Support',
    className: 'top-1/3 -right-10',
    delay: '2s',
  },
];

export default function Hero() {
  const heading = useTypewriter(
    ['AI Power Solution', 'Website', 'Application', 'Apps', 'More'],
    100,
    50,
    2000
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = el.querySelectorAll('.animate-on-mount');
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 pb-20 overflow-hidden"
        style={{ background: '#fafafa' }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Vertical guide lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-black/[0.03]" />
          <div className="absolute left-2/4 top-0 bottom-0 w-px bg-black/[0.03]" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-black/[0.03]" />
        </div>

        {/* Red glow behind illustration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{ background: 'rgba(229,57,53,0.12)' }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-accent/20 animate-ping [animation-duration:3s]" />
          <div className="absolute top-[40%] right-[15%] w-2 h-2 rounded-full bg-accent/15 animate-ping [animation-duration:4s] [animation-delay:1s]" />
          <div className="absolute bottom-[30%] left-[20%] w-1 h-1 rounded-full bg-accent/20 animate-ping [animation-duration:3.5s] [animation-delay:0.5s]" />
          <div className="absolute top-[60%] left-[5%] w-1.5 h-1.5 rounded-full bg-accent/10 animate-ping [animation-duration:4.5s] [animation-delay:2s]" />
        </div>

        <div
          ref={containerRef}
          className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Side */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-on-mount opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white rounded-full mx-auto lg:mx-0 shadow-lg"
                style={{ background: '#e53935', boxShadow: '0 4px 20px rgba(229,57,53,0.3)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 014 4c0 2-2 4-4 4s-4-2-4-4a4 4 0 014-4z" />
                  <path d="M2 22v-2a6 6 0 0112 0v2" />
                </svg>
                AI Powered Innovation
              </span>
            </div>

            {/* Headline */}
            <div className="animate-on-mount opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]">
              <h1
                className="font-extrabold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                Build with{' '}
                <span
                  className="inline-block relative"
                  style={{ color: '#e53935' }}
                >
                  AI-Powered
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
                    style={{ background: '#e53935' }}
                  />
                </span>
                <br />
                <span className="inline-block min-w-[8ch] relative">
                  {heading}
                  <span
                    className="absolute -top-0.5 -right-2 w-0.5 h-full animate-pulse"
                    style={{ background: '#e53935' }}
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-on-mount opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]">
              <p
                className="max-w-lg mx-auto lg:mx-0 leading-relaxed"
                style={{ color: '#666666', fontSize: 'clamp(1rem, 1.3vw, 1.125rem)', fontWeight: 500 }}
              >
                Transform ideas into intelligent products with cutting-edge AI solutions, automation systems, and modern web experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-mount opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:ikramullah35000@gmail.com?subject=Meeting%20with%20Ikram%20Khan&body=Hi%20Ikram%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project."
                  className="group relative overflow-hidden rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: '#e53935' }}
                >
                  <span className="relative z-10">Book a Meeting</span>
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: '#c62828' }}
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{ backgroundSize: '200% 100%' }}
                  />
                </a>
                <a
                  href="#projects"
                  className="group rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 border-2"
                  style={{ borderColor: '#e53935', color: '#e53935' }}
                >
                  View Projects
                  <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>


          </div>

          {/* Right Side - Premium Visual */}
          <div className="animate-on-mount opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards] relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
              {/* Red glow ring */}
              <div
                className="absolute -inset-8 rounded-full opacity-30 animate-[pulseGlow_4s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(circle, rgba(229,57,53,0.2) 0%, transparent 70%)' }}
              />

              {/* Main image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl animate-[float_6s_ease-in-out_infinite]">
                <Image
                  src="/image1.png"
                  alt="AI Solutions"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Floating glass cards */}
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className={`absolute ${card.className} animate-[floatSlow_5s_ease-in-out_infinite]`}
                  style={{ animationDelay: card.delay }}
                >
                  <div
                    className="backdrop-blur-xl rounded-xl p-3.5 shadow-xl border min-w-[130px]"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      borderColor: 'rgba(229,57,53,0.1)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    }}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#888' }}>
                      {card.label}
                    </p>
                    <p className="text-lg font-bold mt-0.5" style={{ color: '#111' }}>
                      {card.value}
                    </p>
                    <p className="text-[10px]" style={{ color: '#888' }}>
                      {card.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative px-4 sm:px-8 lg:px-16 pb-16" style={{ background: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl border px-6 sm:px-10 py-8 backdrop-blur-xl"
            style={{
              background: 'rgba(255,255,255,0.7)',
              borderColor: 'rgba(229,57,53,0.08)',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center animate-on-mount"
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${0.8 + i * 0.1}s`,
                  }}
                >
                  <p className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#e53935' }}>
                    {stat.value}
                  </p>
                  <p className="text-sm mt-1 font-medium" style={{ color: '#666' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
