import ServicePageLayout from '@/components/ServicePageLayout';

const benefits = [
  {
    title: 'Data-Driven Decisions',
    description: 'Transform raw data into actionable insights with predictive models that learn and improve over time, giving you a competitive edge in every market.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
  },
  {
    title: 'Process Automation',
    description: 'Eliminate repetitive tasks and reduce operational costs by up to 40% with intelligent automation that handles complex workflows without human intervention.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: 'Personalized Experiences',
    description: 'Deliver hyper-personalized content, recommendations, and user journeys that adapt in real-time to each customer behavior and preference.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  },
  {
    title: 'Scalable AI Infrastructure',
    description: 'Build on cloud-native MLOps pipelines that handle model training, deployment, and monitoring at any scale with enterprise-grade reliability.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  },
  {
    title: 'Cost Optimization',
    description: 'Reduce infrastructure waste with intelligent resource allocation and model optimization that cuts computing costs by up to 60% without sacrificing performance.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  },
  {
    title: 'Ethical AI & Compliance',
    description: 'Implement responsible AI with built-in fairness monitoring, explainability, and compliance with GDPR, CCPA, and industry-specific regulations.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  },
];

const technologies = [
  { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM'] },
  { category: 'Deep Learning', items: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'GANs'] },
  { category: 'NLP', items: ['GPT/LLMs', 'BERT', 'spaCy', 'NLTK', 'LangChain'] },
  { category: 'Computer Vision', items: ['OpenCV', 'YOLO', 'Segment Anything', 'Stable Diffusion'] },
  { category: 'MLOps', items: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'AWS SageMaker'] },
  { category: 'Data Engineering', items: ['Apache Spark', 'Airflow', 'dbt', 'Snowflake', 'BigQuery'] },
];

const process = [
  { step: '01', title: 'Discovery & Data Audit', description: 'We analyze your data landscape, identify AI opportunities, and define success metrics aligned with business goals.' },
  { step: '02', title: 'Data Preparation', description: 'Clean, transform, and engineer features from your data. We build robust data pipelines for training and inference.' },
  { step: '03', title: 'Model Development', description: 'Train, validate, and optimize models using state-of-the-art techniques. We iterate until performance targets are met.' },
  { step: '04', title: 'Deployment & Monitoring', description: 'Deploy to production with CI/CD pipelines, real-time monitoring, and automated retraining schedules.' },
];

const faqs = [
  {
    question: 'How long does it take to build an AI solution?',
    answer: 'Timelines vary based on complexity. A proof-of-concept takes 4-8 weeks, while a production-grade AI system typically requires 3-6 months. We start with a rapid discovery phase to give you a clear timeline and roadmap.',
  },
  {
    question: 'Do I need clean data to start with AI?',
    answer: 'Not necessarily. We offer data auditing and cleaning services as part of our engagement. Most enterprises have valuable data that just needs proper structuring. We help you assess what you have and build from there.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We build AI solutions across healthcare, fintech, e-commerce, logistics, manufacturing, and education. Our team has deep domain expertise in translating industry challenges into AI-powered solutions.',
  },
  {
    question: 'How do you ensure AI model accuracy?',
    answer: 'We use rigorous validation frameworks including cross-validation, A/B testing, and real-world simulation. Our models undergo continuous monitoring with drift detection to maintain accuracy over time.',
  },
  {
    question: 'Can you integrate AI into our existing systems?',
    answer: 'Absolutely. We design AI solutions as API-first microservices that plug into your existing tech stack. Whether you use Salesforce, SAP, or custom platforms, we ensure seamless integration.',
  },
  {
    question: 'What about data privacy and security?',
    answer: 'We follow enterprise-grade security practices including data encryption at rest and in transit, role-based access control, and compliance with GDPR, HIPAA, and CCPA. On-premise deployment options are available.',
  },
];

export default function AIDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="AI & Machine Learning"
      title="Intelligent solutions"
      highlight="powered by AI."
      description="From predictive analytics to generative AI, we build custom machine learning models that transform how your business operates, makes decisions, and serves customers."
      heroContent={
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[320px] flex items-center" style={{ border: '1px solid rgba(212,168,67,0.08)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 70% 40%, rgba(212,168,67,0.04), transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(400px circle at 30% 60%, rgba(139,92,246,0.03), transparent 60%)' }} />
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl relative">
            {[0,1,2,3,4,5].map((i) => (
              <div key={i} className="p-3 sm:p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-2 h-2 rounded-full mb-2" style={{ background: i % 3 === 0 ? '#d4a843' : i % 3 === 1 ? '#8b5cf6' : '#34d399' }} />
                <div className="h-1.5 rounded-full w-3/4 mb-2" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-1.5 rounded-full w-1/2" style={{ background: 'rgba(255,255,255,0.04)' }} />
              </div>
            ))}
          </div>
        </div>
      }
      whatIsSection={
        <>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What is AI development?</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
            AI development is the creation of systems that learn, predict, and act autonomously.
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Artificial Intelligence development goes far beyond simple rule-based automation. At IKANOVA, we build machine learning models and intelligent systems that analyze vast datasets, identify patterns invisible to humans, and make data-driven decisions in real time. Our AI solutions are designed to adapt and improve continuously, learning from new data to deliver increasingly accurate and valuable outputs.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Whether it is natural language processing for customer service chatbots, computer vision for quality inspection, or predictive models for demand forecasting, we approach every AI project with a focus on measurable business impact. Our team combines deep expertise in machine learning, data engineering, and domain knowledge to deliver solutions that do not just work technically but drive real ROI.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              We also understand that AI adoption requires more than just technology. That is why we work closely with your teams to ensure seamless integration, provide training, and build internal AI capabilities that last long after the initial deployment.
            </p>
          </div>
        </>
      }
      benefits={benefits}
      technologies={technologies}
      process={process}
      caseStudy={{
        title: 'Predictive Maintenance for Manufacturing',
        description: 'We partnered with a leading manufacturing company to build an AI-powered predictive maintenance system. By analyzing sensor data from 2,000+ machines in real time, the system predicts equipment failures 72 hours in advance, reducing unplanned downtime by 85% and saving $2.4M annually in maintenance costs.',
        metrics: [
          { label: 'Accuracy', value: '96.4%' },
          { label: 'Downtime Reduction', value: '85%' },
          { label: 'Annual Savings', value: '$2.4M' },
          { label: 'Data Points/Day', value: '12M+' },
        ],
        tech: ['Python', 'TensorFlow', 'Apache Kafka', 'AWS IoT', 'Grafana'],
      }}
      faqs={faqs}
      ctaTitle="Let's build your AI solution."
      ctaDescription="From concept to production, we help you harness the power of artificial intelligence to solve your most complex challenges."
    />
  );
}
