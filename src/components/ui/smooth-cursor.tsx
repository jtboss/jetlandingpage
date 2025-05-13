"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const customCursorSpringConfig = {
  damping: 25,
  stiffness: 250,
  mass: 1,
  restSpeed: 0.01,
  restDelta: 0.01,
  duration: 0.4,
};

function useFollowMouse() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, customCursorSpringConfig);
  const cursorYSpring = useSpring(cursorY, customCursorSpringConfig);

  React.useEffect(() => {
    const followMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", followMouse);

    return () => {
      window.removeEventListener("mousemove", followMouse);
    };
  }, [cursorX, cursorY]);

  return {
    cursorXSpring,
    cursorYSpring,
  };
}

const customCursorVariants = {
  default: {
    scale: 1,
    opacity: 1,
  },
  sm: {
    scale: 0.6,
    opacity: 1,
  },
};

export function useSetCursorVariant() {
  const [cursorVariant, setCursorVariant] =
    React.useState<keyof typeof customCursorVariants>("default");
  const [cursorText, setCursorText] = React.useState<string>("");

  return {
    cursorVariant,
    setCursorVariant,
    cursorText,
    setCursorText,
  };
}

interface SmoothCursorProps {
  variant?: keyof typeof customCursorVariants;
  text?: string;
  className?: string;
}

export function SmoothCursor({
  variant = "default",
  text = "",
  className,
}: SmoothCursorProps) {
  const { cursorXSpring, cursorYSpring } = useFollowMouse();
  const isTextNotEmpty = text !== "";
  
  React.useEffect(() => {
    const setCursorHidden = () => {
      document.documentElement.classList.add('cursor-hidden');
      document.body.style.cursor = 'none';
    };
    
    setCursorHidden();
    
    const timer = setTimeout(setCursorHidden, 100);
    
    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove('cursor-hidden');
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  return (
    <>
      <motion.div
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-transparent",
          className
        )}
        variants={customCursorVariants}
        animate={variant}
        style={{
          y: cursorYSpring,
          x: cursorXSpring,
        }}
      >
        {isTextNotEmpty && (
          <motion.span
            className="whitespace-nowrap rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 40 }}
          >
            {text}
          </motion.span>
        )}
      </motion.div>
      
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-primary"
        animate={variant}
        style={{
          y: cursorYSpring,
          x: cursorXSpring,
          translateX: 12,
          translateY: 12,
        }}
      />
    </>
  );
} 