import ServicePageLayout from '@/components/ServicePageLayout';

const benefits = [
  {
    title: 'User-Centered Approach',
    description: 'Every design decision is backed by user research, personas, and journey mapping. We design for real people, not assumptions, ensuring adoption and satisfaction.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  },
  {
    title: 'Conversion Optimization',
    description: 'Strategic design that guides users toward key actions. We use heatmaps, A/B testing, and behavioral analytics to maximize conversion rates at every touchpoint.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  },
  {
    title: 'Design Systems',
    description: 'Scalable, consistent design systems with reusable components, tokens, and documentation. Reduce design debt and ship faster across your entire product.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959V6a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-3.375z" /></svg>,
  },
  {
    title: 'Accessibility by Default',
    description: 'WCAG 2.1 AA compliance is not an afterthought. We design and test for screen readers, keyboard navigation, color contrast, and cognitive accessibility from day one.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  },
  {
    title: 'Motion & Interaction Design',
    description: 'Purposeful micro-interactions and transitions that guide attention, provide feedback, and create emotional connections with your product.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  },
  {
    title: 'Developer-Ready Handoff',
    description: 'Pixel-perfect specs, annotated designs, and interactive prototypes in Figma that developers can implement without guessing. Zero ambiguity, faster builds.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  },
];

const technologies = [
  { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'InVision'] },
  { category: 'Prototyping', items: ['Figma Prototyping', 'Principle', 'After Effects', 'Rive'] },
  { category: 'User Research', items: ['Maze', 'Hotjar', 'UserTesting', 'Dovetail'] },
  { category: 'Design Systems', items: ['Storybook', 'Tokens Studio', 'Figma Variables', 'Chromatic'] },
  { category: 'Animation', items: ['Lottie', 'GSAP', 'Framer Motion', 'Rive'] },
  { category: 'Accessibility', items: ['Axe', 'WAVE', 'Stark', 'Color Oracle'] },
];

const process = [
  { step: '01', title: 'Research & Discovery', description: 'Stakeholder interviews, user surveys, competitive analysis, and analytics review. We map the landscape before designing anything.' },
  { step: '02', title: 'Wireframing & IA', description: 'Low-fidelity wireframes and information architecture to validate structure and user flows. Fast iteration before visual design begins.' },
  { step: '03', title: 'Visual Design & Prototype', description: 'High-fidelity designs, component libraries, and interactive prototypes. Multiple concept options with data-informed refinement.' },
  { step: '04', title: 'Handoff & Iteration', description: 'Developer handoff with specs and tokens. Post-launch usability testing, analytics review, and iterative design improvements.' },
];

const faqs = [
  {
    question: 'Do you design for web, mobile, or both?',
    answer: 'We design for any digital platform. Our team has deep experience across web applications, mobile apps (iOS and Android), desktop software, and even wearable interfaces. We adapt our process to the platform while maintaining consistency across touchpoints.',
  },
  {
    question: 'What does your design process look like?',
    answer: 'Our process follows four phases: Discovery (research and strategy), Define (wireframes and IA), Design (visual design and prototyping), and Deliver (handoff and iteration). We use Figma as our primary tool with collaborative workflows that keep you involved throughout.',
  },
  {
    question: 'Can you work with our existing design system?',
    answer: 'Yes. We can extend, refactor, or build upon your existing design system. If you do not have one, we create a comprehensive system from scratch. Either way, you get a scalable foundation that grows with your product.',
  },
  {
    question: 'How do you measure design success?',
    answer: 'We tie design metrics to business outcomes: conversion rates, task completion rates, time-on-task, error rates, and user satisfaction scores. We also track design system adoption and consistency metrics for long-term health.',
  },
  {
    question: 'Do you handle user research?',
    answer: 'Yes. We offer comprehensive UX research including user interviews, surveys, usability testing, card sorting, tree testing, and competitive analysis. Research is woven throughout our design process, not a separate phase.',
  },
  {
    question: 'How do you ensure designs are accessible?',
    answer: 'Accessibility is built into every step. We follow WCAG 2.1 AA guidelines, test with screen readers and keyboard navigation, ensure proper color contrast, and use semantic structures. We also provide accessibility audit reports for existing products.',
  },
];

export default function UIUXDesignPage() {
  return (
    <ServicePageLayout
      badge="UI/UX Design"
      title="Designs that"
      highlight="drive results."
      description="We create intuitive, beautiful, and conversion-focused designs that users love. From research to pixel-perfect prototypes, every decision is backed by data and craft."
      heroContent={
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[320px] flex items-center" style={{ border: '1px solid rgba(212,168,67,0.08)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px circle at 60% 40%, rgba(212,168,67,0.04), transparent 60%)' }} />
          <div className="w-full max-w-xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: '#d4a843' }} />
              <div className="h-1.5 rounded-full flex-1" style={{ background: 'rgba(212,168,67,0.12)' }} />
              <div className="h-1.5 rounded-full w-16" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="h-20 rounded-xl flex items-end p-2" style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.1)' }}>
                <div className="w-full h-6 rounded" style={{ background: 'rgba(212,168,67,0.15)' }} />
              </div>
              <div className="h-20 rounded-xl p-2 space-y-1" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-1/2 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="w-3/4 h-1 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
                <div className="w-2/3 h-1 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
              </div>
              <div className="h-20 rounded-xl p-2 flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.04)', border: '1px solid rgba(139,92,246,0.08)' }}>
                <svg className="w-6 h-6" style={{ color: 'rgba(139,92,246,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" /></svg>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-24 flex-1 rounded-xl p-3 space-y-2" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-8 h-8 rounded-lg" style={{ background: 'rgba(212,168,67,0.08)' }} />
                <div className="w-3/4 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <div className="w-1/2 h-1 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
              </div>
              <div className="h-24 flex-1 rounded-xl p-3 space-y-2" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-8 h-8 rounded-lg" style={{ background: 'rgba(52,211,153,0.08)' }} />
                <div className="w-3/4 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <div className="w-1/2 h-1 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
              </div>
              <div className="h-24 flex-1 rounded-xl p-3 space-y-2" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-8 h-8 rounded-lg" style={{ background: 'rgba(251,146,60,0.08)' }} />
                <div className="w-3/4 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <div className="w-1/2 h-1 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
              </div>
            </div>
          </div>
        </div>
      }
      whatIsSection={
        <>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#d4a843' }}>What is UI/UX design?</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-6" style={{ color: '#fafafa' }}>
            Great design is invisible. It just works.
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              UI/UX design at IKANOVA is the discipline of understanding your users so deeply that every interaction feels effortless. We combine rigorous user research with visual craft to create digital products that are not just beautiful but strategically effective. Our designs are measured by business outcomes, not just aesthetics.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              Our UX process starts with discovery: understanding your users through interviews, surveys, and behavioral data. We map journeys, identify pain points, and uncover opportunities. From there, we wireframe and prototype rapidly, testing with real users before committing to visual design. This evidence-based approach eliminates guesswork and reduces costly redesigns.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: '#a1a1aa' }}>
              On the UI side, we obsess over every pixel, animation, and interaction. Our designs use systematic color theory, typographic hierarchy, and spatial rhythm to create visual harmony. Every component is built as part of a scalable design system, ensuring consistency across your product as it grows. We deliver developer-ready Figma files with complete specs, tokens, and interactive prototypes.
            </p>
          </div>
        </>
      }
      benefits={benefits}
      technologies={technologies}
      process={process}
      caseStudy={{
        title: 'Fintech App Redesign',
        description: 'We redesigned a banking app that was losing 60% of users during onboarding. Through extensive user research and iterative testing, we created a streamlined 3-step onboarding flow with biometric authentication. The result: onboarding completion jumped from 40% to 89%, and daily active users increased by 2.4x within 60 days.',
        metrics: [
          { label: 'Onboarding Rate', value: '89%' },
          { label: 'User Increase', value: '2.4x' },
          { label: 'Task Completion', value: '96%' },
          { label: 'NPS Score', value: '+72' },
        ],
        tech: ['Figma', 'Maze', 'Hotjar', 'Lottie', 'Tokens Studio'],
      }}
      faqs={faqs}
      ctaTitle="Elevate your user experience."
      ctaDescription="Let's create a design that not only looks exceptional but drives measurable business outcomes."
    />
  );
}
