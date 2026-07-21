import ServicePageLayout from '@/components/ServicePageLayout';
import ServicePageWrapper from '@/components/ServicePageWrapper';

const benefits = [
  {
    title: 'Unified Business Operations',
    description: 'Consolidate finance, HR, inventory, procurement, and CRM into one integrated system. Eliminate data silos and give every team a single source of truth.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>,
  },
  {
    title: 'Real-Time Visibility',
    description: 'Live dashboards and reporting give you instant visibility into every aspect of your business. Make decisions based on current data, not week-old spreadsheets.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>,
  },
  {
    title: 'Process Automation',
    description: 'Automate approvals, workflows, notifications, and recurring tasks. Reduce manual work by up to 60% and eliminate human errors in critical business processes.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: 'Financial Management',
    description: 'Complete financial control with multi-currency support, automated invoicing, tax compliance, accounts payable/receivable, and real-time financial reporting.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Scalable Architecture',
    description: 'Cloud-native ERP that grows with your business. Add modules, users, and data volumes without performance degradation or costly infrastructure overhauls.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect with your existing tools: accounting software, e-commerce platforms, payment gateways, shipping providers, and third-party APIs through robust connectors.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>,
  },
];

const technologies = [
  { category: 'Core Frameworks', items: ['Next.js', 'NestJS', 'Django', 'Laravel', '.NET Core'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Material UI'] },
  { category: 'Integration', items: ['REST APIs', 'GraphQL', 'Webhooks', 'Apache Kafka', 'RabbitMQ'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { category: 'Reporting', items: ['Apache Superset', 'Metabase', 'Custom Dashboards', 'PDF Exports'] },
];

const process = [
  { step: '01', title: 'Business Process Analysis', description: 'Map your existing workflows, identify bottlenecks, and define requirements. We document every process to ensure the ERP fits your operations perfectly.' },
  { step: '02', title: 'System Design & Architecture', description: 'Design the database schema, module structure, and integration points. We create a technical blueprint before writing any code.' },
  { step: '03', title: 'Iterative Development', description: 'Build modules in priority order with continuous stakeholder feedback. Regular demos ensure the system matches your expectations at every stage.' },
  { step: '04', title: 'Migration & Training', description: 'Seamlessly migrate your data, train your teams, and provide comprehensive documentation. We ensure zero disruption to your daily operations.' },
];

const faqs = [
  {
    question: 'Why build a custom ERP instead of using SAP or Oracle?',
    answer: 'Off-the-shelf ERPs like SAP and Oracle are powerful but expensive, rigid, and often overkill for mid-sized businesses. A custom ERP from IKANOVA is built around your exact workflows, costs a fraction of enterprise solutions, and evolves as your business changes. You own the code and control the roadmap.',
  },
  {
    question: 'How long does ERP development take?',
    answer: 'A core ERP with finance, inventory, and CRM modules takes 4-6 months. A full-featured system with all modules typically takes 6-12 months. We follow an agile approach, delivering functional modules incrementally so you start benefiting early.',
  },
  {
    question: 'Can you migrate data from our existing systems?',
    answer: 'Yes. We handle complete data migration from spreadsheets, legacy systems, QuickBooks, SAP Business One, or any other source. Our migration process includes data cleansing, validation, and reconciliation to ensure zero data loss.',
  },
  {
    question: 'What modules do you typically build?',
    answer: 'Common modules include finance and accounting, inventory management, procurement, HR and payroll, CRM, sales management, reporting and analytics, and document management. We tailor the module set to your specific business needs.',
  },
  {
    question: 'Is the ERP cloud-based or on-premise?',
    answer: 'We typically build cloud-hosted ERPs for maximum accessibility and lower infrastructure costs. However, we support on-premise and hybrid deployments for businesses with specific data residency or security requirements.',
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Absolutely. Every ERP project includes comprehensive training for administrators and end users, detailed documentation, and a support period post-launch. We also offer ongoing maintenance and feature development on retainer.',
  },
];

export default function ERPDevelopmentPage() {
  return (
    <ServicePageWrapper>
      <ServicePageLayout
      badge="ERP Development"
      title="Enterprise systems"
      highlight="built for you."
      description="Custom ERP solutions designed around your unique business processes. Consolidate operations, eliminate data silos, and gain real-time visibility across your entire organization."
      heroContent={
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[320px] flex items-center" style={{ border: '1px solid rgba(212,168,67,0.08)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(212,168,67,0.04), transparent 60%)' }} />
          <div className="w-full max-w-2xl mx-auto relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Finance', 'Inventory', 'HR', 'CRM', 'Procurement', 'Analytics'].map((module, i) => (
                <div key={module} className="p-4 rounded-xl text-center" style={{ background: i === 0 ? 'rgba(212,168,67,0.08)' : 'rgba(255,255,255,0.02)', border: `1px solid ${i === 0 ? 'rgba(212,168,67,0.15)' : 'rgba(255,255,255,0.04)'}` }}>
                  <div className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ background: i === 0 ? 'rgba(212,168,67,0.15)' : 'rgba(255,255,255,0.05)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: i === 0 ? '#d4a843' : 'rgba(255,255,255,0.15)' }} />
                  </div>
                  <div className="text-[10px] font-medium" style={{ color: i === 0 ? '#d4a843' : '#52525b' }}>{module}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), transparent)' }} />
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1,2,3].map((i) => (
                <div key={i} className="h-14 rounded-lg p-2" style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)' }}>
                  <div className="h-1.5 rounded w-2/3 mb-1.5" style={{ background: 'rgba(255,255,255,0.05)' }} />
                  <div className="h-1 rounded w-1/2" style={{ background: 'rgba(255,255,255,0.03)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      whatIsSection={
        <>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What is ERP development?</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
            ERP development is building the central nervous system of your business.
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Enterprise Resource Planning (ERP) development at IKANOVA means creating a unified platform that connects every department in your organization. Unlike generic ERP solutions that force you to adapt your processes to their software, we build systems that adapt to you. Every workflow, approval chain, and report is designed around how your team actually works.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Our custom ERP systems cover finance and accounting, inventory and warehouse management, human resources and payroll, customer relationship management, procurement and vendor management, and business intelligence. Each module is designed to work independently and as part of the integrated whole, sharing data seamlessly across your organization.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              We build on modern, cloud-native architectures that scale with your growth. Real-time dashboards give leadership instant visibility into KPIs, while automated workflows ensure nothing falls through the cracks. The result is an ERP that your team actually wants to use because it was built specifically for them.
            </p>
          </div>
        </>
      }
      benefits={benefits}
      technologies={technologies}
      process={process}
      caseStudy={{
        title: 'Manufacturing ERP Transformation',
        description: 'A mid-sized manufacturer was struggling with disconnected systems: spreadsheets for inventory, QuickBooks for accounting, and manual forms for procurement. We built a unified ERP that automated their entire supply chain, reducing order processing time from 3 days to 4 hours and cutting inventory carrying costs by 35%.',
        metrics: [
          { label: 'Cost Reduction', value: '35%' },
          { label: 'Processing Speed', value: '18x' },
          { label: 'Data Accuracy', value: '99.8%' },
          { label: 'User Adoption', value: '94%' },
        ],
        tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
      }}
      faqs={faqs}
      ctaTitle="Transform your operations."
      ctaDescription="Let's build an ERP that your team will actually love to use."
      />
    </ServicePageWrapper>
  );
}
