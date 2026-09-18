import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Parallel Data Fetching (Lesson 2.24)</strong>, Incremental Static Regeneration (Lesson 2.23), Static Generation (Lesson 2.21), and more.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.24: Parallel Data Fetching
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #86efac', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Promise.all</span>
            <h3 style={{ fontSize: '1.3rem', color: '#166534', margin: '0.75rem 0 0.5rem 0' }}>/dashboard (Concurrent Requests)</h3>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
              Instead of awaiting profile, notifications, and analytics sequentially (creating a slow waterfall), we fire all three independent requests concurrently using <code>Promise.all</code>. This reduces the total wait time to only the slowest request.
            </p>
            <Link href="/dashboard" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#16a34a', fontWeight: '600', fontSize: '1.05rem' }}>
              View Dashboard &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.23: Incremental Static Regeneration (ISR)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fca5a5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Link href="/pricing" style={{ display: 'inline-block', color: '#dc2626', fontWeight: '600', fontSize: '1.05rem' }}>
              View ISR Pricing Page &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.21: Static Generation (generateStaticParams)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fcd34d', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Link href="/blog/hello-world" style={{ display: 'inline-block', color: '#d97706', fontWeight: '600', fontSize: '1.05rem' }}>
              View /blog/[slug] &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.20: Pushing Interactivity to Leaf Nodes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #10b981', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              Notice the <strong>Header</strong> above and the <strong>Footer</strong> below. The <code>Header</code> and <code>Footer</code> components are <strong>Server Components</strong>, while only the tiny buttons inside them are Client Components.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.19: Interleaving Server and Client Components
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #c4b5fd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Link href="/todos" style={{ display: 'inline-block', color: '#7c3aed', fontWeight: '600', fontSize: '1.05rem' }}>
              Explore the Interleaving Pattern &rarr;
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}