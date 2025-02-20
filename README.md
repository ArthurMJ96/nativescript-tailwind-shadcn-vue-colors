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
