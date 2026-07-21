import ServicePageLayout from '@/components/ServicePageLayout';

const benefits = [
  {
    title: 'Cross-Platform Efficiency',
    description: 'Build once, deploy everywhere. Our React Native and Flutter solutions deliver native performance on iOS and Android from a single codebase, cutting development time by 40%.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  },
  {
    title: 'Native-Like Performance',
    description: 'Optimized animations, native modules, and platform-specific optimizations ensure your app feels indistinguishable from fully native implementations.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  },
  {
    title: 'Offline-First Architecture',
    description: 'Intelligent caching and local data storage ensure your app works flawlessly even without connectivity, syncing seamlessly when a connection is restored.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Push Notifications & Engagement',
    description: 'Smart notification strategies, in-app messaging, and personalization engines that re-engage users and boost retention by up to 3x compared to email campaigns.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
  },
  {
    title: 'App Store Optimization',
    description: 'We handle ASO end-to-end: keyword optimization, A/B testing of screenshots, localization, and launch strategy to maximize your app visibility and downloads.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  },
  {
    title: 'Analytics & Crash Reporting',
    description: 'Real-time analytics, crash reporting, and user behavior tracking with Firebase, Mixpanel, or custom dashboards so you can iterate based on real data.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>,
  },
];

const technologies = [
  { category: 'Cross-Platform', items: ['React Native', 'Flutter', 'Expo', 'Kotlin Multiplatform'] },
  { category: 'Native iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'] },
  { category: 'Native Android', items: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Android NDK'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Firebase', 'Supabase', 'AWS Amplify'] },
  { category: 'State Management', items: ['Redux Toolkit', 'MobX', 'Provider', 'Zustand'] },
  { category: 'DevOps & CI/CD', items: ['Fastlane', 'Codemagic', 'App Center', 'TestFlight'] },
];

const process = [
  { step: '01', title: 'Strategy & Wireframing', description: 'Define your app vision, user flows, and platform strategy. We create low-fidelity wireframes to validate the experience before design.' },
  { step: '02', title: 'UI/UX Design', description: 'Platform-native designs that follow Apple HIG and Material Design guidelines. Interactive prototypes for stakeholder buy-in.' },
  { step: '03', title: 'Development & QA', description: 'Agile development with bi-weekly builds. Automated testing, device lab testing, and performance profiling throughout.' },
  { step: '04', title: 'Launch & Growth', description: 'App store submission, ASO optimization, post-launch monitoring, and iterative feature development based on user feedback.' },
];

const faqs = [
  {
    question: 'Should I build native or cross-platform?',
    answer: 'For most businesses, cross-platform with React Native or Flutter is the smart choice. It reduces cost and time to market by 40% while delivering near-native performance. We recommend native only when you need deep platform-specific features like ARKit or advanced Bluetooth.',
  },
  {
    question: 'How much does it cost to build a mobile app?',
    answer: 'Costs range from $30,000 for an MVP to $250,000+ for a complex, enterprise-grade application. The final cost depends on features, platform requirements, and design complexity. We provide detailed estimates after our discovery phase.',
  },
  {
    question: 'How long does mobile app development take?',
    answer: 'A simple MVP takes 8-12 weeks. A full-featured consumer app typically takes 4-6 months. Enterprise apps with complex backend integration may take 6-12 months. We follow agile methodology with regular milestone deliveries.',
  },
  {
    question: 'Do you handle app store submissions?',
    answer: 'Yes, we manage the entire submission process for both Apple App Store and Google Play Store, including screenshots, descriptions, privacy policies, and compliance requirements. We also handle app store appeal processes if needed.',
  },
  {
    question: 'Can you work with our existing backend?',
    answer: 'Absolutely. We integrate with any REST API, GraphQL, or gRPC backend. We also help design and build backend infrastructure when needed, using Node.js, Python, or your preferred technology.',
  },
  {
    question: 'What about post-launch support?',
    answer: 'We offer flexible maintenance plans that include bug fixes, OS compatibility updates, feature additions, and performance optimization. Most clients retain us on a monthly retainer for continuous improvement.',
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Mobile App Development"
      title="Mobile apps"
      highlight="users love."
      description="We design and develop high-performance mobile applications for iOS and Android that users love to use. From consumer-facing apps to enterprise solutions."
      heroContent={
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[320px] flex items-center" style={{ border: '1px solid rgba(212,168,67,0.08)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(212,168,67,0.04), transparent 60%)' }} />
          <div className="flex items-center gap-6 sm:gap-8 w-full max-w-lg mx-auto relative">
            <div className="w-[140px] sm:w-[170px] h-[280px] sm:h-[340px] rounded-[2rem] flex flex-col items-center pt-8 relative" style={{ border: '2px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="w-12 h-1 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div className="w-3/4 h-3 rounded mb-3" style={{ background: 'rgba(212,168,67,0.12)' }} />
              <div className="w-3/4 h-2 rounded mb-2" style={{ background: 'rgba(255,255,255,0.04)' }} />
              <div className="w-3/4 h-2 rounded mb-2" style={{ background: 'rgba(255,255,255,0.04)' }} />
              <div className="w-1/2 h-2 rounded mb-6" style={{ background: 'rgba(255,255,255,0.04)' }} />
              <div className="w-5/6 h-16 rounded-xl mb-2" style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.08)' }} />
              <div className="w-5/6 h-16 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }} />
              <div className="absolute bottom-3 w-10 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
            <div className="w-[140px] sm:w-[170px] h-[260px] sm:h-[310px] rounded-[1.5rem] flex flex-col items-center pt-6 relative" style={{ border: '2px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="w-10 h-10 rounded-xl mb-3" style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.1)' }} />
              <div className="w-3/4 h-2.5 rounded mb-2" style={{ background: 'rgba(255,255,255,0.05)' }} />
              <div className="w-3/4 h-2 rounded mb-4" style={{ background: 'rgba(255,255,255,0.03)' }} />
              <div className="w-5/6 h-12 rounded-lg mb-2" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }} />
              <div className="w-5/6 h-12 rounded-lg mb-2" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }} />
              <div className="w-5/6 h-12 rounded-lg" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }} />
            </div>
          </div>
        </div>
      }
      whatIsSection={
        <>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What is mobile app development?</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
            Mobile app development is building experiences that live in your users' pockets.
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Mobile app development at IKANOVA means crafting experiences that feel native, perform flawlessly, and keep users coming back. We build for both iOS and Android using cross-platform frameworks like React Native and Flutter, as well as fully native Swift and Kotlin when platform-specific features demand it. Our approach ensures your app reaches every user without compromising on quality.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              From the first tap to long-term retention, we design every interaction with purpose. Our apps feature fluid animations powered by Reanimated and Skia, offline-first architectures that work without connectivity, and intelligent push notification strategies that re-engage dormant users. We build apps that do not just function but delight.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Beyond development, we provide end-to-end support including app store optimization, launch strategy, analytics implementation, and ongoing iteration. Our goal is not just to ship your app but to ensure it thrives in a competitive marketplace with millions of apps competing for attention.
            </p>
          </div>
        </>
      }
      benefits={benefits}
      technologies={technologies}
      process={process}
      caseStudy={{
        title: 'Fitness Tracking App',
        description: 'We built a cross-platform fitness app with real-time workout tracking, social features, and AI-powered personalized plans. The app achieved 50,000 downloads in the first month with a 4.8-star rating on both app stores and 73% daily active user rate.',
        metrics: [
          { label: 'Downloads', value: '50K+' },
          { label: 'App Rating', value: '4.8★' },
          { label: 'DAU Rate', value: '73%' },
          { label: 'Retention (30d)', value: '45%' },
        ],
        tech: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'RevenueCat'],
      }}
      faqs={faqs}
      ctaTitle="Ready to launch your app?"
      ctaDescription="From concept to App Store, we handle every step of the mobile app development journey."
    />
  );
}
