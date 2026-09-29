// app/api/users/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory array for demonstration purposes
const users = [
  { id: '1', name: 'Ava' },
  { id: '2', name: 'Noah' },
];

export async function GET() {
  // GET returns 200 (Success)
  return NextResponse.json(
    { success: true, data: users },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Bad input validation
    if (!body || typeof body.name !== 'string' || body.name.trim() === '') {
      // 400 for bad input
      return NextResponse.json(
        { success: false, error: { code: 'BAD_REQUEST', message: 'Name is required and must be a string' } },
        { status: 400 }
      );
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: body.name.trim(),
    };

    users.push(newUser);

    // 201 for successfully created resource
    return NextResponse.json(
      { success: true, data: newUser },
      { status: 201 }
    );
  } catch (error) {
    // Handle invalid JSON parsing errors
    return NextResponse.json(
      { success: false, error: { code: 'BAD_REQUEST', message: 'Invalid JSON body' } },
      { status: 400 }
    );
  }
}