import AnimatedSection from './AnimatedSection';

const education = [
  {
    degree: 'Matriculation (Science Group)',
    school: 'Govt High School',
    period: '2020 — 2022',
    result: '86%',
  },
  {
    degree: 'Intermediate (FSc Pre-Medical)',
    school: 'IISLMIA College',
    period: '2022 — 2024',
    result: '87%',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Education
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <AnimatedSection key={i}>
                <div className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2" />

                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-white -translate-x-1/2 mt-1.5 z-10 shadow-sm" />

                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <div className="p-5 sm:p-6 rounded-xl border border-border bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        <span className="text-xs font-mono text-accent bg-red-50 px-2 py-1 rounded-full shrink-0">
                          {item.result}
                        </span>
                      </div>
                      <p className="font-medium text-sm text-accent mb-1">
                        {item.school}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {item.period}
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
