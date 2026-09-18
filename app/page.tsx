import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Incremental Static Regeneration (Lesson 2.23)</strong>, Static Generation (Lesson 2.21), Leaf Node Pattern (Lesson 2.20), and more.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.23: Incremental Static Regeneration (ISR)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fca5a5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Stale-While-Revalidate</span>
            <h3 style={{ fontSize: '1.3rem', color: '#b91c1c', margin: '0.75rem 0 0.5rem 0' }}>/pricing (Background Refresh & On-Demand)</h3>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
              We set <code>export const revalidate = 60</code> so the page loads instantly from cache, but refreshes in the background every 60 seconds. We also implemented a Server Action to trigger <strong>On-Demand Revalidation</strong> using <code>revalidatePath</code>.
            </p>
            <Link href="/pricing" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#dc2626', fontWeight: '600', fontSize: '1.05rem' }}>
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