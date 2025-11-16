import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'teemee.one - A Living Knowledge Base for AI',
  description: 'Repository of intention. Create useful tools, help people connect with their hearts, support dreams.',
  keywords: ['AI', 'prompts', 'knowledge base', 'intention', 'tools'],
  openGraph: {
    title: 'teemee.one - A Living Knowledge Base for AI',
    description: 'Repository of intention. Create useful tools, help people connect with their hearts, support dreams.',
    url: 'https://teemee.one',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'teemee.one',
    description: 'A living knowledge base for AI built on clear intention',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
