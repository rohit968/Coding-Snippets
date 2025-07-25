// 📌 Topic: Custom Hook — useLocalStorage
// 📖 Description: A reusable hook that syncs state with localStorage for persistent data across page reloads.
// 💡 Output: Works like useState but keeps data stored in localStorage.

import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
