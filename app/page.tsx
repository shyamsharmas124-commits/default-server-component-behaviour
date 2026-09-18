import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Static Generation with generateStaticParams (Lesson 2.21)</strong>, Leaf Node Pattern (Lesson 2.20), Interleaving Components (Lesson 2.19), and basic RSC rules.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.21: Static Generation (generateStaticParams)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fcd34d', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Instant HTML</span>
            <h3 style={{ fontSize: '1.3rem', color: '#d97706', margin: '0.75rem 0 0.5rem 0' }}>/blog/[slug] (Pre-rendered Dynamic Routes)</h3>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
              We used <code>generateStaticParams</code> to pre-render 5 dynamic blog routes at build time. When you visit these pages, no database queries run! The HTML is served instantly from the CDN layer.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/hello-world" style={{ display: 'inline-block', color: '#d97706', fontWeight: '600' }}>/hello-world &rarr;</Link>
              <Link href="/blog/react-patterns" style={{ display: 'inline-block', color: '#d97706', fontWeight: '600' }}>/react-patterns &rarr;</Link>
              <Link href="/blog/does-not-exist" style={{ display: 'inline-block', color: '#9ca3af', fontWeight: '600' }}>/does-not-exist (404) &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.20: Pushing Interactivity to Leaf Nodes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #10b981', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#d1fae5', color: '#047857', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>The Leaf Node Pattern</span>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', marginTop: '0.75rem' }}>
              Notice the <strong>Header</strong> above (with the Theme Toggle) and the <strong>Footer</strong> below (with the Counter). The <code>Header</code> and <code>Footer</code> components themselves are <strong>Server Components</strong>. Only the tiny buttons inside them are marked with <code>'use client'</code>.
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

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.18: Client Component Marking
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #bfdbfe' }}>
            <Link href="/products" style={{ display: 'inline-block', color: '#2563eb', fontWeight: '600' }}>
              View /products (Good) &rarr;
            </Link>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fecaca' }}>
            <Link href="/products-all-client" style={{ display: 'inline-block', color: '#dc2626', fontWeight: '600' }}>
              View /products-all-client (Bad) &rarr;
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
            <Link href="/articles" style={{ display: 'inline-block', color: '#2563eb', fontWeight: '600' }}>
              View /articles &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}