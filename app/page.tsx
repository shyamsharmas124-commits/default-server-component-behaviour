import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Sequential Data Fetching (Lesson 2.25)</strong>, Parallel Data Fetching (Lesson 2.24), ISR, and more.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.25: Sequential Data Fetching
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #f9a8d4', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#fdf2f8', color: '#be185d', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Dependent Chains</span>
            <h3 style={{ fontSize: '1.3rem', color: '#be185d', margin: '0.75rem 0 0.5rem 0' }}>/account (User &rarr; Orders)</h3>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
              We fetch the user profile first, and only await the orders fetch <em>after</em> we get the user's ID. Meanwhile, independent requests (like site preferences) run concurrently to minimize the waterfall. Error boundaries handle missing users vs missing orders gracefully.
            </p>
            <Link href="/account" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#db2777', fontWeight: '600', fontSize: '1.05rem' }}>
              View Account Page &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.24: Parallel Data Fetching
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #86efac', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Link href="/dashboard" style={{ display: 'inline-block', color: '#16a34a', fontWeight: '600', fontSize: '1.05rem' }}>
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
        </div>
      </section>
      
    </main>
  );
}