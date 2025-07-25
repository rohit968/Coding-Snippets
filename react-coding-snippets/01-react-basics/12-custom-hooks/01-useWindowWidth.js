// 📌 Topic: Custom Hook — useWindowWidth
// 📖 Description: A custom hook that returns the current window width, updating it on resize events.
// 💡 Output: Any component using this hook will re-render with updated width.

import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
