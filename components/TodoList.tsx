'use client';
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState(initialTodos);
  const [showCompleted, setShowCompleted] = useState(true);

  const filtered = todos.filter(
    (todo) => showCompleted || !todo.completed
  );

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#1f2937', marginTop: 0 }}>Filter Tasks (Client Component)</h2>
        <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>
          This component receives <code>initialTodos</code> as a prop from its Server Component parent. It never fetches data itself, it only handles local state (interactivity).
        </p>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '500', color: '#374151' }}>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
            style={{ width: '1.1rem', height: '1.1rem', cursor: 'pointer' }}
          />
          Show completed tasks
        </label>
      </div>

      <ul style={{ marginTop: '1rem', listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {filtered.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: '0.75rem',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#9ca3af' : '#111827',
              backgroundColor: '#f9fafb',
              border: '1px solid #f3f4f6',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.2s',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              style={{ width: '1.1rem', height: '1.1rem', cursor: 'pointer' }}
            />
            {todo.title}
          </li>
        ))}
      </ul>
      
      {filtered.length === 0 && (
        <p style={{ color: '#6b7280', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>
          No tasks match the filter.
        </p>
      )}
    </div>
  );
}