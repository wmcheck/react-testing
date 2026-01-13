# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Правила именования веток
🔹 feature/    — для новой функциональности
   feature/add-search
   feature/user-profile

🔹 bugfix/     — для исправления багов
   bugfix/fix-login-error
   bugfix/header-overlap

🔹 hotfix/     — срочные исправления
   hotfix/critical-security

🔹 release/    — для подготовки релиза
   release/v1.2.0

🔹 docs/       — для документации
   docs/update-readme


Сценарий 1: Создать ветку для новой фичи

# Начинаем с чистого main
git checkout main
git pull origin main

# Создаем ветку
git checkout -b feature/user-authentication

# Работаем...
git add .
git commit -m "Add authentication logic"
git push -u origin feature/user-authentication