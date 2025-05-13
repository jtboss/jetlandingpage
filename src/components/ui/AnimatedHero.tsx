"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, Zap, Compass, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button-wrapper";
import Link from "next/link";

interface AnimatedHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

// Clean, professional shape component
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
      animate={{ opacity: 0.5 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute rounded-full", color, className)}
    />
  );
};

export function AnimatedHero({
  badge = "Automate More Simple",
  description = "Streamline operations, reduce manual tasks, and scale faster with custom automations powered by AI + Zapier.",
}: AnimatedHeroProps) {
  // Track if user has scrolled
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };
  
  // Scroll indicator animation variants
  const scrollIndicatorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: [0.3, 1, 0.3], 
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple shapes with subtle colors */}
        <SubtleShape 
          delay={0.2} 
          className="w-[600px] h-[600px] -left-[200px] top-[5%]"
          color="bg-slate-100"
        />
        
        <SubtleShape 
          delay={0.4} 
          className="w-[500px] h-[500px] -right-[100px] top-[15%]"
          color="bg-slate-100"
        />
        
        <SubtleShape 
          delay={0.3} 
          className="w-[300px] h-[300px] left-[10%] bottom-[15%]"
          color="bg-slate-50"
        />
      </div>

      <div className="container relative min-h-[90vh] flex flex-col justify-center items-center z-10 pt-20 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100">
              <span className="flex h-5 w-5 rounded-full bg-primary text-white items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm font-medium text-slate-800">{badge}</span>
            </span>
          </motion.div>

          <motion.div variants={item} className="mb-14 flex flex-col">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight">
              <span className="block mb-2">Automate</span>
              <span className="block mb-2">Your Business</span>
              <span className="block">Save Hours Every Week</span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-14">
            {description}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
            {/* Primary CTA as black button */}
            <Button 
              size="lg" 
              className="bg-black text-white hover:shadow-[0_0_0_3px_rgba(59,130,246,0.3)] transition-shadow font-medium px-8 py-6 text-base rounded-full"
            >
              <Link href="#contact" className="flex items-center">
                Let's Work Together
              </Link>
            </Button>
            
            {/* Secondary CTA as ghost button */}
            <Button 
              variant="ghost" 
              size="lg" 
              className="font-medium px-8 py-6 text-base text-slate-900 hover:bg-transparent hover:text-slate-800 rounded-full"
            >
              <Link href="#services" className="flex items-center">
                Explore Services
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator - only visible when not scrolled */}
        <motion.div 
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center scroll-indicator"
          initial="initial"
          animate={hasScrolled ? "exit" : "animate"}
          variants={scrollIndicatorVariants}
        >
          <span className="text-sm font-medium text-slate-500 mb-2">Explore</span>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md">
            <ChevronDown className="h-5 w-5 text-primary" />
          </div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
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
    </section>
  );
} 