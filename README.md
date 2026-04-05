# SaaS System Admin Dashboard

A clean, production-ready admin dashboard built with React and Next.js for managing a multi-tenant SaaS platform.

## Technologies Used

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State Management:** Zustand (with persist middleware)
- **API Client:** Axios
- **Icons:** Lucide React
- **UI Utilities:** clsx, tailwind-merge

## Project Structure

```text
src/
├── app/                  # Next.js App Router pages
│   ├── ai-config/        # AI settings configuration
│   ├── analytics/        # System analytics
│   ├── dashboard/        # Main overview dashboard
│   ├── login/            # Authentication page
│   ├── restaurants/      # Restaurant application management
│   └── users/            # System user management
├── components/           # Reusable UI components
│   ├── form/             # Form components (e.g. LoginForm)
│   ├── layout/           # Dashboard layout, Sidebar, Header
│   ├── table/            # Reusable DataTable component
│   └── ui/               # Base UI elements (Button, Input, Badge, Card)
├── services/             # API integration
│   └── api.ts            # Axios instance with interceptors
├── store/                # Zustand global state
│   ├── admin.ts          # State for admin data (restaurants, etc.)
│   └── auth.ts           # Authentication state & JWT storage
├── types/                # TypeScript interfaces/types
└── utils/                # Utility functions (e.g. cn for tailwind)
```

## Features Implemented

- **Authentication:** Login form with mock JWT handling, redirecting unauthenticated users from protected routes.
- **Persistent State:** User session is persisted in local storage via Zustand.
- **API Setup:** Axios configured with request interceptors to automatically attach the JWT token. Responses automatically clear state on 401 Unauthorized.
- **Dashboard Overview:** Displays basic metrics and stats using reusable card components.
- **Restaurant Management:** A feature-rich, reusable `DataTable` component displaying restaurant applications with the ability to approve or reject pending applications.
- **Clean UI:** Styled entirely with TailwindCSS focusing on a simple, desktop-first, and professional admin aesthetic.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note on Mock Data:**
The `login` functionality and `restaurant` data currently use `setTimeout` and mock responses to simulate network latency.

- **Login Credentials:**
  - Email: `admin@platform.com`
  - Password: `password`
