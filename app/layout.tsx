import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Default Server Component Behaviour',
  description: 'Demonstrating Default Server Component Behaviour in Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, backgroundColor: '#f9fafb', color: '#111827' }}>
        <header style={{ backgroundColor: '#1f2937', color: '#ffffff', padding: '1rem 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <nav style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>Next.js RSC Demo</a>
            <a href="/articles" style={{ color: '#93c5fd', textDecoration: 'none' }}>Task 1: Articles (RSC)</a>
            <a href="/articles-bad" style={{ color: '#fca5a5', textDecoration: 'none' }}>Task 3: Client (Bad)</a>
            <a href="/articles-good" style={{ color: '#86efac', textDecoration: 'none' }}>Task 3: Server (Good)</a>
          </nav>
        </header>
        <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '80vh', padding: '1rem' }}>
          {children}
        </div>
      </body>
    </html>
  );
}