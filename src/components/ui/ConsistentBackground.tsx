"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Subtle background shape component
const SubtleShape = ({ 
  className, 
  delay = 0,
  color = "bg-slate-100",
}: { 
  className?: string; 
  delay?: number;
  color?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute rounded-full", color, className)}
    />
  );
};

type ConsistentBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  showWaveDivider?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
  containerClassName?: string;
}

/**
 * ConsistentBackground applies a clean, professional background style
 * with subtle shapes and optional wave divider.
 */
export function ConsistentBackground({
  children,
  className,
  showWaveDivider = false,
  intensity = 'medium',
  containerClassName,
}: ConsistentBackgroundProps) {
  // Get background color based on intensity
  const bgColor = intensity === 'light' ? 'bg-white' : 
                  intensity === 'medium' ? 'bg-slate-50' : 
                  'bg-slate-100';

  return (
    <section className={cn("relative overflow-hidden", bgColor, className)}>
      {/* Subtle background shapes - only visible in medium and strong intensities */}
      {intensity !== 'light' && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Simple, subtle shapes */}
          <SubtleShape 
            delay={0.2} 
            className="w-[600px] h-[600px] -left-[200px] top-[5%]"
            color="bg-slate-200"
          />
          
          <SubtleShape 
            delay={0.4} 
            className="w-[500px] h-[500px] -right-[100px] top-[15%]"
            color="bg-slate-200"
          />
          
          <SubtleShape 
            delay={0.3} 
            className="w-[300px] h-[300px] left-[10%] bottom-[15%]"
            color="bg-slate-200"
          />
        </div>
      )}

      <div className={cn("relative z-10", containerClassName)}>
        {children}
      </div>

      {/* Bottom wave divider if needed */}
      {showWaveDivider && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-[60px] text-white"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M0 0L48 8.875C96 17.9167 192 35.5833 288 53.5833C384 71.5833 480 89.5833 576 80.75C672 71.5833 768 35.5833 864 26.75C960 17.9167 1056 35.5833 1152 44.4167C1248 53.5833 1344 53.5833 1392 53.5833L1440 53.5833V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            />
          </svg>
        </div>
      )}
    </section>
  );
} 