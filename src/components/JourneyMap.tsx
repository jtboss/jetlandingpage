"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface JourneyStep {
  title: string
  description: string
  metrics?: string
  icon?: string
  pain?: string // Only for "before" steps
  solution?: string // Only for "after" steps
}

export interface WorkflowVisualization {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export interface JourneyMapProps {
  customer: {
    name: string
    company: string
    industry: string
    logo: string
    quote: string
  }
  beforeSteps: JourneyStep[]
  afterSteps: JourneyStep[]
  results: {
    timeReduction: string
    costSavings: string
    otherBenefits: string[]
  }
  workflow?: WorkflowVisualization
  className?: string
}

// Animated Background for tabs
function AnimatedBackground({
  children,
  active,
  className,
}: {
  children: React.ReactNode
  active: "before" | "after"
  className?: string
}) {
  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          layoutId="tab-background"
          className={cn(
            "absolute inset-0 rounded-md",
            active === "before" ? "bg-destructive/10" : "bg-primary/10",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      </AnimatePresence>
      {children}
    </div>
  )
}

// Step component
const JourneyStepItem = ({
  step,
  index,
  variant = "before",
}: {
  step: JourneyStep
  index: number
  variant: "before" | "after"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <Card className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg",
        variant === "before" ? "border-destructive/20" : "border-primary/20"
      )}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-white shrink-0 mt-1",
              variant === "before" ? "bg-destructive/80" : "bg-primary"
            )}>
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-muted-foreground">{step.description}</p>
              
              {step.metrics && (
                <div className="mt-2">
                  <Badge variant="outline" className="font-normal">
                    {step.metrics}
                  </Badge>
                </div>
              )}
              
              {variant === "before" && step.pain && (
                <div className="mt-3 flex items-start gap-2 rounded-md bg-destructive/5 p-3 border-l-2 border-destructive">
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-destructive">Pain point: </span>
                    <span>{step.pain}</span>
                  </div>
                </div>
              )}
              
              {variant === "after" && step.solution && (
                <div className="mt-3 flex items-start gap-2 rounded-md bg-primary/5 p-3 border-l-2 border-primary">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-primary">Solution: </span>
                    <span>{step.solution}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="h-6 flex justify-center">
        {index < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <ArrowRight className="text-muted-foreground h-6 w-6" />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// Results component
const ResultsSection = ({ results }: { results: JourneyMapProps["results"] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-4 rounded-lg bg-primary/5 p-6"
    >
      <h3 className="mb-4 text-xl font-bold text-foreground">Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="bg-card shadow-sm border-primary/10 hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <h4 className="text-sm font-medium text-muted-foreground">Time Reduction</h4>
            <p className="text-2xl font-bold text-primary">{results.timeReduction}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card shadow-sm border-primary/10 hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <h4 className="text-sm font-medium text-muted-foreground">Cost Savings</h4>
            <p className="text-2xl font-bold text-primary">{results.costSavings}</p>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-foreground mb-2">Other Benefits:</h4>
        <ul className="space-y-2">
          {results.otherBenefits.map((benefit, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="flex items-start gap-2"
            >
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function JourneyMap({ customer, beforeSteps, afterSteps, results, workflow, className }: JourneyMapProps) {
  const [activeTab, setActiveTab] = React.useState<"before" | "after">("before")
  const [viewMode, setViewMode] = React.useState<"steps" | "visual">(workflow ? "visual" : "steps")
  
  return (
    <div className={cn("w-full", className)}>
      <Card className="overflow-hidden border-none shadow-md bg-card">
        <CardHeader className="bg-muted/50 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/10 bg-background shadow-sm">
                <Image 
                  src={customer.logo} 
                  alt={`${customer.company} logo`} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-foreground">{customer.company}</CardTitle>
                  <Badge variant="outline" className="font-normal">
                    {customer.industry}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{customer.name}</p>
              </div>
            </div>
            
            <motion.blockquote 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative italic text-foreground mt-4 pl-4 border-l-2 border-primary/30"
            >
              &ldquo;{customer.quote}&rdquo;
            </motion.blockquote>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="p-4 border-b border-border">
            <Tabs 
              defaultValue="before" 
              value={activeTab}
              onValueChange={(v) => setActiveTab(v as "before" | "after")}
              className="w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <TabsList className="h-12 grid w-full max-w-md grid-cols-2 relative overflow-hidden">
                  <AnimatedBackground active={activeTab} className="bg-background">
                    <TabsTrigger 
                      value="before"
                      className={cn(
                        "relative z-10 h-full data-[state=active]:text-destructive data-[state=active]:font-medium",
                      )}
                    >
                      Before Automation
                    </TabsTrigger>
                    <TabsTrigger 
                      value="after"
                      className={cn(
                        "relative z-10 h-full data-[state=active]:text-primary data-[state=active]:font-medium",
                      )}
                    >
                      After Jet Automation
                    </TabsTrigger>
                  </AnimatedBackground>
                </TabsList>
                
                {workflow && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setViewMode(viewMode === "steps" ? "visual" : "steps")}
                    className="text-xs"
                  >
                    {viewMode === "steps" ? "Show Visual Workflow" : "Show Step Detail"}
                  </Button>
                )}
              </div>
              
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {viewMode === "visual" && workflow ? (
                    <motion.div
                      key={`${activeTab}-visual`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TabsContent value="before" className="m-0 mt-2">
                        <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden border border-border shadow-sm">
                          <Image 
                            src={workflow.beforeImage} 
                            alt={workflow.beforeAlt} 
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="after" className="m-0 mt-2">
                        <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden border border-border shadow-sm">
                          <Image 
                            src={workflow.afterImage} 
                            alt={workflow.afterAlt} 
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      </TabsContent>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${activeTab}-steps`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TabsContent value="before" className="m-0 mt-2">
                        <div className="space-y-1">
                          {beforeSteps.map((step, index) => (
                            <JourneyStepItem 
                              key={index} 
                              step={step} 
                              index={index} 
                              variant="before"
                            />
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="after" className="m-0 mt-2">
                        <div className="space-y-1">
                          {afterSteps.map((step, index) => (
                            <JourneyStepItem 
                              key={index} 
                              step={step} 
                              index={index} 
                              variant="after"
                            />
                          ))}
                        </div>
                        
                        <ResultsSection results={results} />
                      </TabsContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 