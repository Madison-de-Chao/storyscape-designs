# GitHub Copilot Instructions for Arc Zero

## Project Overview

Arc Zero is an interactive visual novel game built with React and TypeScript. It tells a philosophical narrative inspired by Chinese philosophy and the I-Ching, featuring a branching story system with multiple endings based on player choices. The game includes sophisticated features like a stat system (Arc value, Shadow level), save/load functionality, achievement tracking, a color gallery, and immersive audio design.

**Target Audience:** Players interested in philosophical narratives and choice-driven storytelling.

## Technology Stack

### Core Technologies
- **Framework:** React 18.3.1 with TypeScript 5.8.3
- **Build Tool:** Vite 5.4.19 (with SWC transpiler)
- **Styling:** Tailwind CSS 3.4.17 with shadcn-ui components
- **State Management:** Zustand 5.0.10 with persist middleware
- **Routing:** React Router DOM 6.30.1

### Key Libraries
- **UI Components:** Radix UI primitives (40+ components)
- **Forms:** React Hook Form 7.61.1 with Zod 3.25.76 validation
- **Animation:** Framer Motion 12.27.0
- **Icons:** Lucide React 0.462.0
- **Data Visualization:** Recharts 2.15.4
- **Utilities:** date-fns, html2canvas, sonner (toast notifications)
- **Backend (Optional):** Supabase 2.91.0

### Testing & Development
- **Testing:** Vitest 3.2.4 with React Testing Library 16.0.0
- **Linting:** ESLint 9.32.0 with TypeScript ESLint
- **Package Manager:** npm (with bun.lockb also present)

## Coding Standards

### Component Style
- **ALWAYS use functional components** - never use class components
- **Use default exports** for all components: `export default ComponentName`
- **Component naming:** PascalCase (e.g., `DialogueBox.tsx`, `GameScene.tsx`)
- Use React hooks (useState, useEffect, useCallback, useMemo) for component logic
- Use `forwardRef` for wrapper components and always set `displayName`

### Example Component Pattern
```tsx
import { useState, useCallback } from "react";
import { useGameStore } from "@/stores/gameStore";

const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  const gameAction = useGameStore((state) => state.someAction);
  
  const handleClick = useCallback(() => {
    // Logic here
  }, [dependencies]);

  return (
    <div className="flex items-center justify-center">
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

### Import Conventions
- **Use path alias `@/`** for imports (configured in vite.config.ts)
- Prefer named imports for utilities and hooks
- Example: `import { cn } from "@/lib/utils";`
- Example: `import { useAudio } from "@/hooks/useAudio";`

### TypeScript Standards
- **Define interfaces for all complex data structures**
- Use TypeScript's strict mode features
- Define types for component props explicitly
- Common types: `DialogueNode`, `Choice`, `Chapter`, `SaveSlot`

### Example Type Pattern
```typescript
interface MyComponentProps {
  title: string;
  onAction: (id: string) => void;
  optional?: boolean;
}

const MyComponent = ({ title, onAction, optional = false }: MyComponentProps) => {
  // Component implementation
};
```

### Styling Guidelines
- **Use Tailwind CSS** for all styling - avoid inline styles or CSS modules
- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Follow shadcn-ui patterns for component composition
- Custom animations defined in tailwind.config.ts

### Example Styling Pattern
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes here",
  isActive && "active-state-classes",
  className // Allow prop-based overrides
)}>
```

## Architectural Patterns

### State Management with Zustand
- **Use Zustand store** (`@/stores/gameStore`) for global game state
- **Prefer selector pattern** for accessing state: `useGameStore((state) => state.property)`
- State is automatically persisted to localStorage via persist middleware
- Main store manages: game progress, saves, achievements, dialogue history, arc history

### Example Store Usage
```tsx
import { useGameStore } from "@/stores/gameStore";

const MyComponent = () => {
  // Preferred: Selector pattern
  const arcValue = useGameStore((state) => state.arcValue);
  const makeChoice = useGameStore((state) => state.makeChoice);
  
  // Use the state and actions
  const handleChoice = () => makeChoice(choiceId);
};
```

### Custom Hooks Pattern
- **Create custom hooks** in `/src/hooks/` for reusable logic
- Hook naming: `use` prefix + descriptive name (e.g., `useAudio`, `useTypewriter`)
- Isolate complex logic like audio management, animations, data fetching
- Existing hooks: `useAudio`, `useAchievements`, `useTypewriter`, `usePreloadImages`

### Folder Structure
```
src/
├── components/
│   ├── game/          # Game-specific components (24+ components)
│   ├── ui/            # shadcn-ui primitives (40+ components)
│   └── [shared]       # Shared components (TypewriterText, NavLink)
├── pages/             # Route pages
├── stores/            # Zustand stores
├── hooks/             # Custom React hooks
├── utils/             # Utility functions and configs
├── data/              # Story content organized by chapters
│   ├── yi1/           # Part 1 chapters
│   └── [story files]  # Story definitions
├── integrations/      # Third-party integrations (Supabase)
└── lib/               # Library utilities
```

### Component Organization
- Place game-specific components in `/src/components/game/`
- Place reusable UI primitives in `/src/components/ui/`
- Use shadcn-ui patterns for component composition (compound components)
- Keep story data in `/src/data/` organized by chapter

## Design Patterns to Follow

### Framer Motion for Animations
- Use Framer Motion for page transitions and component animations
- Wrap pages with motion components for smooth transitions
- Example: `<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>`

### Audio Management
- Use the `useAudio` hook for all audio-related functionality
- Audio files referenced from `/public/audio/`
- Support for BGM, SFX, and emotion-based voice effects

### Form Handling
- Use React Hook Form with Zod validation for all forms
- Define Zod schemas for form validation
- Use shadcn-ui form components for consistent UI

### Error Handling
- Display user-facing errors with sonner toast notifications
- Log errors to console for debugging
- Provide meaningful error messages

## Testing Requirements

### Test Setup
- **Test files:** Use `*.test.ts` or `*.test.tsx` naming convention
- **Location:** Place tests near the code they test or in `/src/test/`
- **Framework:** Use Vitest with React Testing Library
- **Commands:** `npm test` (single run), `npm run test:watch` (watch mode)

### Example Test Pattern
```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("ComponentName", () => {
  it("should render correctly", () => {
    render(<ComponentName />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });
});
```

## Security & Best Practices

### Input Validation
- **Always validate user input** using Zod schemas
- Sanitize data before storing in localStorage
- Use TypeScript's type system to catch errors at compile time

### Performance
- Use `useCallback` and `useMemo` to prevent unnecessary re-renders
- Lazy load components with `React.lazy()` for code splitting
- Preload images for game scenes using `usePreloadImages` hook
- Optimize Tailwind CSS with purge configuration

### Accessibility
- Use semantic HTML elements
- Ensure proper ARIA labels for interactive elements
- Maintain keyboard navigation support
- Test with screen readers when adding new UI components

### Code Quality
- Run `npm run lint` before committing changes
- Fix ESLint errors - do not disable rules without good reason
- Keep functions focused and single-purpose
- Write descriptive variable and function names

## Common Pitfalls to Avoid

### Don't:
- ❌ Use class components - always use functional components
- ❌ Use named exports for components - use default exports
- ❌ Directly mutate Zustand state - use provided actions
- ❌ Use inline styles - use Tailwind classes
- ❌ Import from relative paths when `@/` alias is available
- ❌ Create new global state without considering Zustand
- ❌ Add dependencies without checking for existing alternatives
- ❌ Skip TypeScript types - always define interfaces/types

### Do:
- ✅ Use functional components with hooks
- ✅ Use default exports: `export default ComponentName`
- ✅ Use Zustand store with selector pattern
- ✅ Use Tailwind CSS with `cn()` utility
- ✅ Use `@/` path alias for imports
- ✅ Create custom hooks for reusable logic
- ✅ Define TypeScript interfaces for complex data
- ✅ Follow existing patterns in the codebase

## Development Workflow

### Build & Development
- **Dev server:** `npm run dev` - starts Vite dev server
- **Build:** `npm run build` - production build
- **Preview:** `npm run preview` - preview production build
- **Lint:** `npm run lint` - run ESLint
- **Test:** `npm test` - run tests once

### Git Workflow
- Write clear, descriptive commit messages
- Keep commits focused on single changes
- Test changes before committing

## Project-Specific Context

### Story System
- Story content defined in TypeScript files under `/src/data/`
- Each dialogue node has: id, speaker, text, choices, effects
- Branching narrative based on Arc value (0-180) and Shadow level
- Multiple endings determined by player choices

### Save System
- 13 save slots: 10 manual + 3 auto-save
- State persisted to localStorage with key `arc-zero-game-state`
- Save data includes: progress, stats, history, achievements

### Achievement System
- Achievements unlock based on story progress and choices
- Tracked in Zustand store with unlocked/locked state
- Display achievements in dedicated UI components

### Visual Design
- Dark theme with philosophical aesthetic
- Special effects: glitch, glow, zen moments, revelations
- Color gallery system for collecting colors through story

---

**Note:** This is a Lovable.dev project. Changes made via Lovable are automatically committed to this repository.
