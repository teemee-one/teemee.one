'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
            <span className="font-bold text-lg hidden sm:inline">teemee.one</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/philosophy" className="hover:text-purple-600">Philosophy</Link>
            <Link href="/prompts" className="hover:text-purple-600">Prompts</Link>
            <Link href="/projects" className="hover:text-purple-600">Projects</Link>
            <Link href="/contribute" className="hover:text-purple-600">Contribute</Link>
            <a href="https://github.com/teemee-one/teemee.one" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/philosophy" className="block py-2 hover:text-purple-600">Philosophy</Link>
            <Link href="/prompts" className="block py-2 hover:text-purple-600">Prompts</Link>
            <Link href="/projects" className="block py-2 hover:text-purple-600">Projects</Link>
            <Link href="/contribute" className="block py-2 hover:text-purple-600">Contribute</Link>
            <a href="https://github.com/teemee-one/teemee.one" target="_blank" rel="noopener noreferrer" className="block py-2">
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
