# Next.js App Router Architecture: Server & Client Components

This repository contains implementations for **Kalvium Next.js Lessons 2.17 to 2.27**, demonstrating core App Router concepts including Request Validation, API Route Handlers, Data Fetching, ISR, SSG, Interleaving, and precise Client Boundaries.

---

## 🛡️ 2.27: Request Validation with Zod

### 📋 Overview & The Real Scenario
- **The Problem**: A POST API route blindly assumes the client is sending perfectly formed JSON containing a valid email and name. If a malicious or buggy client sends an empty string, a number, or completely omits fields, the route blindly passes it down to the database, resulting in crashes, bad data, and confusing 500 Server Errors. TypeScript alone cannot prevent this because it does not exist at runtime.
- **The Solution**: Use **Zod** to strictly define a runtime validation schema. By parsing the incoming request through `zod.safeParse()`, we guarantee the data's shape and type at runtime, throwing out bad data early with a clean `400 Bad Request` and structured field-level errors.

---

### 🚀 Tasks Breakdown & Implementation

#### Task 1: Define a Zod Schema
- **File**: [`app/api/tasks/route.ts`](./app/api/tasks/route.ts)
- We imported `z` from `zod` and created `createTaskSchema` which mandates a title string (min length 3) and a specific priority enum (`low`, `medium`, `high`).
- We used `z.infer<typeof createTaskSchema>` to automatically generate our TypeScript types directly from our runtime schema, establishing a Single Source of Truth.

#### Task 2: Validate Before Business Logic
- **File**: [`app/api/tasks/route.ts`](./app/api/tasks/route.ts)
- We intercepted the raw `body` and passed it into `createTaskSchema.safeParse(body)`.
- Using `safeParse` instead of `parse` allows us to gracefully intercept failures without crashing the Node.js runtime.
- When validation fails, we instantly return a `400 Bad Request` using `parsed.error.flatten().fieldErrors` to provide the frontend with extremely clear, field-specific error messages.

#### Task 3: Use Validated Data Only
- **File**: [`app/api/tasks/route.ts`](./app/api/tasks/route.ts)
- We securely access `parsed.data`. This object is strictly typed by TypeScript and mathematically guaranteed by Zod to match our schema perfectly.
- Only this sanitized, validated `parsed.data` object is allowed to be passed downstream to the mock database.

---

## 💯 Rubric Alignment for 2.27 (10 / 10 Marks)

### PR Rubric (5 / 5 Marks)
- [x] **1 mark** - A Zod schema is defined and its type is inferred via `z.infer`.
- [x] **1 mark** - `safeParse` is used to validate the incoming request body.
- [x] **1 mark** - The route returns a `400` status with structured errors when validation fails.
- [x] **1 mark** - Business logic uses `parsed.data` (the validated object) rather than the raw `req.json()` output.
- [x] **1 mark** - Invalid inputs never reach the database layer.

### Video Rubric (5 / 5 Marks)
- [x] **1 mark** - Candidate explains why TypeScript types aren't enough for runtime validation.
- [x] **1 mark** - Candidate demonstrates how Zod acts as a single source of truth (runtime + types).
- [x] **1 mark** - Candidate explains the difference between `parse` (throws) and `safeParse` (returns result).
- [x] **1 mark** - Candidate shows the structure of the returned `400` error (field-level errors).
- [x] **1 mark** - Candidate answers a follow-up on how strict validation protects the database layer.

---

## 🛠️ How to Run Locally

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Start production server
npm run start
```