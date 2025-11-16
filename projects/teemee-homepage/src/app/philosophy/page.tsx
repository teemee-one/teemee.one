import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Philosophy | teemee.one',
  description: 'Understand the vision and values that guide teemee.one',
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />

      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Philosophy</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            The thinking that guides teemee.one. Why we exist, how we make decisions, and what we believe matters.
          </p>
        </div>
      </section>

      {/* Core Intentions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Core Intentions</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-2xl font-bold mb-4">Create Useful Tools</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Every tool we create must be genuinely useful. Not theoretical, not abstract—practical things that solve real problems and make life better.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              We measure success by whether people actually use what we build and whether it helps them achieve their goals.
            </p>
          </div>

          <div className="border-l-4 border-cyan-600 pl-6">
            <h3 className="text-2xl font-bold mb-4">Help People Connect with Their Heart</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Authenticity is the foundation. We build spaces where genuine connection is possible—between people and between humans and AI.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              This means respecting what matters to people, honoring their values, and never using technology to manipulate or mislead.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-2xl font-bold mb-4">Help People Live Their Dreams</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Technology should amplify human potential, not limit it. We want to help people explore what's possible and achieve what they care about.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Whether that's creating art, solving problems, starting a business, or simply understanding themselves better—we're here to support that journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ValueCard
              title="Authenticity"
              description="We're honest about what we know and don't know. No hype, no pretense—just genuine thinking about hard problems."
            />
            <ValueCard
              title="Usefulness"
              description="Everything we create must serve a real need. If it's not useful, we reconsider why we're building it."
            />
            <ValueCard
              title="Human-Centered"
              description="AI serves humans, not the other way around. We keep human authority, agency, and well-being at the center."
            />
            <ValueCard
              title="Open & Collaborative"
              description="We learn better together. Open source, open thinking, open to feedback and improvement from the community."
            />
            <ValueCard
              title="Quality Over Speed"
              description="We'd rather create something excellent slowly than something mediocre quickly. Excellence builds trust."
            />
            <ValueCard
              title="Respectful Innovation"
              description="We respect people's time, attention, and autonomy. Innovation that helps people should never manipulate them."
            />
          </div>
        </div>
      </section>

      {/* How We Decide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">How We Make Decisions</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Every decision at teemee.one is guided by the same question: <strong>Does this serve our intentions or move away from them?</strong>
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            We ask:
          </p>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-3">→</span>
              <span>Does this create useful tools?</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-3">→</span>
              <span>Does this foster authentic connection?</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-3">→</span>
              <span>Does this support human potential?</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-3">→</span>
              <span>Is this aligned with our values?</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-3">→</span>
              <span>Are we uncertain? If so, we ask.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Who This Is For</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">For People Using AI</h3>
              <p className="text-slate-600 dark:text-slate-300">
                You want to work with AI in ways that feel authentic and aligned with your values. You need tools that help you think clearly and create better work without losing yourself in the process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">For AI Practitioners & Developers</h3>
              <p className="text-slate-600 dark:text-slate-300">
                You're building with AI and want to do it in ways that respect people and create genuine value. You want access to quality prompts, patterns, and thinking from people who've wrestled with these questions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">For Communities & Organizations</h3>
              <p className="text-slate-600 dark:text-slate-300">
                You want to develop AI capabilities that serve your people and mission. You're looking for frameworks, tools, and thinking that align with your values rather than imposing external ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Whether you want to use teemee.one or contribute to its evolution, there's a place for you here.
        </p>
        <Link href="/contribute" className="btn btn-primary">
          Learn How to Contribute
        </Link>
      </section>

      <Footer />
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
