// app/api/tasks/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import crypto from 'crypto';

// 1. Define the Zod schema and infer its TypeScript type
const createTaskSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long" }),
  priority: z.enum(['low', 'medium', 'high']),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

// Mock database
const tasks: { id: string; title: string; priority: string }[] = [];

export async function GET() {
  return NextResponse.json({ success: true, data: tasks });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 2. Validate Before Business Logic
    const parsed = createTaskSchema.safeParse(body);

    if (!parsed.success) {
      // safeParse failed. Return 400 with formatted field errors
      const fieldErrors = parsed.error.flatten().fieldErrors;
      
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request body. Check the highlighted fields.',
            fields: fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    // 3. Use Validated Data Only
    // 'parsed.data' is fully typed and guaranteed to match the schema
    const data = parsed.data;

    const newTask = {
      id: crypto.randomUUID(),
      title: data.title,
      priority: data.priority,
    };

    // Simulate DB save
    tasks.push(newTask);

    return NextResponse.json(
      { success: true, data: newTask },
      { status: 201 }
    );
  } catch (error) {
    // Fallback for malformed JSON or other unexpected errors
    return NextResponse.json(
      { success: false, error: { code: 'BAD_REQUEST', message: 'Malformed request payload' } },
      { status: 400 }
    );
  }
}