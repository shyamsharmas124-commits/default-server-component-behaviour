'use client';
import { useEffect, useState } from 'react';

export default function ArticlesPageBad() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Bad: useEffect fetching on the client
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Articles (Client Fetching)</h1>
      <div style={{ backgroundColor: '#fee2e2', border: '1px solid #ef4444', borderRadius: '6px', padding: '1rem', marginBottom: '1.5rem', color: '#991b1b' }}>
        <strong>Client Component Anti-Pattern:</strong> Uses <code>&apos;use client&apos;</code>, loads <code>useState</code> and <code>useEffect</code> on the browser, includes data fetching logic in the client JS bundle, and triggers loading state on the client.
      </div>
      <div>
        {articles.map((article) => (
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
