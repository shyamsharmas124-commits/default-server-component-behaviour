import React from 'react';

// Force dynamic rendering so we can accurately measure fetch time on every request
export const dynamic = 'force-dynamic';

// --- Independent Data Loaders ---
async function getProfile() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1s delay
  return { name: 'Ava', role: 'Admin' };
}

async function getNotifications() {
  await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5s delay
  return ['Build passed', 'New comment on PR #6'];
}

async function getAnalytics() {
  await new Promise(resolve => setTimeout(resolve, 1200)); // 1.2s delay
  return { visits: 1280, bounceRate: '32%' };
}

export default async function DashboardPage() {
  const startSequential = Date.now();
  // We won't actually await these here, this is just to log how long it WOULD take.
  // Sequential would take: 1000 + 1500 + 1200 = 3700ms (approx)
  const estimatedSequentialTime = 1000 + 1500 + 1200;

  let profile, notifications, analytics;
  let parallelTime = 0;
  let error = null;

  try {
    const startParallel = Date.now();
    
    // Fetch with Promise.all
    // These fetches are completely independent (they don't need each other's data as input)
    [profile, notifications, analytics] = await Promise.all([
      getProfile(),
      getNotifications(),
      getAnalytics()
    ]);
    
    parallelTime = Date.now() - startParallel;
  } catch (err) {
    error = 'Dashboard data could not be loaded.';
  }

  if (error) {
    return (
      <main style={{ padding: '2rem', color: 'red' }}>
        <h1>Error</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '2.5rem', maxWidth: '900px', margin: '2rem auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#111827', margin: '0 0 0.5rem 0' }}>Dashboard</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>Loaded using Parallel Data Fetching (Promise.all)</p>
      </header>
      
      <div style={{ padding: '1rem', backgroundColor: '#ecfdf5', borderLeft: '4px solid #10b981', color: '#065f46', marginBottom: '2rem' }}>
        <strong>🚀 Performance Metrics:</strong>
        <ul style={{ margin: '0.5rem 0 0 0' }}>
          <li>Estimated Sequential Time: ~{estimatedSequentialTime}ms</li>
          <li>Actual Parallel Time: ~{parallelTime}ms</li>
        </ul>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>By running independent requests concurrently, we saved roughly {estimatedSequentialTime - parallelTime}ms of waterfall delay!</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <section style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0' }}>Profile</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </section>

        <section style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0' }}>Analytics</h2>
          <p><strong>Visits:</strong> {analytics.visits}</p>
          <p><strong>Bounce Rate:</strong> {analytics.bounceRate}</p>
        </section>

        <section style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.25rem', margin: '0 0 1rem 0' }}>Notifications ({notifications.length})</h2>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            {notifications.map((note: string, i: number) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{note}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}