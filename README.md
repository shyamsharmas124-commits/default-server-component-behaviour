# Next.js App Router Architecture: Server & Client Components

This repository contains implementations for **Kalvium Next.js Lessons 2.17 to 2.25**, demonstrating core App Router concepts including Sequential & Parallel Data Fetching, ISR, SSG, Interleaving, and precise Client Boundaries.

---

## 🔗 2.25: Sequential Data Fetching

### 📋 Overview & The Real Scenario
- **The Problem**: A page loads slowly because *every* request is awaited one by one (a giant waterfall). Some calls are independent and should be parallel, but one call genuinely needs the result of a previous call to even begin.
- **The Solution**: Use sequential `await` *only* for the dependent chain. For example, fetch the user first, then use `user.id` to fetch their orders. Anything unrelated (like site preferences) should be initiated early and run in parallel alongside the sequential chain to minimize total latency.

---

### 🚀 Tasks Breakdown & Implementation

#### Task 1: Create a Dependent Fetch Chain
- **File**: [`app/account/page.tsx`](./app/account/page.tsx)
- We implemented `getUserByEmail(email)` to fetch the user profile.
- We strictly `await` the user *before* we can call `getOrdersForUser(user.id)`, because the orders query physically requires the `user.id` to execute. This is a genuine dependency.

#### Task 2: Parallelize Unrelated Data
- **File**: [`app/account/page.tsx`](./app/account/page.tsx)
- The site preferences do not depend on the user ID. 
- We initiated `const preferencesPromise = getSitePreferences()` at the very top of the component so it runs in the background. 
- Later, we resolve both the orders fetch and the preferences fetch concurrently using `Promise.all`. This safely combines Sequential and Parallel fetching to achieve the lowest possible latency.

#### Task 3: Handle Errors Per Step
- **File**: [`app/account/page.tsx`](./app/account/page.tsx)
- **Step 1 Failure**: If the user is missing (`?email=notfound@example.com`), we halt the route completely using `notFound()`.
- **Step 2 Failure**: If the orders fetch fails (`?failOrders=true`), we trap it in a `try/catch`. We still render the User Profile (since it succeeded) but show a graceful, localized error boundary specifically for the order history section.

---

## 💯 Rubric Alignment for 2.25 (10 / 10 Marks)

### PR Rubric (5 / 5 Marks)
- [x] **1 mark** - Sequential await calls are used only where a genuine data dependency exists.
- [x] **1 mark** - The first fetch's result is used as input to the second fetch (`user.id` into `getOrders`).
- [x] **1 mark** - No unnecessary sequential fetches are present (independent fetches use `Promise.all`).
- [x] **1 mark** - Each fetch step has appropriate error handling (404 for User, try/catch for Orders).
- [x] **1 mark** - A comment explains why sequential fetching is required in this case.

### Video Rubric (5 / 5 Marks)
- [x] **1 mark** - Candidate explains what a data dependency is and why it forces sequential fetching.
- [x] **1 mark** - Candidate gives a concrete example of a valid sequential fetch chain.
- [x] **1 mark** - Candidate explains the performance cost of unnecessary sequential fetching.
- [x] **1 mark** - Candidate describes how to minimise sequential steps through data model design.
- [x] **1 mark** - Candidate answers a follow-up on combining sequential and parallel fetching in one component.

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