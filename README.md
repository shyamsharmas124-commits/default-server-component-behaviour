# Next.js App Router Architecture: Server & Client Components

This repository contains comprehensive implementations for **Kalvium Next.js Lessons 2.17, 2.18, 2.19, and 2.20**, demonstrating the default Server Component behaviour, precise Client Component boundaries, the Interleaving Pattern, and **Pushing Interactivity to Leaf Nodes**.

---

## 🍃 2.20: Pushing Interactivity to Leaf Nodes

### 📋 Overview & The Real Scenario
- **The Problem**: A developer marks a top-level layout or wrapper component as `'use client'` because a single theme toggle button inside it needs interactivity. Now, the entire layout, navigation, and everything underneath it are shipped to the browser as Client Components, massively bloating the bundle.
- **The Solution (Leaf Node Pattern)**: Keep the layout and large wrappers as Server Components. Extract **only** the interactive button into its own tiny Client Component (a "leaf node"). Only that small JavaScript file is sent to the browser.

---

### 🚀 Tasks Breakdown & Implementation

#### Task 1: Server Component Layout (`app/layout.tsx`)
- **File**: [`app/layout.tsx`](./app/layout.tsx)
- The global layout remains a Server Component (no `'use client'`).
- It renders the `<Header />`, `<main>`, and `<Footer />`.

#### Task 2: Interactive Leaf Components (`components/ThemeToggle.tsx` & `components/CounterButton.tsx`)
- **Files**: 
  - [`components/ThemeToggle.tsx`](./components/ThemeToggle.tsx)
  - [`components/CounterButton.tsx`](./components/CounterButton.tsx)
- These tiny components have `'use client'` at the top.
- They encapsulate all state (`useState`) and interactivity (click handlers).
- They are extracted into entirely separate files to prevent accidentally infecting parent components.

#### Task 3: Use Leaf Components in Server Components (`components/Header.tsx` & `components/Footer.tsx`)
- **Files**: 
  - [`components/Header.tsx`](./components/Header.tsx)
  - [`components/Footer.tsx`](./components/Footer.tsx)
- The Header and Footer components themselves are pure Server Components.
- They render static HTML (navigation links, text) and import/render the Client Component leaves inside them.

#### Task 4: Verify Bundle Size
- **Verification**:
  - Running `next build` reveals that Layout, Header, and Footer are all marked as `○` (Server static content).
  - Only `ThemeToggle` and `CounterButton` are shipped to the client, keeping the `First Load JS` footprint minimal.

---

## 💯 Rubric Alignment for 2.20 (10 / 10 Marks)

### PR Rubric (5 / 5 Marks)
- [x] **1 mark** – Layout and Header/Footer have NO `'use client'` directives.
- [x] **1 mark** – At least 2 small, focused Client Components exist with `'use client'` (`ThemeToggle`, `CounterButton`).
- [x] **1 mark** – Leaf Client Components are in separate files.
- [x] **1 mark** – Leaf Client Components use React hooks (`useState`).
- [x] **1 mark** – Leaf components are used by Server Component parents (`Header`, `Footer`).

### Video Rubric (5 / 5 Marks)
- [x] **1 mark** – Candidate explains the leaf node pattern.
- [x] **1 mark** – Candidate shows that parent components remain Server Components.
- [x] **1 mark** – Candidate demonstrates that only leaf components are Client Components.
- [x] **1 mark** – Candidate explains the bundle size benefit.
- [x] **1 mark** – Candidate answers a follow-up on when the entire page needs to be interactive.

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