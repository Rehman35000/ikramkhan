import AnimatedSection from './AnimatedSection';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Self-Employed / Freelance',
    period: '2024 — 2025',
    description:
      'Designed and developed a product page replica (WoodMart style) with pixel-perfect responsive layout. Focused on clean, semantic HTML and CSS with meticulous attention to detail for an exact visual match across all screen sizes.',
  },
  {
    title: 'Frontend Developer',
    company: 'Self-Employed / Freelance',
    period: '2024 — 2025',
    description:
      'Created multiple personal projects showcasing modern UI design and responsiveness. Applied React.js, Bootstrap, and Tailwind CSS to build interactive, mobile-first web applications. Developed AI-powered agents and automation workflows. Worked as a Shopify Developer building custom storefronts with tailored themes and functionality.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i}>
                <div className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2" />

                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-gray-50 -translate-x-1/2 mt-1.5 z-10 shadow-sm" />

                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <div className="p-5 sm:p-6 rounded-xl border border-border bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="font-medium text-sm text-accent mb-1">
                        {exp.company}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground mb-3">
                        {exp.period}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
