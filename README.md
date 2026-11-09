# COLLEXA – Know Your College. Own Your Future.
React + TypeScript + Tailwind CSS + React Router + Lucide. Prototype using **localStorage** and **DEMO data**.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```
Requires Node 18+.

## Demo logins
- Sign up as Aspiring Student / Current Student / Alumni (role-based dashboards).
- Admin: `admin@collexa.demo` / `admin123` (demo only).

## Structure
`src/data/db.ts` (single demo dataset: fictional colleges, seniors, scholarships) · `src/context/Store.tsx` (auth, shortlist, compare, chats, sessions – localStorage) · `src/components/ui.tsx` (Navbar, Sidebar, Footer, CollegeCard, SeniorCard…) · `src/pages/*`.

## Important limitations (honest notes)
- All colleges, fees, placements, reviews, seniors and scholarships are **fictional demo data**. No real official links are included. Replace with verified data.
- Auth is a browser-only demo (plain-text passwords in localStorage). **Do not use for real users.** Use Supabase Auth + Row Level Security for production (not wired in yet; keep keys in `.env`, never in code).
- Messaging, senior acceptance, video counselling and the "meeting" are simulated (buttons labelled Demo/Simulated).
- Ask COLLEXA is a rule-based demo over the dataset, not a live AI.
- Video uploads store metadata only. Admin college/scholarship editing is marked Coming Soon. State is per-browser, not per-user.
- Not yet implemented: Supabase, per-user data separation, real images, full course detail pages.
