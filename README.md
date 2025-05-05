# Next.js Comments Demo

A comprehensive demonstration of different comment implementation patterns in Next.js, showcasing Server Actions, React Query, and infinite loading.

## Features

- 🚀 Three different comment implementation patterns:
  - Client-Side Server Action Calls
  - React 19's `useActionState` Hook
  - Server Actions with React Query & Infinite Loading
- ⚡️ Built with Next.js 15 and React 19
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui
- 🔄 Real-time updates and optimistic UI
- ♾️ Infinite scrolling with cursor-based pagination
- 🎭 Error handling and loading states
- 📱 Fully responsive design

## Demo Pages

1. **Client-Side Server Action Calls**
   - Demonstrates proper handling of server actions in client components
   - Shows why React transitions are crucial for server action calls

2. **useActionState Hook**
   - Showcases React 19's new `useActionState` hook
   - Provides a simpler way to handle form state and submissions

3. **Server Actions with React Query**
   - Implements infinite loading with cursor-based pagination
   - Shows best practices for combining server actions with React Query
   - Demonstrates why server actions shouldn't be used for data fetching

## Quick Start

1. Clone and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── comments/
│   │   ├── infinite-loading/    # React Query implementation
│   │   ├── server/
│   │   │   ├── client-side-action/   # Client-side server actions
│   │   │   └── use-action-state/     # useActionState hook demo
│   │   └── comment.tsx         # Shared comment component
│   └── api/
│       └── comments/           # API routes for comments
├── components/
│   └── ui/                    # Shared UI components
├── lib/
│   ├── auth.ts               # Authentication utilities
│   ├── data.ts              # Mock data store
│   ├── db.ts               # Database operations
│   └── utils.ts           # Helper functions
└── providers/
    └── ReactQueryProvider.tsx  # React Query configuration
```

## Key Technologies

- [Next.js 15](https://nextjs.org)
- [React 19](https://react.dev)
- [React Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## Implementation Details

### Client-Side Server Action Calls

- Uses React's `useTransition` for optimal loading states
- Demonstrates proper error handling
- Shows how to update UI optimistically

### useActionState Hook

- Leverages React 19's new form handling capabilities
- Provides a more streamlined approach to form state
- Automatic loading and error state management

### React Query Implementation

- Implements infinite scrolling with cursor-based pagination
- Optimistic updates for immediate feedback
- Proper cache management and invalidation
- Background data synchronization

## Best Practices Demonstrated

1. **Error Handling**
   - Comprehensive error states
   - User-friendly error messages
   - Graceful fallbacks

2. **Loading States**
   - Skeleton loaders
   - Loading indicators
   - Disabled states during operations

3. **Performance**
   - Optimistic updates
   - Efficient data fetching
   - Proper caching strategies

4. **User Experience**
   - Immediate feedback
   - Smooth transitions
   - Responsive design
