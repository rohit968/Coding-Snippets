// 09-customHook-useWindowWidth.js
// Topic: useWindowWidth (custom hook)
// Description:
// Custom hook to track and respond to window width changes (responsive UIs)

import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;


// 💡 Usage Example:
const width = useWindowWidth();
console.log(width > 768 ? 'Desktop' : 'Mobile');
