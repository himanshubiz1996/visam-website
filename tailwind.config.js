/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Superlist" Palette
        brand: {
          bg: '#F3F4F6',         // Lightest Gray (Page Background)
          surface: '#FFFFFF',    // Pure White (Cards)
          text: '#0F172A',       // Deep Navy/Black (Primary Text)
          muted: '#64748B',      // Slate Gray (Secondary Text)
          border: '#E2E8F0',     // Subtle Border
        },
        accent: {
          primary: '#2563EB',    // Royal Blue (Action Color) - Professional
          secondary: '#8B5CF6',  // Soft Purple (Highlights)
        }
      },
      fontFamily: {
        // Superlist uses very geometric fonts
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',           // Super rounded corners
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)', // Invisible Shadow
      },

      // 👇 YAHAN SE ADD KIYA HAI (Animation Logic)
      animation: {
        marquee: 'marquee 25s linear infinite', // Speed yahan se control hoti hai (25s)
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      // 👆 KAAM KHATAM

    },
  },
  plugins: [],
}