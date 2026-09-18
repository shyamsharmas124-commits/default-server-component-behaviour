// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Simulate fetching all blog post slugs
  const posts = [
    { slug: 'hello-world' },
    { slug: 'next-js-tips' },
    { slug: 'react-patterns' },
    { slug: 'css-tricks' },
    { slug: 'web-performance' },
  ];
  return posts;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Simulate fetching a specific post
  const allPosts: Record<string, { title: string; content: string }> = {
    'hello-world': { title: 'Hello World', content: 'This is my first post! Pre-rendered at build time.' },
    'next-js-tips': { title: 'Next.js Tips', content: 'Use generateStaticParams to make your site blazingly fast.' },
    'react-patterns': { title: 'React Patterns', content: 'Push interactivity to leaf nodes to keep server payloads small.' },
    'css-tricks': { title: 'CSS Tricks', content: 'Modern CSS features save you from writing complex JavaScript.' },
    'web-performance': { title: 'Web Performance', content: 'Static Generation means no database queries at request time!' },
  };

  const post = allPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article style={{ padding: '2.5rem', maxWidth: '800px', margin: '2rem auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#111827', margin: '0 0 0.5rem 0' }}>{post.title}</h1>
        <p style={{ color: '#6b7280', margin: 0, fontStyle: 'italic' }}>Slug: /blog/{params.slug}</p>
      </header>
      <div style={{ fontSize: '1.125rem', color: '#374151', lineHeight: '1.7' }}>
        <p>{post.content}</p>
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#ecfdf5', borderLeft: '4px solid #10b981', color: '#065f46' }}>
          <strong>🚀 Performance Note:</strong> Because this page was built with <code>generateStaticParams</code>, this HTML was generated at build time. When you loaded this URL, zero database queries were executed!
        </div>
      </div>
    </article>
  );
}