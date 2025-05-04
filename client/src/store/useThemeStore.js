//File: frontend/src/store/useThemeStore.js
import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Load initial theme from localStorage or default to 'light'
  const storedTheme = localStorage.getItem("theme") || "light";

  return {
    theme: storedTheme,

    setTheme: (newTheme) => {
      localStorage.setItem("theme", newTheme);
      // Also update HTML attribute immediately (optional, but helpful)
      document.documentElement.setAttribute("data-theme", newTheme);

      set({ theme: newTheme });
    },
  };
});
