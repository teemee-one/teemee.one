import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Prompts | teemee.one',
  description: 'High-quality prompts designed to unlock creativity, clarity, and practical value',
};

const prompts = [
  {
    title: 'Clarify Your Core Values',
    category: 'Writing',
    description: 'Get crystal clear on what matters most to you. This prompt guides deep self-reflection to articulate your core values.',
    tags: ['reflection', 'values', 'clarity'],
  },
  {
    title: 'Debug with Clarity',
    category: 'Coding',
    description: 'Systematic approach to debugging. Move from chaos to clarity by understanding the problem before jumping to solutions.',
    tags: ['debugging', 'problem-solving', 'code'],
  },
  {
    title: 'Brainstorm with Divergence First',
    category: 'Creativity',
    description: 'Generate breakthrough ideas by embracing wildness first. Quantity before quality, exploration before judgment.',
    tags: ['ideation', 'creativity', 'innovation'],
  },
  {
    title: 'Extract Insight from Research',
    category: 'Research',
    description: 'Transform raw information into actionable insights. Learn to read critically, synthesize patterns, and find what matters.',
    tags: ['research', 'synthesis', 'learning'],
  },
  {
    title: 'Analyze Data for Meaning',
    category: 'Analysis',
    description: 'Go beyond numbers to understand what your data actually means. Find patterns, draw conclusions, and make better decisions.',
    tags: ['analytics', 'interpretation', 'decision-making'],
  },
];

export default function PromptsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />

      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Prompts Library</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            High-quality prompts designed to unlock creativity, clarity, and practical value. Clone the repo and adapt them for your own use.
          </p>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {prompts.map((prompt, idx) => (
            <PromptCard key={idx} prompt={prompt} />
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">How to Use These Prompts</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-purple-600 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Clone the Repository</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get the full teemee.one repo on your machine. All prompts are in the <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">/prompts</code> directory.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-purple-600 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Read & Understand</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Each prompt includes purpose, context, and examples. Take time to understand why it's structured the way it is.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-purple-600 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Adapt for Your Needs</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Make it your own. Modify language, add context, adjust the approach. The prompts are starting points, not sacred texts.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-purple-600 flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Share Your Improvements</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Found a better version? Improved the approach? Consider contributing back to help the community evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Using Prompts Programmatically</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          We've created the <strong>teemee-prompt-loader</strong> tool to help you load and use teemee.one prompts in your code:
        </p>
        <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto mb-8">
          <code>{`from teemee import TeemeeLoader

loader = TeemeeLoader()
prompt = loader.load_prompt("clarify-your-core-values")
print(prompt.content)`}</code>
        </pre>
        <Link href="/projects" className="btn btn-secondary">
          View Projects
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Clone teemee.one from GitHub and start using these prompts in your workflow.
          </p>
          <a href="https://github.com/teemee-one/teemee.one" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Clone on GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PromptCard({ prompt }: { prompt: typeof prompts[0] }) {
  return (
    <div className="card bg-white dark:bg-slate-800">
      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">{prompt.category}</p>
      <h3 className="text-2xl font-bold mb-4">{prompt.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{prompt.description}</p>
      <div className="flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
