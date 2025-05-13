"use client"

import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Bot, Zap, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  color: string
  delay: number
}

const ServiceCard = ({ icon: Icon, title, description, color, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <Card className="group relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg">
        <CardHeader className="pb-0">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${color} text-white`}>
            <Icon className="h-6 w-6" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-300 group-hover:via-primary" />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ServicesSection() {
  const [isHovering, setIsHovering] = React.useState<number | null>(null)

  const services = [
    {
      icon: Zap,
      title: "Custom Zapier Workflows",
      description: "Automate complex business processes with custom Zapier integrations that connect your favorite apps.",
      color: "bg-amber-500",
      delay: 0
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Leverage cutting-edge AI to automate decision-making and enhance your business intelligence.",
      color: "bg-blue-500",
      delay: 1
    },
    {
      icon: Clock,
      title: "24/7 Ongoing Support",
      description: "Rest easy with round-the-clock support and monitoring for all your automation workflows.",
      color: "bg-emerald-500",
      delay: 2
    }
  ]

  return (
    <section className="relative overflow-hidden bg-tertiary/5 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-tertiary/10 via-background to-background opacity-80"></div>
      
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Streamline your business with powerful automation solutions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={service.delay}
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90">
            <span className="relative">Let's Work Together</span>
            <span className="absolute right-0 ml-2 translate-x-0 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">→</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-gradient-to-l from-secondary/10 to-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-40 h-32 w-32 rounded-full bg-tertiary/10 blur-2xl" />
    </section>
  )
}

export default function OurServices() {
  return <ServicesSection />
} 