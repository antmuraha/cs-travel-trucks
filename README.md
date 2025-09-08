# CS Travel Trucks

Modern React application for a camper rental catalog, featuring a clean UI, fast performance, and a minimal dependency
footprint. This project is ideal as a quick start template for new React/Vite projects.

## 🌐 Live Demo

- **App:** [https://cs-travel-trucks-black.vercel.app/](https://cs-travel-trucks-black.vercel.app/)
- **Storybook:** [https://antmuraha.github.io/cs-travel-trucks/](https://antmuraha.github.io/cs-travel-trucks/)

## 📲 Install as a PWA

This app supports installation as a Progressive Web App (PWA) on supported browsers and devices. You can add it to your
home screen for a native app-like experience, including offline support for static assets and fast startup.

**How to install:**

- On desktop Chrome/Edge: Click the install icon in the address bar or use the browser menu.
- On mobile: Use the browser's "Add to Home Screen" option from the share menu.

---

## 🚀 Key Features

- **Catalog & Details**: Browse, search, and view detailed information about campers.
- **Booking Form**: Submit booking requests with validation with Formik/yup.
- **Favorites**: Mark and manage favorite items (local state).
- **Custom Web Components**: Includes animated UI elements using the
  [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
- **View Transitions**: Smooth page transitions using the
  [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) (with graceful
  fallback).
- **Modern Routing**: Uses React Router for SPA navigation.
- **API Integration**: Fetches data from a mock API via a proxy (supports local and cloud deployment).
- **Responsive & Accessible**: Mobile-friendly, keyboard-accessible, and supports dark mode.
- **Minimal Dependencies**: Only essential libraries are used for forms, state, and build tooling.

## �️ Technologies & Modern Browser APIs

- **React 19+** with hooks and functional components
- **Vite** for fast development and builds
- **Redux Toolkit** for state management
- **Formik** and **Yup** for forms and validation
- **CSS Modules** for scoped styling
- **Web Animations API** for custom element animations
- **View Transitions API** for seamless navigation effects
- **Fetch API** and **FormData** for network and form handling

## ⚡ Quick Start & Minimalism

This project is designed as a robust starting point for modern web apps:

- **Minimal dependencies**: No UI frameworks, only essential libraries
- **Ready-to-use**: Includes proxy setup for API, custom Vite plugins, and Storybook integration
- **Easy to extend**: Clean, modular codebase for rapid prototyping

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 22.12 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/antmuraha/cs-travel-trucks
cd cs-travel-trucks
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build
- `pnpm storybook` - Start Storybook for UI component development
- `pnpm build-storybook` - Build Storybook static site
- `pnpm preview-storybook` - Preview the built Storybook locally

## 📚 Storybook

This project includes [Storybook](https://storybook.js.org/) for developing and testing UI components in isolation.

- Run `pnpm storybook` to start the Storybook server at [http://localhost:6006](http://localhost:6006)
- Run `pnpm build-storybook` to generate a static Storybook site in the `storybook-static` directory
- Run `pnpm preview-storybook` to preview the static build locally

Storybook helps you visualize, test, and document components independently from the main app, making UI development
faster and more reliable.

## 🎨 Styling

The application uses CSS Modules for component-scoped styling, ensuring:

- No style conflicts between components
- Maintainable and organized CSS
- Clean, modern user interface

## 🤝 Contributing

This is a test project for the GoIT React course. If you're also a student working on similar exercises, feel free to
use this as a reference, but make sure to understand the concepts and implement your own solution.

## 📄 License

This project is created for educational purposes as part of the GoIT React course curriculum.
