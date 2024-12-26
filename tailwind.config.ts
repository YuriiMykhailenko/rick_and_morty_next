import type { Config } from 'tailwindcss';

const generateSpacing = (max: number): { [key: string]: string } => {
  const spacing: { [key: string]: string } = {};
  for (let i = 1; i <= max; i++) {
    spacing[i] = `${i}px`;
  }
  return spacing;
};

export default {
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: generateSpacing(1500),
    },
  },
  plugins: [],
} satisfies Config;
