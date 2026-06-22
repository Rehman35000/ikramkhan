import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'Top-Notch Websites & Apps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Advanced AI Agents & Automation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 2-2 4-4 4s-4-2-4-4a4 4 0 014-4z" />
        <path d="M2 22v-2a6 6 0 0112 0v2" />
        <path d="M15.5 9.5a4 4 0 015.5 1.5" />
        <path d="M22 22v-2a6 6 0 00-4.5-5.8" />
      </svg>
    ),
  },
  {
    title: 'NFTs & Blockchain Tokenization',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Meta & Google Lead Generation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden" style={{ background: '#fafafa' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(229,57,53,0.3) 0%, transparent 70%)' }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: 'rgba(229,57,53,0.1)' }}>
                <Image
                  src="/image2.png"
                  alt="Services"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col gap-8">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white rounded-full shadow-lg mb-4" style={{ background: '#e53935', boxShadow: '0 4px 20px rgba(229,57,53,0.3)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  What I Deliver
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]" style={{ color: '#111' }}>
                  Checkmate your{' '}
                  <span style={{ color: '#e53935' }}>Software &amp; Digital Marketing</span>
                  {' '}goals with{' '}
                  <span style={{ color: '#e53935' }}>IKRAM</span>
                </h2>
              </div>

              <div className="space-y-4">
                {services.map((svc) => (
                  <div
                    key={svc.title}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(255,255,255,0.8)',
                      borderColor: 'rgba(229,57,53,0.08)',
                    }}
                  >
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(229,57,53,0.1)', color: '#e53935' }}>
                      {svc.icon}
                    </div>
                    <span className="font-semibold text-base sm:text-lg" style={{ color: '#111' }}>
                      {svc.title}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="tel:03098660810"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-fit"
                style={{ background: '#e53935', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                GET INSTANT CALL
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
