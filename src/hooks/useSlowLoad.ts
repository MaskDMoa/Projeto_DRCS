import { useState, useEffect } from 'react';

export function useSlowLoad(minDelay = 300, maxDelay = 1500) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    const updateProgress = () => {
      const bump = Math.random() * 25 + 5;
      currentProgress += bump;
      
      if (currentProgress >= 100) {
        setProgress(100);
        setTimeout(() => setLoading(false), 500);
      } else {
        setProgress(Math.floor(currentProgress));
        const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        setTimeout(updateProgress, nextDelay);
      }
    };

    const timer = setTimeout(updateProgress, minDelay);
    return () => clearTimeout(timer);
  }, [minDelay, maxDelay]);

  return { loading, progress };
}
