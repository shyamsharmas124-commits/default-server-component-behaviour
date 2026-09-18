import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Interleaving Server and Client Components (Lesson 2.19)</strong>, Default Server Component Behaviour (Lesson 2.17), and Client Component Marking (Lesson 2.18).
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.19: Interleaving Server and Client Components
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #c4b5fd', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#ede9fe', color: '#5b21b6', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>The Ultimate Pattern</span>
            <h3 style={{ fontSize: '1.3rem', color: '#5b21b6', margin: '0.75rem 0 0.5rem 0' }}>/todos (Server Data &rarr; Client Interaction)</h3>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
              The Server Component fetches the data directly from the API and passes it as serialized JSON props to the Client Component. The Client Component uses this initial data to handle local interactive state (filtering and toggling). This completely eliminates duplicate fetching and client-side data waterfalls.
            </p>
            <Link href="/todos" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#7c3aed', fontWeight: '600', fontSize: '1.05rem' }}>
              Explore the Interleaving Pattern &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.18: Client Component Marking
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #bfdbfe' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#1e40af', margin: '0 0 0.5rem 0' }}>/products (Good)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Server Component page with small isolated Client Component leaf nodes.
            </p>
            <Link href="/products" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#2563eb', fontWeight: '600' }}>
              View /products &rarr;
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fecaca' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#991b1b', margin: '0 0 0.5rem 0' }}>/products-all-client (Bad)</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Entire page marked with <code>&apos;use client&apos;</code> causing client bundle bloat.
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#1f2937', marginTop: 0 }}>/articles</h3>
            <Link href="/articles" style={{ display: 'inline-block', color: '#2563eb', fontWeight: '600' }}>
              View /articles &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}