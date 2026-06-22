import AnimatedSection from './AnimatedSection';

const languages = ['English', 'Urdu'];

export default function Languages() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Languages
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-5 py-2.5 rounded-full bg-red-50 text-accent font-medium text-sm border border-red-100 hover:bg-accent hover:text-white hover:shadow-md transition-all duration-200 cursor-default"
              >
                {lang}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
