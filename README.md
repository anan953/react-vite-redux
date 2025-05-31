# React TypeScript Project Template

A modern React project template with TypeScript, Redux Toolkit, React Router, and more.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🔥 [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- 📦 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- 🛣️ [React Router](https://reactrouter.com/) - Declarative routing for React
- 📡 [Axios](https://axios-http.com/) - Promise based HTTP client
- 🧪 [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/) - Testing utilities
- 💅 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code linting and formatting
- 🐶 [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged) - Git hooks

## Project Structure

```
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Shared components
│   ├── common/      # Common UI components
│   └── layout/      # Layout components
├── features/         # Feature-based modules
│   ├── auth/        # Authentication feature
│   ├── common/      # Common features
│   └── user/        # User management feature
├── hooks/           # Custom React hooks
├── layouts/         # Page layouts
├── lib/             # Third-party library configurations
├── services/        # API services and configurations
├── store/           # Redux store setup
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── __tests__/       # Test files
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
VITE_API_URL=your_api_url_here
```

### Development

Start the development server:

```bash
npm run dev
```

### Building

Build the project for production:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate test coverage:

```bash
npm run test:coverage
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Best Practices

1. **Feature-based Architecture**

   - Organize code by features rather than technical concerns
   - Each feature should be self-contained with its own components, hooks, and utilities

2. **TypeScript**

   - Use TypeScript for all new files
   - Define proper types and interfaces
   - Avoid using `any` type

3. **Testing**

   - Write tests for all new features
   - Maintain a minimum of 80% code coverage
   - Use React Testing Library for component testing

4. **Code Style**

   - Follow ESLint and Prettier configurations
   - Use meaningful variable and function names
   - Write clear comments for complex logic

5. **Git Workflow**
   - Use meaningful commit messages
   - Create feature branches for new features
   - Keep PRs small and focused

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write or update tests
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
