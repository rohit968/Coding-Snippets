// 08-customHook-useLocalStorage.js
// Topic: useLocalStorage (custom hook)
// Description:
// Creates a reusable hook to store and retrieve data from localStorage with fallback and sync.

import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Read value from localStorage or fallback to initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const localItem = window.localStorage.getItem(key);
      return localItem ? JSON.parse(localItem) : initialValue;
    } catch (error) {
      console.warn('Error reading localStorage key:', key);
      return initialValue;
    }
  });

  // Update localStorage when storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn('Error setting localStorage key:', key);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;


// 💡 Usage Example:
const [theme, setTheme] = useLocalStorage('theme', 'light');
