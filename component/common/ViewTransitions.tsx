'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ViewTransitions() {
  const pathname = usePathname();

  useEffect(() => {
    // Enable view transitions if supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      // Smooth transition on route change
      const handleRouteChange = () => {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            // This will be called during the transition
          });
        }
      };

      // Trigger on pathname change
      handleRouteChange();
    }
  }, [pathname]);

  return null;
}
