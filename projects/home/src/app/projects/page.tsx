import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | teemee.one',
  description: 'Practical projects demonstrating teemee.one in action',
};

const projects = [
  {
    title: 'teemee-prompt-loader',
    description: 'A Python tool to load, search, and use teemee.one prompts programmatically. Perfect for integrating our prompts into your applications.',
    tags: ['python', 'library', 'ai'],
    github: 'https://github.com/teemee-one/teemee.one/tree/main/projects/teemee-prompt-loader',
  },
  {
    title: 'teemee-homepage',
    description: 'The official teemee.one website. Built with Next.js, demonstrates how to create fast, accessible, modern web presence for AI knowledge bases.',
    tags: ['nextjs', 'typescript', 'web'],
    github: 'https://github.com/teemee-one/teemee.one/tree/main/projects/teemee-homepage',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />

      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Practical projects that demonstrate teemee.one in action. Open source, well-documented, and ready to use or extend.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>

      {/* Contributing */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Have a Project Idea?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Building something that uses teemee.one? We'd love to feature it. Whether it's a tool, integration, extension, or application—if it serves our intentions and helps people, we want to help promote it.
          </p>
          <Link href="/contribute" className="btn btn-primary">
            Submit a Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="card bg-white dark:bg-slate-800 flex flex-col">
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">{project.description}</p>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        View on GitHub
      </a>
    </div>
  );
}
