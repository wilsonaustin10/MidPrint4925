# Frontend Operator

A Next.js web application that establishes a basic visual layout structure for hosting a VNC viewer and chat interface.

## Project Overview

This application creates a two-column layout with the following structure:
- Left panel (25% width): Will eventually contain the chat interface
- Right panel (75% width): Will eventually contain the VNC viewer

## Component Structure

- **Layout**: The main container component that defines the overall structure. Uses CSS modules to create a two-column layout with the specified proportions.
  - Located in `src/components/Layout.tsx`
  - Uses CSS from `src/components/Layout.module.css`

- **LeftPanel**: Component for the narrower left side of the layout (25% width).
  - Located in `src/components/LeftPanel.tsx`
  - Currently displays placeholder content for the chat interface
  - Has a light gray background for visual distinction during development

- **RightPanel**: Component for the wider right side of the layout (75% width).
  - Located in `src/components/RightPanel.tsx`
  - Currently displays placeholder content for the VNC viewer
  - Has a light blue background for visual distinction during development

## Running the Application

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the two-panel layout.

## Future Integration Points

### Chat Interface (Left Panel)
The left panel is designed to host the chat interface components:
- Chat history/messages display
- Input area for new messages
- Any chat-related controls or settings

To integrate the chat interface:
1. Modify `LeftPanel.tsx` to include the chat components
2. Pass chat-related props through the Layout component to the LeftPanel

### VNC Viewer (Right Panel)
The right panel is designed to host the VNC viewer component:
1. Modify `RightPanel.tsx` to include the VNC viewer library/component
2. Handle VNC connection parameters and state management
3. Pass VNC-related props through the Layout component to the RightPanel

## Responsive Design

While basic responsiveness is implemented, future enhancements could include:
- Media queries for better handling of smaller screens
- Vertical stacking of panels on mobile devices
- Collapsible panels for limited screen space

## Browser Compatibility

The application has been tested on major browsers to ensure consistent rendering and behavior:
- Chrome
- Firefox
- Safari
- Edge

Detailed browser compatibility testing information can be found in the [Browser Compatibility Documentation](./docs/browser-compatibility.md).

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- CSS Modules - For component-specific styling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
