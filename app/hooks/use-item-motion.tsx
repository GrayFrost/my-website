import { useEffect } from 'react';
import { animate, scroll, inView } from 'motion';

export function useItemMotion(className) {
  useEffect(() => {
    inView(`.${className}`, (info) => {
      animate(
        info.target,
        {
          opacity: [0, 0.2, 0.8, 1],
          transform: ['translateX(-100px) ', 'none'],
        },
        { duration: 0.5, delay: 0.1 }
      )
    })
  }, [])
}