// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
      ],
    fontFamily: {
        Minecraft: ['var(--font-minecraft)', 'monospace']
    },
    theme: {
        extend: {
          fontFamily: {
            minecraft: ['var(--font-minecraft)', 'monospace'],
          },
        },
      },
    plugins: [],
  };
  