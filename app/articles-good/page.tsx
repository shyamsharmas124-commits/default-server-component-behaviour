// No 'use client' - this IS a Server Component
export default async function ArticlesPageGood() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await response.json();

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Articles (Server Fetching)</h1>
      <div style={{ backgroundColor: '#dcfce7', border: '1px solid #22c55e', borderRadius: '6px', padding: '1rem', marginBottom: '1.5rem', color: '#166534' }}>
        <strong>Server Component Pattern (Correct):</strong> No <code>&apos;use client&apos;</code>, async function, direct <code>await fetch(...)</code>, 0KB data-fetching logic sent to client, rendered HTML delivered instantly with no client loading flicker.
      </div>
      <div>
        {(articles as any[]).slice(0, 5).map((article) => (
          <article
            key={article.id}
            style={{
              padding: '1rem',
              border: '1px solid #ddd',
              marginBottom: '1rem',
              borderRadius: '4px',
              backgroundColor: '#ffffff',
            }}
          >
            <h2>{article.title}</h2>
            <p>{article.body.substring(0, 100)}...</p>
          </article>
        ))}
      </div>
    </main>
  );
}
