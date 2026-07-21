import ServicePageLayout from '@/components/ServicePageLayout';
import ServicePageWrapper from '@/components/ServicePageWrapper';

const benefits = [
  {
    title: 'Lightning-Fast Performance',
    description: 'Sub-second load times with optimized Core Web Vitals, edge rendering, and progressive enhancement that keeps users engaged and boosts conversions.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  },
  {
    title: 'Pixel-Perfect Design',
    description: 'Every component is crafted with obsessive attention to detail. Responsive layouts that look stunning on every device, from mobile phones to ultra-wide displays.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  },
  {
    title: 'SEO-Optimized Architecture',
    description: 'Server-side rendering, structured data, and semantic HTML ensure your site ranks prominently. We build for search engines first, then delight humans.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with OWASP best practices, SSL, CSP headers, DDoS protection, and automated vulnerability scanning built into every deployment.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
  },
  {
    title: 'Headless & Composable',
    description: 'Decoupled frontends with headless CMS and API-first architecture give you the flexibility to evolve your tech stack without rebuilding from scratch.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959V6a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-3.375z" /></svg>,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Auto-scaling cloud deployments on AWS, GCP, or Azure that handle traffic spikes effortlessly. From 100 to 10 million users, your site stays fast.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  },
];

const technologies = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Python', 'Go', 'GraphQL'] },
  { category: 'CMS', items: ['Sanity', 'Contentful', 'Strapi', 'WordPress Headless'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
  { category: 'DevOps', items: ['Docker', 'Vercel', 'AWS', 'Cloudflare', 'GitHub Actions'] },
  { category: 'Testing', items: ['Playwright', 'Jest', 'Vitest', 'Storybook', 'Lighthouse'] },
];

const process = [
  { step: '01', title: 'Strategy & Planning', description: 'Define user personas, information architecture, and technical requirements. We create a roadmap that aligns design and engineering from day one.' },
  { step: '02', title: 'Design & Prototyping', description: 'High-fidelity designs and interactive prototypes. We validate with real users before writing a single line of code.' },
  { step: '03', title: 'Development & Testing', description: 'Agile sprints with continuous integration, automated testing, and weekly demos. You see progress every step of the way.' },
  { step: '04', title: 'Launch & Optimization', description: 'Performance audits, SEO optimization, monitoring setup, and ongoing iteration based on real user analytics.' },
];

const faqs = [
  {
    question: 'What tech stack do you recommend?',
    answer: 'We typically recommend Next.js with TypeScript and Tailwind CSS for most projects due to their performance, developer experience, and ecosystem maturity. However, we always evaluate your specific needs and may suggest alternatives like Remix, Nuxt, or Astro for certain use cases.',
  },
  {
    question: 'How long does a typical website project take?',
    answer: 'A marketing site or landing page takes 4-6 weeks. A complex SaaS dashboard or e-commerce platform typically takes 8-16 weeks. We provide a detailed timeline after our discovery phase.',
  },
  {
    question: 'Do you build custom designs or use templates?',
    answer: 'Every project gets a custom design tailored to your brand and business goals. We never use pre-made templates. Our design process includes user research, wireframing, and high-fidelity prototyping before development begins.',
  },
  {
    question: 'Will my website be fast and SEO-friendly?',
    answer: 'Absolutely. Performance and SEO are foundational to our development process. Every site we build achieves 90+ Lighthouse scores with optimized Core Web Vitals, semantic HTML, structured data, and proper meta tags.',
  },
  {
    question: 'Can you redesign our existing website?',
    answer: 'Yes. We handle full redesigns as well as incremental improvements. We start with an audit of your current site, identify opportunities, and propose a design and development plan that maximizes impact.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'We offer flexible maintenance and support plans that include security updates, performance monitoring, content updates, and feature additions. Many of our clients stay on retainer for continuous improvement.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <ServicePageWrapper>
      <ServicePageLayout
      badge="Web Development"
      title="Web experiences"
      highlight="that convert."
      description="We build high-performance websites and web applications that look stunning, load instantly, and drive measurable business results. From marketing sites to complex SaaS platforms."
      heroContent={
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[320px] flex items-center" style={{ border: '1px solid rgba(212,168,67,0.08)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 30% 50%, rgba(212,168,67,0.04), transparent 60%)' }} />
          <div className="w-full max-w-xl relative">
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div className="flex-1 mx-4 h-6 rounded-lg px-3 flex items-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-[10px]" style={{ color: '#52525b' }}>ikanova.dev</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="h-3 rounded-full w-3/4" style={{ background: 'rgba(212,168,67,0.15)' }} />
                <div className="h-2 rounded-full w-full" style={{ background: 'rgba(255,255,255,0.04)' }} />
                <div className="h-2 rounded-full w-5/6" style={{ background: 'rgba(255,255,255,0.04)' }} />
                <div className="h-2 rounded-full w-2/3" style={{ background: 'rgba(255,255,255,0.04)' }} />
                <div className="pt-4 flex gap-2">
                  <div className="h-7 w-20 rounded-lg" style={{ background: 'linear-gradient(135deg, #d4a843, #e8c564)' }} />
                  <div className="h-7 w-20 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      whatIsSection={
        <>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What is web development?</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
            Modern web development is about creating experiences, not just pages.
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Web development at IKANOVA goes far beyond assembling templates and plugins. We engineer full-stack web applications using modern frameworks like Next.js, React, and TypeScript that deliver native-app performance in the browser. Every project is built with a focus on speed, accessibility, and search engine visibility.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Our approach combines thoughtful UX design with rigorous engineering. We architect solutions using headless CMS platforms, server-side rendering, edge functions, and API-first backends that give you complete control over your content and data. Whether you need a marketing site that converts, a SaaS dashboard that scales, or an e-commerce platform that performs, we build it to last.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              We also believe that the job is not done at launch. Every site we build comes with analytics integration, performance monitoring, and a clear plan for continuous optimization based on real user data and behavior.
            </p>
          </div>
        </>
      }
      benefits={benefits}
      technologies={technologies}
      process={process}
      caseStudy={{
        title: 'E-Commerce Platform Redesign',
        description: 'We rebuilt a legacy e-commerce platform with Next.js, achieving a 3.2x improvement in page load speed and a 47% increase in mobile conversion rate. The new architecture handled 10x traffic during Black Friday without any performance degradation.',
        metrics: [
          { label: 'Load Time', value: '0.8s' },
          { label: 'Conversion Lift', value: '+47%' },
          { label: 'Lighthouse Score', value: '98/100' },
          { label: 'Uptime', value: '99.99%' },
        ],
        tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Stripe', 'Vercel'],
      }}
      faqs={faqs}
      ctaTitle="Let's build something remarkable."
      ctaDescription="Whether you need a brand new website or a complete overhaul, we have the expertise to deliver results."
      />
    </ServicePageWrapper>
  );
}
