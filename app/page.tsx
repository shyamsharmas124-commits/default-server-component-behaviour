import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture: Server & Client Components
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Default Server Component Behaviour (Lesson 2.17)</strong> and <strong>Client Component Marking with <code>&apos;use client&apos;</code> (Lesson 2.18)</strong>.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.18: Client Component Marking with &apos;use client&apos;
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #bfdbfe', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Recommended Pattern</span>
            <h3 style={{ fontSize: '1.25rem', color: '#1e40af', margin: '0.75rem 0 0.5rem 0' }}>/products (Server Page + Client Button)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Page & ProductCard are Server Components (no <code>&apos;use client&apos;</code>). Only the interactive <code>AddToCartButton</code> is marked with <code>&apos;use client&apos;</code>, keeping the client JS boundary minimal.
            </p>
            <Link href="/products" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#2563eb', fontWeight: '600' }}>
              View /products &rarr;
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fecaca', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Anti-Pattern</span>
            <h3 style={{ fontSize: '1.25rem', color: '#991b1b', margin: '0.75rem 0 0.5rem 0' }}>/products-all-client (Root &apos;use client&apos;)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Entire page marked with <code>&apos;use client&apos;</code>. Static data, cards, and page layout are bundled into client JavaScript, unnecessarily inflating bundle size.
            </p>
            <Link href="/products-all-client" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#dc2626', fontWeight: '600' }}>
              View /products-all-client &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.17: Default Server Component Behaviour
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#1f2937', marginTop: 0 }}>/articles (Async Server Component)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Pure async Server Component fetching with direct <code>await fetch(...)</code> without hooks.
            </p>
            <Link href="/articles" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#2563eb', fontWeight: '600' }}>
              View /articles &rarr;
            </Link>
          </div>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#1f2937', marginTop: 0 }}>/articles-good vs /articles-bad</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Side-by-side comparison between client-side <code>useEffect</code> fetching and server-side <code>await</code> fetching.
            </p>
            <Link href="/articles-good" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#16a34a', fontWeight: '600' }}>
              View /articles-good &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}