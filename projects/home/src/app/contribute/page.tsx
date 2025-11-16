import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Contribute | teemee.one',
  description: 'Join us in building the future of AI knowledge and intention',
};

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />

      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contribute</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            There are many ways to help build teemee.one. Whether you code, write, design, or just care deeply—there's a place for you here.
          </p>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Ways to Contribute</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ContributionCard
            icon="📝"
            title="Create Prompts"
            description="Develop new prompts that help people think more clearly and create better work. We welcome prompts for writing, coding, research, creativity, and more."
            href="#"
          />
          <ContributionCard
            icon="📚"
            title="Write Articles"
            description="Share knowledge, insights, and thinking about AI, human potential, and working with intention. Help others learn from what you know."
            href="#"
          />
          <ContributionCard
            icon="💻"
            title="Build Projects"
            description="Create tools, integrations, or applications that extend teemee.one. Show how to use our prompts and ideas in practical ways."
            href="#"
          />
          <ContributionCard
            icon="🎨"
            title="Design & Visuals"
            description="Help teemee.one look beautiful. Design graphics, improve the website, create visual guides. Make our content more accessible and engaging."
            href="#"
          />
          <ContributionCard
            icon="🐛"
            title="Report Issues"
            description="Found something broken? A typo? A confusing explanation? Let us know. Good bug reports help us improve."
            href="#"
          />
          <ContributionCard
            icon="💭"
            title="Share Feedback"
            description="Disagree with something? Have an idea? Start a discussion. We grow through diverse perspectives and honest conversations."
            href="#"
          />
        </div>
      </section>

      {/* Contribution Process */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">How to Contribute</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-3xl flex-shrink-0">1️⃣</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Check Our Guidelines</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Read <a href="#" className="text-purple-600 hover:underline">CONTRIBUTING.md</a> to understand our standards, process, and values. We emphasize quality, alignment with intention, and respect for the community.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl flex-shrink-0">2️⃣</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Fork & Clone</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Fork the repository and clone it to your machine. Create a new branch for your work.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl flex-shrink-0">3️⃣</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Create Your Contribution</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Make your changes following our standards. For prompts, use the template. For articles, follow the format. For code, match the existing style.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl flex-shrink-0">4️⃣</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Test & Review</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Take time to review your own work first. Does it align with our intentions? Is it clear and well-structured? Would you be proud to see this merged?
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl flex-shrink-0">5️⃣</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Submit a Pull Request</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Open a PR with a clear title and description. Explain what you've created and why it matters. We'll review and provide feedback.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-3xl flex-shrink-0">6️⃣</div>
              <div>
                <h3 className="text-xl font-bold mb-3">Iterate & Merge</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  We might ask for changes or suggestions. That's normal and good. Iterate together until we reach something we're all proud of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">What We Look For</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <StandardCard
            title="Alignment"
            description="Does this serve our three core intentions? Does it respect our values? If it doesn't, we'll suggest adjustments."
          />
          <StandardCard
            title="Quality"
            description="Is this excellent? Polished? Well-thought-out? We'd rather have one amazing contribution than many mediocre ones."
          />
          <StandardCard
            title="Clarity"
            description="Is it understandable? Could someone else use this? Are examples provided? Good documentation makes all the difference."
          />
          <StandardCard
            title="Respect"
            description="Does this respect people? Their time, their attention, their agency? We won't accept anything that manipulates or harms."
          />
        </div>
      </section>

      {/* Questions? */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions or Ideas?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Open an issue on GitHub, start a discussion, or reach out. We love talking about new ideas and helping people contribute.
          </p>
          <a href="https://github.com/teemee-one/teemee.one" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Open an Issue on GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContributionCard({ icon, title, description, href }: { icon: string; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="card bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </Link>
  );
}

function StandardCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
