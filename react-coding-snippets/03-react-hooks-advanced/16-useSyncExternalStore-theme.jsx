// 15-useSyncExternalStore-theme.jsx
// ✅ Demonstrates how to use `useSyncExternalStore` to sync with external sources like a theme store

import React, { useState, useEffect, useSyncExternalStore } from "react";

// A basic external theme store
const themeStore = {
  currentTheme: "light",
  listeners: new Set(),

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  getSnapshot() {
    return this.currentTheme;
  },

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.listeners.forEach((listener) => listener());
  },
};

// Custom hook using useSyncExternalStore
function useTheme() {
  return useSyncExternalStore(
    themeStore.subscribe.bind(themeStore),
    themeStore.getSnapshot.bind(themeStore)
  );
}

export default function ThemeSwitcher() {
  const theme = useTheme();

  const handleToggle = () => {
    themeStore.toggleTheme();
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        background: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h2>useSyncExternalStore Example</h2>
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
}
