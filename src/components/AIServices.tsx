import AnimatedSection from './AnimatedSection';

const aiServices = [
  {
    number: '01',
    title: 'AI Voice Agents',
    description: 'Automate calls with intelligent, 24/7 AI that delivers seamless, human-like interactions for enhanced customer service.',
    features: [
      '24/7 Customer Care',
      'Cost Efficient',
      'Inbound & Outbound Lead Generation',
      'Appointments & Bookings',
    ],
    gradient: 'from-violet-500/10 to-purple-500/10',
    accent: '#8b5cf6',
  },
  {
    number: '02',
    title: 'AI Smart Chatbots',
    description: 'Instant, AI-powered support that engages customers 24/7 with accurate, automated responses.',
    features: [
      'Instant Responses',
      'Human Like Conversation',
      '24/7 Lead Generation',
      '70% Increased Engagement',
    ],
    gradient: 'from-blue-500/10 to-cyan-500/10',
    accent: '#3b82f6',
  },
  {
    number: '03',
    title: 'Custom AI Agents',
    description: 'Personalized AI Agents tailored to your business requirements, delivering seamless automation and enhanced functionalities.',
    features: [
      'Tailored to Your Needs',
      'Scalable Solutions',
      'Cost-Effective',
      'Boost Efficiency',
    ],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    accent: '#10b981',
  },
];

export default function AIServices() {
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]" style={{ color: '#111' }}>
              10x Your Business with{' '}
              <span style={{ color: '#e53935' }}>AI</span>!
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #e53935, #ff6b6b)' }} />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {aiServices.map((service) => (
            <AnimatedSection key={service.number}>
              <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border h-full" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
                <div className="p-5 sm:p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#111' }}>
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2">
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
