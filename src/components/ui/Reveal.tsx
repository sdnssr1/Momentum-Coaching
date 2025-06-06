import { useState, useEffect, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export default function Reveal({ children, ...props }: RevealProps) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference on component mount
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldReduceMotion(prefersReducedMotion);
  }, []);

  // If reduced motion is preferred, render children without animation
  if (shouldReduceMotion) {
    return <div {...props}>{children}</div>;
  }

  // Default animation properties
  const defaultProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    className: `${props.className || ''} transition-opacity duration-500 ease-out will-change-transform`,
  };

  return (
    <motion.div {...defaultProps} {...props}>
      {children}
    </motion.div>
  );
}
