"use client"

import { useState } from 'react'
import { JourneyMap } from './JourneyMap'
import { journeyMaps } from '../data/journeyMaps'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % journeyMaps.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + journeyMaps.length) % journeyMaps.length)
  }
  
  return (
    <section className="py-16 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Success Stories</Badge>
          </div>
          <h2 className="text-center text-3xl md:text-5xl tracking-tighter font-bold mb-4">Automation Journeys</h2>
          <p className="text-center text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            See how real businesses transformed their operations with Jet Automation.
            <br />
            Explore the before and after of each workflow transformation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <JourneyMap {...journeyMaps[currentIndex]} />
          
          <div className="flex justify-between items-center mt-8">
            <Button 
              variant="outline"
              onClick={prevTestimonial}
              className="flex items-center gap-2"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
            
            <div className="flex gap-2">
              {journeyMaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline"
              onClick={nextTestimonial}
              className="flex items-center gap-2"
              aria-label="Next testimonial"
            >
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 