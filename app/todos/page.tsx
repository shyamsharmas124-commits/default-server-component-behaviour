// app/todos/page.tsx (Server Component)
import TodoList from '@/components/TodoList';

export default async function TodosPage() {
  // Fetch data on the server
  // Notice: this fetch happens purely on the server. The client never executes this API request!
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const todos = await response.json();

  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', margin: '0 0 0.5rem 0' }}>
          Interleaving Pattern (Server &rarr; Client)
        </h1>
        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
          This page (<code>TodosPage</code>) is a Server Component. It fetches the data from the database/API directly on the server, ensuring zero duplicate network requests on the client. 
          The data is serialized and passed as props (<code>initialTodos</code>) to the Client Component (<code>TodoList</code>), which handles all the sorting and filtering interactivity.
        </p>
      </div>

      <TodoList initialTodos={todos} />
    </main>
  );
}