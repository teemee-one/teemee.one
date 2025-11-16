export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-sm text-slate-300">
              teemee.one is a living knowledge base and repository of intention.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white">Prompts</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Articles</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Projects</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">GitHub</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white">Contribute</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Discussions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Newsletter</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Twitter</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white">License</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © 2025 teemee.one. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-4 sm:mt-0">
            Built with <span className="text-red-400">❤</span> for people who care
          </p>
        </div>
      </div>
    </footer>
  );
}
