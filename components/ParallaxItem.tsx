
import React, { useRef, useEffect } from 'react';

interface ParallaxItemProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number; // 0.1 to 0.5 usually
  triggerPoint?: number; // 0 to 1, percentage of viewport height
}

const ParallaxItem = ({
  children,
  className = "",
  speed = 0.25,
  triggerPoint = 0.2
}: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startOffset = viewportHeight * triggerPoint;

      // Only apply effect when element is near the top or above it
      if (rect.top < startOffset) {
        // Calculate displacement
        // As rect.top gets smaller (more negative), we move it UP (more negative)
        // creating an accelerated exit / slide-up effect.
        const delta = startOffset - rect.top;
        const transformY = delta * speed;
        
        ref.current.style.transform = `translate3d(0, -${transformY}px, 0)`;
      } else {
        ref.current.style.transform = 'translate3d(0, 0, 0)';
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial calculation
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed, triggerPoint]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxItem;
