# DiagnoVET UI Challenge

> A polished UI prototype for reducing cognitive load and friction in veterinary diagnostic workflows.

<!-- @todo: USER_ACTION - Replace video defense URL -->

🔗 **[Live Demo](https://diagnovet-ui-challenge.vercel.app/)** | 📹 **[Video Defense](https://youtu.be/jmD22VU0rgw)**

---

## 📋 Table of Contents

- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Design Decisions](#design-decisions)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [What's Included](#whats-included)

---

## 🔍 The Problem

Veterinary diagnostic platforms often suffer from:

1. **High Cognitive Load**: Dense interfaces with too much information competing for attention
2. **Unclear Status Visibility**: Difficulty quickly identifying which reports need action vs. are complete
3. **Friction in Common Flows**: Too many clicks/steps to accomplish routine tasks
4. **Missing Visual Hierarchy**: No clear distinction between critical and informational data
5. **Incomplete States**: Loading and empty states often overlooked, creating jarring UX

### Observed Pain Points

After analyzing typical veterinary workflows, the following friction areas were identified:

- **Reports Table**: No visual distinction between statuses; hard to scan quickly
- **Diagnostic Results**: Dense text without clear hierarchy or actionable elements
- **Form Creation**: Long forms without clear progress or completion indicators
- **Image Review**: Thumbnail navigation lacks clear current-selection indication

---

## 💡 The Solution

This prototype focuses on **Diagnostic Results Visualization** as the primary improvement area, chosen for its:

- **High Impact**: Veterinarians scan this view multiple times per case
- **Moderate Complexity**: Achievable polish within 72h
- **Visible Quick Wins**: Status badges, hover effects, and micro-interactions

### Key Improvements

| Area               | Before            | After                                                    |
| ------------------ | ----------------- | -------------------------------------------------------- |
| **Report Status**  | Plain text labels | Animated badges with color coding + pulse indicator      |
| **Table Rows**     | Static rows       | Interactive hover states, avatar gradients, action menus |
| **Loading States** | None/raw          | Skeleton components that match final layout              |
| **Empty States**   | Blank screens     | Friendly illustrations with CTAs                         |
| **Dashboard**      | Basic stats       | Trend indicators, hover shadows, gradient accents        |

---

## 🎨 Design Decisions

### Why Polish Over Features?

The evaluation criteria prioritize **polish** and **attention to detail** over feature completeness. A beautifully polished subset of functionality demonstrates design sensibility better than a rough complete system.

### Micro-Interactions Matter

Every hover, transition, and animation serves a purpose:

- **Table row hover**: Provides immediate feedback that the row is interactive
- **Status badge pulse**: Draws attention to items requiring action
- **Button rotation on hover**: Adds playfulness while signaling interactivity

### Color Choices

- **Teal (#00B5AD)**: Primary brand color, used for CTAs and focus states
- **Green badges**: Completed/normal status
- **Blue badges**: In progress/active items
- **Gradient avatars**: Adds depth and premium feel without additional assets

### Skeleton Loading Strategy

Skeletons match the exact layout of final content, preventing layout shift and providing spatial predictability during loading.

---

## 🛠 Tech Stack

| Technology                  | Purpose                          |
| --------------------------- | -------------------------------- |
| **Next.js 16** (App Router) | Framework with server components |
| **TypeScript**              | Type safety and better DX        |
| **Tailwind CSS 4**          | Utility-first styling            |
| **Shadcn/UI**               | Headless component primitives    |
| **Lucide React**            | Consistent icon library          |
| **React Hook Form + Zod**   | Form validation                  |
| **ESLint + Prettier**       | Code quality                     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/franciscoG98/diagnovet-ui-challenge.git

# Navigate to project
cd diagnovet-ui-challenge

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

The login is not validated, it is just a placeholder, you can use any email.

### Available Scripts

| Command          | Description               |
| ---------------- | ------------------------- |
| `npm run dev`    | Start development server  |
| `npm run build`  | Create production build   |
| `npm run start`  | Start production server   |
| `npm run lint`   | Run ESLint                |
| `npm run format` | Format code with Prettier |

---

## 📁 Project Structure

```
diagnovet-ui-challenge/
├── app/
│   ├── (app)/              # Main app routes (authenticated)
│   │   ├── analyze/        # New report creation
│   │   ├── dashboard/      # Home dashboard
│   │   ├── reports/        # Reports list & preview
│   │   ├── settings/       # User settings
│   │   └── study/          # Ultrasound study viewer
│   ├── auth/               # Authentication pages
│   ├── onboarding/         # User onboarding flow
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── ui/                 # Base UI components (Shadcn)
│   ├── empty-state.tsx     # Reusable empty states
│   ├── reports-table.tsx   # Enhanced reports table
│   └── stats-card.tsx      # Dashboard stat cards
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── mocks.ts            # Mock data with TODOs
│   └── utils.ts            # Utility functions
└── reports/
    └── termination-procedure.md  # Development progress log
```

---

## ✅ What's Included

### Components

- [x] **Skeleton Loaders**: Table, cards, forms, image grids
- [x] **Empty States**: No reports, no search results, no images, errors
- [x] **Enhanced Table**: Hover effects, animated statuses, action dropdowns
- [x] **Stats Cards**: Trend indicators, sparkline charts
- [x] **Rich Text Editor Mock**: Toolbar with formatting options

### Pages

- [x] **Dashboard**: Welcome banner, KPI cards, quick actions
- [x] **Reports List**: Search, filter, loading states
- [x] **Report Preview**: Editable diagnosis, findings section
- [x] **Ultrasound Study**: Image viewer with thumbnails
- [x] **Settings**: Personal & professional configuration
- [x] **Onboarding**: Multi-step clinic & profile setup
- [x] **Login**: Validated form with loading states

### Global Polish

- [x] Smooth scroll behavior
- [x] Consistent focus rings (teal)
- [x] Selection color theming
- [x] Custom scrollbars
- [x] Antialiased text rendering
- [x] Default transitions on interactive elements

---

## 👤 Author

**Francisco Gonzalez**

- [LinkedIn](https://www.linkedin.com/in/francisco-gonzalez-web-dev/)
- Email: franciscomanuel.gonzalez3@gmail.com

---

## 📄 License

This project was created as part of the DiagnoVET UI Engineer Challenge.
