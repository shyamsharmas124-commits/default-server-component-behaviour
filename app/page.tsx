import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#111827' }}>
          Next.js App Router Architecture
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
          A hands-on implementation and proof of <strong>Request Validation with Zod (Lesson 2.27)</strong>, Route Handlers (Lesson 2.26), and Data Fetching patterns.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.27: Request Validation with Zod
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fdba74', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#ffedd5', color: '#c2410c', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Runtime Type Safety</span>
            <h3 style={{ fontSize: '1.3rem', color: '#c2410c', margin: '0.75rem 0 0.5rem 0' }}>/api/tasks (Safe Parsing)</h3>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
              We treat the incoming HTTP payload as fully untrusted. By using Zod's <code>safeParse</code>, we guarantee that only strictly validated data reaches our database. Invalid requests instantly return a predictable <code>400</code> error with flattened, field-specific error messages.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/api/tasks" style={{ display: 'inline-block', color: '#ea580c', fontWeight: '600', fontSize: '1.05rem' }}>
                Test GET /api/tasks &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.26: Basic GET / POST Route Handlers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #5eead4', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Link href="/api/users" style={{ display: 'inline-block', color: '#0d9488', fontWeight: '600', fontSize: '1.05rem' }}>
              Test GET /api/users &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Lesson 2.25: Sequential Data Fetching
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #f9a8d4', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Link href="/account" style={{ display: 'inline-block', color: '#db2777', fontWeight: '600', fontSize: '1.05rem' }}>
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
      
    </main>
  );
}