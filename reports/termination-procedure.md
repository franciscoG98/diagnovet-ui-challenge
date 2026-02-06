# Revised DiagnoVET Project Completion Procedure

**Status**: Updated based on User Feedback Language Target: English (Strict) Role Division:

- **Agent**: Code cleanliness, structure, placeholders for mocks, UI polish, English translation.
- **User**: Sourcing images, populating final mock data (content), Final Deployment & Video.

## Agent Learnings & Context

1. **Workflow Focus**: We are prioritizing the "Diagnostic Results" flow (based on files present like `reports/[reportId])`.
2. **Asset Management**: The user is responsible for the actual content of mocks (images, realistic values). I must ensure the code is ready to receive them (interfaces, clear locations, comments).
3. **Localization**: The codebase needs to be unified to English. Currently, it seems mixed (Spanish files/comments detected).
4. **Submission**: The User handles the final "shipping" (Vercel, Video). My job is to give them a "ready-to-ship" codebase.

## Step 1: Technical Standards & English Unification
**Goal**: Establish a clean, English-only baseline. **Actions**:

- **Rename & Refactor**: Fix `NAMING-DIR-001` (folders to kebab-case).
- **Language Sweep**: Rename variables/functions/files from Spanish to English (e.g., `alojamiento` -> `accommodation`, `franja_horaria` -> `time_slot`).
- **UI Text**: Ensure all hardcoded UI text is in English.
- **Tooling**: Configure Prettier & Linting as requested.

## Step 2: The Core Feature (Diagnostic Results) & Mock Structure
**Goal**: Ensure the main interaction works perfectly with placeholder data, ready for User content. **Actions**:

- **Define Interfaces**: Create strict TS interfaces for `Patient`, `LabResult`, `ScanImage`.
- **Mock Placeholders**: Create a `lib/mocks/data.ts` (or similar) file.
  - *Action*: I will generate the structure with empty strings/placeholder URLs.
  - *Comment*: I will add `// TODO: USER_ACTION - Replace with real image URL comments.`
- **Data Binding**: Ensure components (Tables, Cards) read correctly from these mocks so the User only needs to update the JSON/TS file to see changes.

## Step 3: UI/UX Polish & "Delight"
**Goal**: High-end visual feel. **Actions**:

- **Visual Hierarchy**: Enhance the "Results" table. Critical values must pop.
- **States**: Implement Skeleton loading states and proper Empty states for lists.
- **Delight**: Add hover effects, smooth transitions on open/close of details.
- **Consistency**: Verify font sizes and spacing match the "Premium" aesthetic.

## Step 4: Documentation (The "Why")
**Goal**: Prepare the intellectual defense of the project. **Actions**:

- **Draft README**: Write the "Why", "Solution", and "Quality Bar" sections in **English**.
- **Context**: Explain why we chose specific UI improvements (e.g., "Scanning speed" over "Pagination").

## Step 5: Submission Checklist (User Task List)
**Goal**: Final steps for the User to execute. **ToDo List for User**:

- **Fill Mocks**: Replace placeholders in `ib/mocks` with realistic data and images.
- **Final Manual Test**: Walk through the user flow one last time.
- **Deploy**: Push to GitHub & Vercel. Verify public URL.
- **Record Demo**: Record the 5-min defense video.
- **Verify Links**: Check Repo URL and LinkedIn link in README.