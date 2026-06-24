import AnimatedSection from './AnimatedSection';

const popularServices = [
  {
    title: 'Web Development',
    description:
      'Either 3D website or Full-Stack Application with modern design, We\'ve got you covered!',
    features: [
      '3D Experience Websites',
      'Full Stack Applications',
      'Ecommerce Stores',
      'SEO Optimised',
      'Aesthetic Figma Designs',
    ],
    gradient: 'from-blue-500/10 to-indigo-500/10',
    accent: '#3b82f6',
  },
  {
    title: 'Social Media Marketing',
    description:
      'Whether it\'s viral campaigns or targeted ads with custom content that you want, you are at right place!',
    features: [
      'Meta & Google Campaigns',
      'Organic Followers',
      'Lead Generation',
      'Branding & Viral Content',
    ],
    gradient: 'from-pink-500/10 to-rose-500/10',
    accent: '#ec4899',
  },
  {
    title: 'App Development',
    description:
      'We build all kinds of apps—whether it\'s AI-powered solutions, startup apps, or apps tailored to any niche. Lets bring your idea into life!',
    features: [
      'Android & IOS',
      'AI-Powered Apps',
      'Blockchain & Web 3.0',
      'Flutter & IOS',
      'Cross-Platform',
    ],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    accent: '#10b981',
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
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white rounded-full shadow-lg mb-4" style={{ background: '#e53935', boxShadow: '0 4px 20px rgba(229,57,53,0.3)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Development &amp; Marketing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]" style={{ color: '#111' }}>
              Our <span style={{ color: '#e53935' }}>Popular</span> Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #e53935, #ff6b6b)' }} />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {popularServices.map((service) => (
            <AnimatedSection key={service.title}>
              <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border h-full flex flex-col" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
                <div className="p-5 sm:p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:opacity-80 transition-opacity" style={{ color: '#111' }}>
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors w-fit"
                    style={{ color: service.accent }}
                  >
                    Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>

                  <div className="space-y-2 pt-2 border-t" style={{ borderColor: '#e5e7eb' }}>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-sm" style={{ color: '#555' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
