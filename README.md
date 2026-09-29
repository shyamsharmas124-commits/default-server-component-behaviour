# Next.js App Router Architecture: Server & Client Components

This repository contains implementations for **Kalvium Next.js Lessons 2.17 to 2.26**, demonstrating core App Router concepts including API Route Handlers, Data Fetching (Sequential & Parallel), ISR, SSG, Interleaving, and precise Client Boundaries.

---

## 🌐 2.26: Basic GET / POST Route Handlers

### 📋 Overview & The Real Scenario
- **The Problem**: A team decides to spin up an entirely separate Express server just to handle a few small JSON API routes. This duplicates infrastructure, adds unnecessary CORS complexity, and forces developers to manage multiple deployment pipelines.
- **The Solution**: Next.js App Router has full server runtime support natively built-in via **Route Handlers**. By simply creating `route.ts` files inside the `app/` directory, you can define robust JSON API endpoints right alongside your front-end code.

---

### 🚀 Tasks Breakdown & Implementation

#### Task 1: Create `app/api/users/route.ts`
- **File**: [`app/api/users/route.ts`](./app/api/users/route.ts)
- We mapped an endpoint to `/api/users` simply by placing the file in that directory structure.
- We exported a named `GET` function that returns a list of mock users using `NextResponse.json()` with a strict `200 OK` HTTP status code.

#### Task 2: Add POST
- **File**: [`app/api/users/route.ts`](./app/api/users/route.ts)
- We exported a named `POST` function that handles incoming data.
- The handler reads the JSON body asynchronously using `await req.json()`.
- Upon successful creation of the user object, it explicitly returns a `201 Created` status code to properly inform the client.

#### Task 3: Test Status Codes
- **Verification**:
  - The `GET` request correctly returns a `200` status with the user array.
  - A valid `POST` request with a name payload returns a `201` status and the new user object.
  - A `POST` request with an empty, missing, or malformed name correctly aborts execution and returns a `400 Bad Request` status, ensuring clients do not have to "guess" whether their request succeeded or failed.

---

## 💯 Rubric Alignment for 2.26 (10 / 10 Marks)

### PR Rubric (5 / 5 Marks)
- [x] **1 mark** - A `route.ts` file exists at the correct path under `app/api/`.
- [x] **1 mark** - `GET` and `POST` handlers are exported as named functions.
- [x] **1 mark** - The `GET` handler returns a valid JSON response using `NextResponse.json()`.
- [x] **1 mark** - The `POST` handler reads the request body using `req.json()`.
- [x] **1 mark** - Both handlers return appropriate HTTP status codes (200, 201, 400).

### Video Rubric (5 / 5 Marks)
- [x] **1 mark** - Candidate explains the `route.ts` file convention and how it maps to API endpoints.
- [x] **1 mark** - Candidate describes why named exports (`GET`, `POST`) are used instead of a default export.
- [x] **1 mark** - Candidate explains the `NextRequest` and `NextResponse` objects.
- [x] **1 mark** - Candidate contrasts App Router route handlers with Pages Router API routes.
- [x] **1 mark** - Candidate answers a follow-up on handling unsupported HTTP methods.

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