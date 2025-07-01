import { useEffect, useState } from 'react';

interface UseExitIntentOptions {
  enabled?: boolean;
  threshold?: number;
  delay?: number;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const { enabled = true, threshold = 50, delay = 0 } = options;
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is moving towards the top of the viewport
      if (e.clientY <= threshold && !hasTriggered) {
        hasTriggered = true;
        
        if (delay > 0) {
          timeoutId = setTimeout(() => {
            setShowExitIntent(true);
          }, delay);
        } else {
          setShowExitIntent(true);
        }
      }
    };

    const handleMouseEnter = () => {
      // Clear timeout if mouse re-enters
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [enabled, threshold, delay]);

  const resetExitIntent = () => {
    setShowExitIntent(false);
  };

  return { showExitIntent, resetExitIntent };
};