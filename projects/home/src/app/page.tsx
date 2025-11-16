import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IntentionCard from '@/components/IntentionCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              A Living AI Knowledge Base
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              teemee.one is a repository of intention—a collective consciousness that helps people and AI work together with authenticity, purpose, and heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/prompts" className="btn btn-primary">
                Explore Prompts
              </Link>
              <Link href="/philosophy" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-cyan-200 dark:from-purple-900 dark:to-cyan-900 flex items-center justify-center">
              <div className="text-8xl">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Intentions */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Intentions</h2>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
            We're building teemee.one around three core intentions that guide every decision.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <IntentionCard
              icon="🛠️"
              title="Create Useful Tools"
              description="We build tools that genuinely help people work with AI. Every creation must be practical, well-designed, and solve real problems."
            />
            <IntentionCard
              icon="❤️"
              title="Help People Connect with Their Heart"
              description="Authenticity matters. We foster genuine connection between people and between humans and AI, rooted in honesty and respect."
            />
            <IntentionCard
              icon="🌟"
              title="Help People Live Their Dreams"
              description="Technology should amplify human potential. We empower people to explore possibilities and achieve what they care about most."
            />
          </div>
        </div>
      </section>

      {/* Prompts Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-4">Featured Prompts</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl">
          High-quality prompts designed to unlock creativity, clarity, and practical value. Clone the repo and adapt them for your own use.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <PromptCard
            title="Clarify Your Core Values"
            category="Writing"
            description="Get crystal clear on what matters most to you. This prompt guides deep self-reflection to articulate your core values."
            href="/prompts"
          />
          <PromptCard
            title="Debug with Clarity"
            category="Coding"
            description="Systematic approach to debugging. Move from chaos to clarity by understanding the problem before jumping to solutions."
            href="/prompts"
          />
          <PromptCard
            title="Brainstorm with Divergence First"
            category="Creativity"
            description="Generate breakthrough ideas by embracing wildness first. Quantity before quality, exploration before judgment."
            href="/prompts"
          />
          <PromptCard
            title="Extract Insight from Research"
            category="Research"
            description="Transform raw information into actionable insights. Learn to read critically, synthesize patterns, and find what matters."
            href="/prompts"
          />
        </div>
        <Link href="/prompts" className="btn btn-primary">
          View All Prompts
        </Link>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">How teemee.one Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Clone & Use</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Clone the repository and use teemee.one prompts, articles, and projects privately. Everything is MIT licensed.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Adapt & Improve</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Customize content for your needs. Build on our foundation. Learn from others' improvements through the repo.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Contribute & Evolve</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Share what you learn. Contribute back to the community. Help teemee.one grow into our collective best thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          Choose your path: explore our philosophy, dive into prompts, or get started with code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/philosophy" className="btn btn-secondary">
            Explore Philosophy
          </Link>
          <Link href="/prompts" className="btn btn-primary">
            Browse Prompts
          </Link>
          <a href="https://github.com/teemee-one/teemee.one" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View on GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PromptCard({ title, category, description, href }: { title: string; category: string; description: string; href: string }) {
  return (
    <Link href={href} className="card bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">{category}</p>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
      <p className="text-purple-600 dark:text-purple-400 mt-4 font-semibold">Learn more →</p>
    </Link>
  );
}
