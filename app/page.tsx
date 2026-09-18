import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '850px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          2.17 Default Server Component Behaviour
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          In Next.js App Router, <strong>every component is a Server Component by default</strong>.
          Server components execute solely on the server, can be declared <code>async</code>, and stream rendered HTML to the browser without shipping data fetching logic or dependencies to the client bundle.
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#2563eb', marginTop: 0 }}>Task 1: Articles RSC</h2>
          <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
            Pure async Server Component fetching directly using <code>await fetch(...)</code> with no client directives, hooks, or bundle bloat.
          </p>
          <Link href="/articles" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#2563eb', fontWeight: '600' }}>
            View /articles &rarr;
          </Link>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#dc2626', marginTop: 0 }}>Task 3: Client (Bad)</h2>
          <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
            Anti-pattern using <code>&apos;use client&apos;</code>, <code>useState</code>, and <code>useEffect</code> causing client bundle bloat and loading states.
          </p>
          <Link href="/articles-bad" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#dc2626', fontWeight: '600' }}>
            View /articles-bad &rarr;
          </Link>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#16a34a', marginTop: 0 }}>Task 3: Server (Good)</h2>
          <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
            Refactored clean Server Component delivering pre-rendered HTML directly to the browser with zero client JavaScript fetching overhead.
          </p>
          <Link href="/articles-good" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#16a34a', fontWeight: '600' }}>
            View /articles-good &rarr;
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '2rem', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginTop: 0, color: '#1f2937' }}>Key Advantages of Server Components</h2>
        <ul style={{ lineHeight: '1.8', color: '#374151' }}>
          <li><strong>Zero Client JavaScript:</strong> Code and database queries run exclusively on the server, leaving no traces in the client bundle.</li>
          <li><strong>Direct Backend Access:</strong> Components can directly query databases, ORMs, internal APIs, and filesystem safely without creating extra API routes.</li>
          <li><strong>Built-in Security:</strong> Database connection strings, API tokens, and secret keys never leak to the client browser.</li>
          <li><strong>Optimal SEO & Performance:</strong> Browser receives ready-to-render HTML immediately without waiting for client-side JavaScript execution or waterfall network requests.</li>
          <li><strong>Simplified Codebase:</strong> No need for complex client-side state management (Redux, React Query) or boilerplate <code>useEffect</code> lifecycle hooks for simple data display.</li>
        </ul>
      </section>
    </main>
  );
}