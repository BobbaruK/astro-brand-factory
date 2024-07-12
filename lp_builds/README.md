# Astro with React, Typescript, Tailwind and Shadcn

### 1. Create Project

Create a new Astro project: `npm create astro@latest`

### 2. Configure Astro project

- Where should we create your new project? **./lp-slug**
- How would you like to start your new project? **Empty**
- Install dependencies? **Yes**
- Do you plan to write TypeScript? **Yes**
- How strict should TypeScript be? **Strict**
- Initialize a new git repository? **No**

### 3. Add React

Install React using the Astro CLI: `npx astro add react`

Answer `Yes` to all the question prompted by the CLI when installing React.

### 4. Add Tailwind

Astro CLI: `npx astro add tailwind`

Answer `Yes` to all the question prompted by the CLI when installing Tailwind CSS.

### 4 a. Install Prettier Plugin for Astro and Tailwind

`npm i --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss`

### 4 b. Create `.prettierrc.mjs` in the root of the project

```javascript
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```

### 4 c. (optional) Install the VS Code Prettier extension

Do this if you didn't did this by now

Install the [VS Code Prettier extension](https://www.example.com) and add the following settings to your VS Code configuration:

```json
{
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 5. Edit tsconfig.json file

Add the following code to the tsconfig.json file to resolve paths:

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}
```

### 6. Copy files and add sass

- Add sass `npm add -D sass`
- Copy folders from `./globals/copy/src/` to `./lps/LP_SLUG/src/`.

### 7. Add Shadcn UI

Run the shadcn-ui init command to setup your project: `npx shadcn-ui@latest init`

### 8. Configure Shadcn's components.json

- Would you like to use TypeScript (recommended)? **yes**
- Which style would you like to use? › **Default**
- Which color would you like to use as base color? › **Slate**
- Where is your global CSS file? › **./src/globals-v1.scss**
- Do you want to use CSS variables for colors? › **yes**
- Where is your tailwind.config.js located? › **tailwind.config.mjs**
- Configure the import alias for components: › **@/components**
- Configure the import alias for utils: › **@/lib/utils**
- Are you using React Server Components? › **no**
- Write configuration to components.json. Proceed? **Yes**

### 9. Update astro config

To prevent serving the Tailwind base styles twice, we need to tell Astro not to apply the base styles, since we already include them in our own globals.css file. To do this, set the applyBaseStyles config option for the tailwind plugin in `astro.config.mjs` to false.

```javascript
export default defineConfig({
  base: "/lp/LP_NAME/LP_LANG/",
  trailingSlash: "ignore",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
```

### 10. Update tailwind.config.mjs

When running `npx shadcn-ui@latest init`, your tailwind config for content will be overwritten. To fix this, change the `module.exports` to `export default` and the `content` section with the code below to your `tailwind.config.mjs` file:

```javascript
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // ...
};
```

### 11. Add Shadcn components

Add these components _(needed for the form)_ to your project.

`npx shadcn-ui@latest add button input label`

You can then import them like this:

```Astro
---
import { Button } from "@/components/ui/button"
---

<html lang="en">
	<head>
		<title>Astro</title>
	</head>
	<body>
		<Button variant="destructive">Hello World</Button>
	</body>
</html>
```

### 12. VS Code Reload Window

`CTRL + SHIFT + P` > `Developer: Reload Window`

For some reason new prettier config does not kick in unless you reload the VS Code window. Maybe I will investigate later... dunno

### 13. Happy coding!

`npm run dev` - development

`npm run build` - build

`npm run preview` - preview build before deploy

## Vanilla Astro (Legacy version)

Follow the steps

1. in lps folder -> `npm create astro@latest`
2. add sass -> `npm add -D sass`
3. copy _astro.config.mjs_ to your root project
4. copy folders from `./globals/copy/src legacy/` to `./lps/LP_NAME/src/`
5. happy coding
