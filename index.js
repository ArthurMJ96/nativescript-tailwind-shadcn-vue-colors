const plugin = require("tailwindcss/plugin");

function createNativeScriptTailwindConfigParts() {
  return {
    theme: {
      extend: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          xl: "calc(var(--radius) + 4)",
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2)",
          sm: "calc(var(--radius) - 4)",
        },
      },
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant("l", ".ns-light &");
        addVariant("d", ".ns-dark &");
        addVariant("ios", ".ns-ios &");
        addVariant("android", ".ns-android &");
        addVariant("tablet", ".ns-tablet &");
      }),
    ],
  };
}

module.exports = createNativeScriptTailwindConfigParts;
