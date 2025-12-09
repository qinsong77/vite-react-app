# Vite React Boilerplate

This is a [Vite](https://vitejs.dev/) & [React](https://react.dev/) Boilerplate project base on [`pnpm create vite`](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

## Features

- [x] Vite Latest
- [x] React ~~18.3.1~~ => 19
- [x] Typescript
- [x] pnpm
- [x] Test
  - [x] [vitest](https://vitest.dev/)
  - [x] [react testing library](https://testing-library.com/)
- [x] Code style/lint
  - [x] husky
  - [x] lint-stage
  - [x] eslint v9
  - [x] prettier
    - use [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
  - [x] commitlint
- [x] mock serve
  - [msw](https://mswjs.io/docs) for mock server and test, refer: [Stop mocking fetch](https://kentcdodds.com/blog/stop-mocking-fetch)
- [x] [Tailwindcss](https://tailwindcss.com/)
- [x] UI Library: [shadcn/ui](https://ui.shadcn.com/)
- [x] [React Router](https://reactrouter.com/en/main) => [TanStack Router](https://tanstack.com/router/v1) ?
- [ ] Zustand
- [x] Generate Api with type: [orval](https://orval.dev/)
  - **how to assert the response in UI due to the arval mock msw is random base on fake.js**
- [ ] axios + React Query?
- [ ] e2e test: playwright
  - [midscenejs](https://midscenejs.com/zh/docs/getting-started/introduction.html) using LLM to help testing.
- [ ] Docker
- [ ] Github actions/CI

## TODO

- after gpr, run pnpm install automatically
- Migrate eslint + prettier to https://biomejs.dev/guides/getting-started/ ?
- using `import { userEvent } from '@vitest/browser/context'` https://cn.vitest.dev/guide/browser/examples.html#examples
- add `eslint-plugin-testing-library`, add `eslint-plugin-jest-dom`, `@vitest/eslint-plugin`

## Know issues

## Project Guidelines

refer this project: [bulletproof-react: React Vite Application](https://github.com/qinsong77/bulletproof-react/tree/master/apps/react-vite)

### test strategy

- [react testing library Example](https://testing-library.com/docs/react-testing-library/example-intro/)
- [单元测试最佳实践与前端TDD](https://ethan.thoughtworkers.me/#/post/2023-12-10-react-unit-testing-best-practices-v2)

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

## Learn More

TBD

## Reference

- https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts
- https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react-streaming-ts
- https://github.com/sozonome/vite-react-tailwind-starter
- https://github.com/alan2207/bulletproof-react/tree/master/apps/react-vite
- [React 项目文件分层原则](https://mp.weixin.qq.com/s/INNwbrax3NHiC5fganeFlQ)

### SSR

- https://react.dev/reference/react-dom/server/renderToReadableStream
- https://reactrouter.com/en/main/guides/ssr

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
