import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Universal Link Education',
    img: '/image1.png',
    description:
      'A comprehensive education platform connecting students with universal learning resources, courses, and academic guidance for holistic development.',
    tags: ['Next.js', 'Education', 'Tailwind CSS', 'Web App'],
    links: { demo: 'https://www.universallinkeducation.com/', github: '#' },
    gradient: 'from-blue-500/10 to-sky-500/10',
  },
  {
    title: 'Fashion Hubb',
    img: '/image2.png',
    description:
      'A modern fashion e-commerce platform showcasing curated collections with seamless shopping experience and style inspiration.',
    tags: ['Next.js', 'Fashion', 'Tailwind CSS', 'E-commerce'],
    links: { demo: 'https://fashion-hubb-silk.vercel.app/', github: '#' },
    gradient: 'from-pink-500/10 to-rose-500/10',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16" style={{ background: '#fafafa' }}>
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
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#111' }}>
              E-Commerce &amp; AI Projects
            </h2>
            <div className="h-px flex-1" style={{ background: '#e5e7eb' }} />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <AnimatedSection key={project.title}>
              <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
                <div className={`h-44 sm:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg bg-white/80 backdrop-blur flex items-center justify-center border border-white/50">
                      <span className="text-2xl sm:text-3xl font-black" style={{ color: '#e53935' }}>
                        {project.title.replace('Store', 'S')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #e53935, #ff6b6b)' }} />
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-[#e53935] transition-colors" style={{ color: '#111' }}>
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md border font-medium"
                        style={{ background: '#fafafa', borderColor: '#e5e7eb', color: '#888' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#e53935]"
                      style={{ color: '#888' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#e53935]"
                      style={{ color: '#888' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
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
