/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#01473A",
          secondary: "#51BA7C",
          bg: "#E9FFF7",
          border: "#DCEFE8",
          success: "#51BA7C",
        },
        textPrimary: "#1A1A1A",
        textSecondary: "#666666",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(1, 71, 58, 0.08), 0 1px 2px rgba(1, 71, 58, 0.04)",
        "card-hover": "0 12px 32px rgba(1, 71, 58, 0.12), 0 2px 4px rgba(1, 71, 58, 0.06)",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
