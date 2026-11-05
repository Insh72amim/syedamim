import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;
  const saved = window.localStorage.getItem("isDark");
  if (saved !== null) {
    try {
      return JSON.parse(saved);
    } catch {
      return saved === "true";
    }
  }
  return true; // Default to Midnight Slate Dark theme
};

const syncDomTheme = (isDark) => {
  if (typeof document === "undefined") return;
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
};

export const useThemeStore = create((set) => {
  const initialIsDark = getInitialTheme();
  syncDomTheme(initialIsDark);

  return {
    isDark: initialIsDark,
    setIsDark: (isDark) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("isDark", JSON.stringify(isDark));
      }
      syncDomTheme(isDark);
      set({ isDark });
    },
    toggleTheme: () =>
      set((state) => {
        const next = !state.isDark;
        if (typeof window !== "undefined") {
          window.localStorage.setItem("isDark", JSON.stringify(next));
        }
        syncDomTheme(next);
        return { isDark: next };
      }),
  };
});
