"use client";

import React, { useEffect, useRef, useState } from "react";
import { Clock, CheckCircle, TrendingUp, DollarSign, LineChart, Activity, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// The benefit card component with enhanced visual elements
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  statistic: string;
  color: string;
  className?: string;
  index: number;
}

const BenefitCard = ({ 
  icon, 
  title, 
  description, 
  statistic, 
  color, 
  className, 
  index 
}: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "feature-card group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      {/* Statistic highlight - prominently displayed */}
      <div className={`absolute -top-2 -right-2 rounded-full px-3 py-2 text-white font-bold shadow-lg ${color}`}>
        {statistic}
      </div>
      
      <div className="flex flex-col gap-4 pt-4">
        {/* Animated icon background pulse effect */}
        <div className="relative">
          <div className={`absolute inset-0 ${color} opacity-20 rounded-full blur-md animate-pulse`} />
          <div className={`feature-card-icon ${color.replace('bg-', 'text-')} relative z-10 p-3 rounded-full`}>
            {icon}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Visual data representation */}
      <div className="mt-4 h-10">
        <div className={`w-full h-2 rounded-full bg-muted overflow-hidden mt-2`}>
          <motion.div 
            className={`h-full ${color}`}
            initial={{ width: "0%" }}
            animate={isInView ? { width: "90%" } : { width: "0%" }}
            transition={{ duration: 1.2, delay: 0.3 * index }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Before</span>
          <span>After JET Automation</span>
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

// Visual stats counter
const StatCounter = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);
  
  return (
    <motion.div 
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-card shadow-lg rounded-lg p-6 h-full border border-primary/10"
    >
      <div className="rounded-full bg-primary/10 p-3 mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-primary mb-2">
        {value.includes('%') ? `${count}%` : count}
      </div>
      <div className="text-center text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 10+ Hours Weekly",
      description: "Our clients typically save 10+ hours per week by automating repetitive tasks and streamlining workflows.",
      statistic: "10h+",
      color: "bg-primary"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Reduce Errors by 90%",
      description: "Automated processes consistently reduce human error by up to 90%, ensuring accuracy and reliability.",
      statistic: "90%",
      color: "bg-green-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Boost Productivity",
      description: "Focus your team on high-value work instead of repetitive tasks, leading to increased productivity and job satisfaction.",
      statistic: "3x",
      color: "bg-blue-500"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost-Effective",
      description: "Save money by automating processes, reducing the need for manual intervention and enabling scalable growth.",
      statistic: "40%",
      color: "bg-amber-500"
    },
  ];

  // Summary stats
  const summaryStats = [
    {
      value: "95%",
      label: "Client satisfaction rate",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      value: "5",
      label: "Automations built",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      value: "1",
      label: "Industry expertise",
      icon: <LineChart className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">Benefits</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter font-bold">
                Why Businesses Choose JET
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
                Our automation solutions deliver measurable results that transform your operations
              </p>
            </div>
          </div>
          
          {/* Bento Grid Layout with enhanced visuals */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-6 md:auto-rows-fr">
            {/* First row */}
            <BenefitCard 
              icon={benefits[0].icon}
              title={benefits[0].title}
              description={benefits[0].description}
              statistic={benefits[0].statistic}
              color={benefits[0].color}
              className="md:col-span-4 md:row-span-3"
              index={0}
            />
            <BenefitCard 
              icon={benefits[1].icon}
              title={benefits[1].title}
              description={benefits[1].description}
              statistic={benefits[1].statistic}
              color={benefits[1].color}
              className="md:col-span-2 md:row-span-3"
              index={1}
            />
            
            {/* Second row */}
            <BenefitCard 
              icon={benefits[2].icon}
              title={benefits[2].title}
              description={benefits[2].description}
              statistic={benefits[2].statistic}
              color={benefits[2].color}
              className="md:col-span-2 md:row-span-3"
              index={2}
            />
            <BenefitCard 
              icon={benefits[3].icon}
              title={benefits[3].title}
              description={benefits[3].description}
              statistic={benefits[3].statistic}
              color={benefits[3].color}
              className="md:col-span-4 md:row-span-3"
              index={3}
            />
          </div>
          
          {/* Transforming the stats section into a "What you can expect" section */}
          <div className="mt-12 mb-6">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-2"
            >
              What Our Clients Can Expect
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              As a boutique automation partner, we provide personalized attention and custom solutions
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center bg-card shadow-lg rounded-lg p-6 h-full border border-primary/10"
              >
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  Fast Delivery
                </div>
                <div className="text-center text-muted-foreground">
                  Most automation solutions ready within 2-3 weeks
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center bg-card shadow-lg rounded-lg p-6 h-full border border-primary/10"
              >
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  Personalized Service
                </div>
                <div className="text-center text-muted-foreground">
                  Direct collaboration with our automation experts
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center bg-card shadow-lg rounded-lg p-6 h-full border border-primary/10"
              >
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  Continuous Support
                </div>
                <div className="text-center text-muted-foreground">
                  Ongoing assistance and optimization included
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Testimonial callout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-xl p-8 border border-primary/10 mt-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />
            <div className="relative z-10">
              <blockquote className="text-xl italic font-medium text-center max-w-3xl mx-auto">
                "Jet Automation transformed our business operations, cutting our administrative workload by 70% and allowing us to focus on growth strategies."
              </blockquote>
              <div className="mt-4 text-center">
                <p className="font-bold">Nick Leitch</p>
                <p className="text-sm text-muted-foreground">CEO, Stirling Bridge</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 