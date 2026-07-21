import ServicePageLayout from '@/components/ServicePageLayout';
import ServicePageWrapper from '@/components/ServicePageWrapper';

const benefits = [
  {
    title: 'Tailored to Your Business',
    description: 'Every feature is built to match your exact workflows and requirements. No compromises, no workarounds, no paying for features you will never use.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.07a1.5 1.5 0 01-2.176-1.565l.82-5.978a1.5 1.5 0 01.552-1.12l5.384-3.07m2.804-1.617l5.384-3.07a1.5 1.5 0 012.176 1.565l-.82 5.978a1.5 1.5 0 01-.552 1.12l-5.384 3.07m-2.804 1.617L11.42 15.17m0 0l-5.384 3.07" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    title: 'Competitive Advantage',
    description: 'Off-the-shelf software gives you the same capabilities as everyone else. Custom software gives you a unique edge that competitors cannot replicate.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-1.53.658" /></svg>,
  },
  {
    title: 'Full Ownership',
    description: 'You own the code, the infrastructure, and the IP. No vendor lock-in, no licensing fees, no risk of your software tool being discontinued.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  },
  {
    title: 'Seamless Integration',
    description: 'Custom APIs and connectors that integrate perfectly with your existing tools, databases, and third-party services without the limitations of pre-built connectors.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>,
  },
  {
    title: 'Future-Proof Architecture',
    description: 'Built with modern frameworks, clean architecture, and comprehensive documentation. Your software evolves with your business for years to come.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  },
  {
    title: 'Cost Efficiency at Scale',
    description: 'While SaaS subscriptions compound over time, custom software has a predictable cost structure. At scale, it becomes significantly more economical than licensing multiple tools.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  },
];

const technologies = [
  { category: 'Frontend', items: ['Next.js', 'React', 'Vue.js', 'Angular', 'Svelte', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'Rust', 'Java', 'Ruby on Rails'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'DynamoDB'] },
  { category: 'Infrastructure', items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'] },
  { category: 'Messaging', items: ['Apache Kafka', 'RabbitMQ', 'Redis Pub/Sub', 'AWS SQS'] },
  { category: 'Security', items: ['OAuth 2.0', 'JWT', 'RBAC', 'Encryption at Rest', 'SOC 2'] },
];

const process = [
  { step: '01', title: 'Discovery & Requirements', description: 'Deep dive into your business, users, and technical landscape. We produce a detailed requirements document and project roadmap with clear milestones.' },
  { step: '02', title: 'Architecture & Design', description: 'System architecture, database design, API contracts, and UX wireframes. We validate the technical approach before building.' },
  { step: '03', title: 'Agile Development', description: 'Two-week sprints with continuous delivery, automated testing, and weekly stakeholder demos. Transparency at every step.' },
  { step: '04', title: 'Launch & Evolution', description: 'Deployment, monitoring, performance optimization, and ongoing feature development. We are your long-term technology partner.' },
];

const faqs = [
  {
    question: 'When does custom software make sense over SaaS?',
    answer: 'Custom software is the right choice when SaaS tools cannot meet your specific requirements, when you need deep integration between systems, when data security or compliance demands full control, or when the cumulative cost of multiple SaaS subscriptions exceeds the cost of building your own solution.',
  },
  {
    question: 'How do you estimate project costs?',
    answer: 'We provide fixed-price quotes after a thorough discovery phase. Our estimates are based on complexity, features, integrations, and team composition. We break projects into milestones with transparent pricing so there are never surprises.',
  },
  {
    question: 'What is your typical team composition?',
    answer: 'A typical project team includes a project manager, 1-2 frontend developers, 1-2 backend developers, a UX/UI designer, and a QA engineer. Team size scales based on project scope and timeline requirements.',
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'We follow industry best practices: code reviews for every pull request, automated testing (unit, integration, and end-to-end), CI/CD pipelines, static analysis, and security scanning. We maintain comprehensive documentation and follow clean architecture principles.',
  },
  {
    question: 'Can you work with our in-house team?',
    answer: 'Absolutely. We frequently augment in-house teams with our specialists. We adapt to your processes, tools, and communication preferences. Many of our longest partnerships started this way.',
  },
  {
    question: 'What happens after the project launches?',
    answer: 'We offer flexible engagement models post-launch: monthly retainers for maintenance and support, time-and-materials for feature development, or dedicated teams for ongoing partnerships. We also provide full documentation and knowledge transfer.',
  },
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <ServicePageWrapper>
      <ServicePageLayout
      badge="Custom Software Development"
      title="Software built"
      highlight="around you."
      description="We design and build bespoke software solutions that fit your business like a glove. From internal tools to customer-facing platforms, every line of code serves your goals."
      heroContent={
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[320px] flex items-center" style={{ border: '1px solid rgba(212,168,67,0.08)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 40% 50%, rgba(212,168,67,0.04), transparent 60%)' }} />
          <div className="w-full max-w-xl relative">
            <div className="rounded-xl overflow-hidden font-mono text-xs" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                <span className="ml-2" style={{ color: '#52525b' }}>terminal</span>
              </div>
              <div className="p-4 space-y-1.5" style={{ color: '#a1a1aa' }}>
                <div><span style={{ color: '#d4a843' }}>$</span> <span style={{ color: '#fafafa' }}>npx create-ikanova-app</span> my-platform</div>
                <div style={{ color: '#52525b' }}>Creating project with custom architecture...</div>
                <div style={{ color: '#52525b' }}>Installing dependencies...</div>
                <div style={{ color: '#52525b' }}>Configuring database schema...</div>
                <div style={{ color: '#52525b' }}>Setting up authentication...</div>
                <div style={{ color: '#52525b' }}>Generating API routes...</div>
                <div><span style={{ color: '#34d399' }}>✓</span> <span style={{ color: '#fafafa' }}>Project ready</span> <span style={{ color: '#52525b' }}>— built around your business</span></div>
                <div><span style={{ color: '#d4a843' }}>$</span> <span className="animate-pulse" style={{ color: '#fafafa' }}>█</span></div>
              </div>
            </div>
          </div>
        </div>
      }
      whatIsSection={
        <>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What is custom software development?</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
            Custom software is technology that fits your business, not the other way around.
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Custom software development at IKANOVA means building technology solutions designed from the ground up for your specific business needs. Unlike off-the-shelf products that require you to adapt your processes, custom software adapts to you. Every feature, every workflow, and every interface is crafted to match how your team works and how your customers interact with you.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              We build everything from internal tools and operational dashboards to customer-facing platforms and B2B SaaS products. Our engineering team works across modern tech stacks, choosing the right technologies for each project rather than forcing a one-size-fits-all approach. Whether you need a real-time collaboration tool, a complex data processing pipeline, or a multi-tenant platform, we architect solutions that are maintainable, scalable, and secure.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              The key advantage of custom software is total control. You own the code, the data, and the roadmap. There are no licensing fees, no vendor lock-in, and no waiting for a SaaS provider to add a feature you need. Your software evolves as fast as your business does, with the flexibility to pivot, scale, and innovate without constraints.
            </p>
          </div>
        </>
      }
      benefits={benefits}
      technologies={technologies}
      process={process}
      caseStudy={{
        title: 'Logistics Management Platform',
        description: 'A logistics company was managing 500+ daily shipments through a patchwork of spreadsheets, emails, and phone calls. We built a custom platform that automated dispatching, provided real-time tracking, and gave clients a self-service portal. Daily shipment capacity increased to 2,000+ with zero additional headcount.',
        metrics: [
          { label: 'Capacity Increase', value: '4x' },
          { label: 'Manual Work Reduced', value: '80%' },
          { label: 'Client Satisfaction', value: '+52%' },
          { label: 'Cost Per Shipment', value: '-45%' },
        ],
        tech: ['Next.js', 'Go', 'PostgreSQL', 'Redis', 'AWS'],
      }}
      faqs={faqs}
      ctaTitle="Let's build your custom solution."
      ctaDescription="Tell us about your challenge. We will design a solution that fits your business perfectly."
      />
    </ServicePageWrapper>
  );
}
