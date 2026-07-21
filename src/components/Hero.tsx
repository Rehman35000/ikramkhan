import Link from 'next/link';

const stats = [
  { value: '15+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,168,67,0.04) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-[15%] w-[600px] h-[600px] rounded-full opacity-[0.035] blur-[140px]">
        <div className="w-full h-full rounded-full" style={{ background: '#d4a843' }} />
      </div>
      <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.025] blur-[120px]">
        <div className="w-full h-full rounded-full" style={{ background: '#e8c564' }} />
      </div>

      {/* Subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.06] blur-[200px] pointer-events-none" style={{ background: 'radial-gradient(circle, #d4a843, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-10"
            style={{ borderColor: 'rgba(212,168,67,0.12)', color: '#d4a843', background: 'rgba(212,168,67,0.04)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#d4a843', animation: 'pulse-ring 2s ease-in-out infinite' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#d4a843' }} />
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase">Available for new projects</span>
          </div>

          <h1
            className="text-[2.75rem] sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-[-0.03em] mb-8"
            style={{ color: '#fafafa', fontFeatureSettings: '"cv11", "ss01"' }}
          >
            <span className="block">We craft</span>
            <span className="block mt-1 gradient-text">Digital Products</span>
            <span className="block mt-1" style={{ color: '#52525b' }}>that scale.</span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-2xl mb-12 leading-[1.7]"
            style={{ color: '#a1a1aa' }}
          >
            IKANOVA is a premium software studio building scalable products
            from concept to deployment. We help startups and enterprises ship faster.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.25)] group"
              style={{
                background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                color: '#09090b',
              }}
            >
              Start a project
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(212,168,67,0.06)] group"
              style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#fafafa' }}
            >
              View our work
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-6 max-w-lg">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? 'border-l' : ''} style={i > 0 ? { borderColor: 'rgba(255,255,255,0.06)' } : {}}>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm mt-1.5 tracking-wide" style={{ color: '#71717a' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: '#52525b' }}>Scroll</span>
          <div className="w-px h-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              className="absolute inset-x-0 top-0 h-1/3"
              style={{ background: 'linear-gradient(180deg, #d4a843, transparent)', animation: 'scroll-indicator 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
