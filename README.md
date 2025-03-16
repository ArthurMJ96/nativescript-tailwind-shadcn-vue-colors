This plugin helps you integrate shadcn-vue classes into your Tailwind CSS setup.

```js
colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  ...
```

Bonus: Contains an optional plugin to add some handy NS responsive modifiers:

```js
addVariant("l", ".ns-light &"); // l:border
addVariant("d", ".ns-dark &"); // d:border-2
addVariant("ios", ".ns-ios &"); // ios:py-10
addVariant("android", ".ns-android &"); // android:border-none
addVariant("tablet", ".ns-tablet &"); // tablet:w-48
```

# Usage

### Install

```
npm i @amj7/nativescript-tailwind-shadcn-vue-colors
```

### Setup in `tailwind.config.js`

<details>
  <summary>For fast drop-in:</summary>
  In your `tailwind.config.js`:

```js
const { theme, plugins } =
  require("@amj7/nativescript-tailwind-shadcn-vue-colors")(); // <- it's a function!

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,xml,html,vue,svelte,ts,tsx}"],
  darkMode: ["class", ".ns-dark"],
  theme, // <-- Add theme
  plugins, // <-- (Optional) Add responsive modifiers
  corePlugins: {
    preflight: false,
  },
};
```

</details>

<details>
  <summary>Mix in with your stuff:</summary>
In your `tailwind.config.js`:

```js
const { theme, plugins } =
  require("@amj7/nativescript-tailwind-shadcn-vue-colors")();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,xml,html,vue,svelte,ts,tsx}"],
  darkMode: ["class", ".ns-dark"],
  theme: {
    extend: {
      ...theme.extend, // Method 1: Add theme.extend

      // Method 2: add container, colors and borderRadius individually
      container: theme.extend.container,
      colors: theme.extend.colors,
      borderRadius: theme.extend.borderRadius,
    },
  },
  plugins: [
    ...plugins, // <-- (Optional) Add responsive modifiers
    yourPluginHere,
  ],
  corePlugins: {
    preflight: false,
  },
};
```

</details>

### Add theme to your `app.css`

Included theme files:
`zinc` ,`rose` ,`blue` ,`green` ,`orange` ,`red` ,`slate` ,`stone` ,`gray` ,`neutral` ,`yellow` ,`violet`

```css
@import "@amj7/nativescript-tailwind-shadcn-vue-colors/themes/zinc.css"; /* THIS */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Themes

The included themes (CSS variable preset files) are taken from [Theming - shadcn-vue](https://www.shadcn-vue.com/themes.html) with a border radius of 0.5.  
Minor modifications include adding base definitions for `Page` and `ActionBar` (see `themes/_base.css`).

You can create your own theme by using one of the provided themes as a template (see `themes/zinc.css`).  
Alternatively, use `themes/_template.css` if you want to copy and paste a different variant from [shadcn-vue](https://www.shadcn-vue.com/themes.html).

<details>
  <summary>Example template</summary>

```css
@import "@amj7/nativescript-tailwind-shadcn-vue-colors/themes/_base.css";

.ns-root,
.ns-modal {
  /* :root content here */
}

.ns-root.ns-dark,
.ns-modal.ns-dark {
  /* .dark content here */
}
```

</details>

# Bonus

### Example usage with `@nativescript/theme-switcher`

Install `theme-switcher` and/or follow [@nativescript/theme-switcher](https://github.com/NativeScript/plugins/tree/main/packages/theme-switcher) setup guide

```sh
npm install @nativescript/theme-switcher
```

Call this function in the app's `app.ts` or `main.ts` file, before the app starts.

```ts
import { initThemes } from "@nativescript/theme-switcher";

initThemes({
  default: () => import(`theme-loader!@amj7/nativescript-tailwind-shadcn-vue-colors/themes/zinc.css`),
  green: () => import(`theme-loader!@amj7/nativescript-tailwind-shadcn-vue-colors/themes/green.css`),
  blue: () => import(`theme-loader!@amj7/nativescript-tailwind-shadcn-vue-colors/themes/blue.css`),

  // custom: () => import('theme-loader!./themes/example.css'),
})
```

Example usage:

```ts
import { switchTheme } from "@nativescript/theme-switcher";

async function onTap() {
  const res = await action("Select theme", "Cancel", [
    "default",
    "green",
    "blue",
  ]);

  if (res && res !== "Cancel") {
    switchTheme(res);
  }
}
```
