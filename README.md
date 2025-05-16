# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






### project Starter code:

    npm create vite@latest
    ./
    React
    JavaScript
    Npm install
    Npm run dev

### Install Tailwind CSS and daisyUI

    npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest

### vite.config.js

    import { defineConfig } from 'vite';
    import tailwindcss from '@tailwindcss/vite';

    export default defineConfig({
    plugins: [
        tailwindcss()
    ],
    });

### install routing library

    npm i react-router-dom

doc link: https://reactrouter.com/start/declarative/installation


### install react-hook-form

    npm install react-hook-form

### install hookform resolvers
    
    npm i @hookform/resolvers

- Allows you to use any external validation library such as Yup, Zod, Joi, Vest, Ajv and many others. 

### install zod

    npm i zod

- Zod is a TypeScript-first schema declaration and validation library.

### install lucide-react

    npm i lucide-react

-  open-source icon library



### install axios and zustand

    npm i axios zustand

### install react-hot-toast

    npm i react-hot-toast


### install monaco-editor/react

    npm i @monaco-editor/react

- Monaco Editor is the code editor that powers VS Code. 




