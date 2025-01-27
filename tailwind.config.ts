import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        topBoxShadow: "0 -4px 10px rgba(255, 255, 255, 0.3)",
      },
      borderColor: {
        top: "#333333",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        taskButton: "#1E6F9F",
        backgroundDark: "#1A1A1A",
        completedTasks: "#8284FA",
        allTasks: "#4EA8DE",
        counterText: "#333333",
        emptyText: "#808080",
        checkBox: "#4EA8DE",
        taskDark: "#262626",
        taskText: "#F2F2F2",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-black-500",
  ],
} satisfies Config;
