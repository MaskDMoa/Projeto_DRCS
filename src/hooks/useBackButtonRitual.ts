import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function useBackButtonRitual(requiredClicks = 5, windowMs = 5000, redirectPath = '/arquivista') {
  const [unlocked, setUnlocked] = useState(false);
  const clicks = useRef<number[]>([]);
  const navigate = useNavigate();
  const setupRef = useRef(false);

  useEffect(() => {
    const padHistory = () => {
      if (!setupRef.current) {
        // Inject history entries to ensure "back" is available
        // Use unique hashes to force Firefox to register distinct states
        for (let i = 0; i < requiredClicks + 2; i++) {
          window.history.pushState({ ritual: i }, "", window.location.pathname + "#r" + i);
        }
        setupRef.current = true;
      }
    };

    // Attempt to pad immediately
    padHistory();

    // Also pad on first user interaction to bypass modern browser restrictions
    // where they ignore pushState if the user hasn't interacted with the page yet.
    window.addEventListener('click', padHistory, { once: true });
    window.addEventListener('scroll', padHistory, { once: true });
    window.addEventListener('touchstart', padHistory, { once: true });

    const handlePopState = () => {
      const now = Date.now();
      // Keep only clicks within the time window
      clicks.current = [...clicks.current, now].filter(t => now - t < windowMs);

      if (clicks.current.length >= requiredClicks) {
        setUnlocked(true);
        navigate(redirectPath);
        // Push state again so the user doesn't actually leave the page while attempting
        window.history.pushState({ ritual: clicks.current.length }, "", window.location.pathname + "#r" + Date.now());
      }
    };

    window.addEventListener("popstate", handlePopState);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener('click', padHistory);
      window.removeEventListener('scroll', padHistory);
      window.removeEventListener('touchstart', padHistory);
    };
  }, [requiredClicks, windowMs, navigate, redirectPath]);

  return unlocked;
}
