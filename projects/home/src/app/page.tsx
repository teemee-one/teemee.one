import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IntentionCard from '@/components/IntentionCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-purple-100 dark:selection:bg-purple-900">
      <Navigation />

      {/* Hero Section: The Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <span className="mr-2">✨</span> Incorporating the Future of Work
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 tracking-tight text-slate-900 dark:text-white">
              Empowering Visionaries with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">AI & Heart.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl">
              TeeMee Inc. provides high-touch technical and management consulting for executives, solopreneurs, and professionals. We bridge the gap between complex AI technologies and human-centric business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg shadow-lg shadow-purple-200 dark:shadow-none">
                Work With Us
              </Link>
              <Link href="/services" className="btn btn-secondary px-8 py-4 text-lg">
                View Services
              </Link>
            </div>
          </div>
          
          {/* Abstract representation of the Logo Concept (Mind/Heart/Guts) */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 dark:from-purple-900/40 dark:to-blue-900/40 rounded-full blur-3xl opacity-50" />
            <div className="relative aspect-square rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-8 flex flex-col items-center justify-center gap-8 shadow-2xl">
              {/* This mimics the vertical alignment of the logo concept */}
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-3xl mb-3">🧠</div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Mind</p>
                <p className="text-sm text-slate-500">Strategy & Logic</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-blue-200 to-red-200 dark:from-blue-800 dark:to-red-800" />
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center text-3xl mb-3">❤️</div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Heart</p>
                <p className="text-sm text-slate-500">Connection & Authenticity</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-red-200 to-orange-200 dark:from-red-800 dark:to-orange-800" />
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center text-3xl mb-3">⚡</div>
                <p className="font-bold text-slate-700 dark:text-slate-200">Guts</p>
                <p className="text-sm text-slate-500">Intuition & Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy: Mind, Heart, Guts */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Built on Balance</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We don't just deploy technology; we align it with human purpose. Our consulting framework ensures that every digital solution we build for you is grounded in three core dimensions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <IntentionCard
              icon="🧠"
              title="The Mind: Strategic Clarity"
              description="We use AI and Web Technologies to solve complex problems, creating logical, scalable systems that free you from mental clutter."
            />
            <IntentionCard
              icon="❤️"
              title="The Heart: Authentic Connection"
              description="Technology should never feel cold. We help you design digital media and marketing channels that resonate emotionally with your audience."
            />
            <IntentionCard
              icon="⚡"
              title="The Guts: Practical Execution"
              description="Ideas are cheap; execution is everything. We provide the tools and 'bias for action' to turn your solopreneur dreams into revenue."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Tailored consulting for high-performing individuals and teams. We focus on implementation, not just theory.
            </p>
          </div>
          <Link href="/services" className="hidden md:flex items-center text-purple-600 hover:text-purple-700 font-semibold mt-4">
            View Full Service Menu <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ServiceCard
            title="AI & Tech Stack Strategy"
            tags={['Consulting', 'Architecture']}
            description="For executives who need to understand how AI impacts their roadmap. We audit your current stack and design a future-proof plan to integrate LLMs and automation safely."
          />
          <ServiceCard
            title="Digital Media Systems"
            tags={['Content', 'Marketing']}
            description="Build a content engine that runs without burnout. We set up the workflows, tools, and AI assistants that allow you to produce high-quality thought leadership at scale."
          />
          <ServiceCard
            title="The 'Solopreneur OS'"
            tags={['Operations', 'Notion/Airtable']}
            description="A complete operational overhaul for one-person businesses. From CRM to Project Management, we build the 'Second Brain' that runs your business while you sleep."
          />
          <ServiceCard
            title="Custom Web Experiments"
            tags={['Development', 'R&D']}
            description="Have a wild idea? We act as your technical co-founder to prototype, test, and launch web experiments quickly using the latest frameworks."
          />
        </div>
        
        <div className="text-center md:hidden">
           <Link href="/services" className="btn btn-secondary w-full">View All Services</Link>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="bg-slate-900 text-white py-24 rounded-3xl mx-4 sm:mx-8 mb-20 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">How We Collaborate</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0" />
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center text-4xl mb-6 shadow-xl">
                🔍
              </div>
              <h3 className="text-xl font-bold mb-4">1. Clarify</h3>
              <p className="text-slate-400 leading-relaxed">
                We start with deep listening. We identify the friction in your current business and define the "Core Intentions" for our work together.
              </p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto bg-purple-900 rounded-full border-4 border-slate-900 flex items-center justify-center text-4xl mb-6 shadow-xl shadow-purple-900/50">
                ⚙️
              </div>
              <h3 className="text-xl font-bold mb-4">2. Build</h3>
              <p className="text-slate-400 leading-relaxed">
                We get our hands dirty. Whether it's coding a custom tool, configuring a CRM, or training an AI model, we build the solution.
              </p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center text-4xl mb-6 shadow-xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-4">3. Empower</h3>
              <p className="text-slate-400 leading-relaxed">
                We don't create dependency. We hand over the keys, the documentation, and the training so you own your new superpowers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to evolve your work?</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
          Whether you need a one-hour strategy session or a full operational overhaul, let's start with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg w-full sm:w-auto">
            Book a Discovery Call
          </Link>
          <a href="mailto:hello@teemee.one" className="btn btn-outline px-8 py-4 text-lg w-full sm:w-auto">
            Email Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Replaced "PromptCard" with "ServiceCard" to look more B2B/Consulting
function ServiceCard({ title, tags, description }: { title: string; tags: string[]; description: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors shadow-sm hover:shadow-md">
      <div className="flex gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
        Learn details <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
}