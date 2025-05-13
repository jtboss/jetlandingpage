"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button-wrapper"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Testimonial {
  image: string
  name: string
  username: string
  text: string
  social?: string
  company?: string
  role?: string
  rating?: number
}

interface SuccessStoriesProps {
  testimonials: Testimonial[]
  className?: string
  title?: string
  description?: string
  maxDisplayed?: number
}

export function SuccessStories({
  testimonials,
  className,
  title = "Success Stories",
  description = "See what our clients have achieved with our solutions.",
  maxDisplayed = 6,
}: SuccessStoriesProps) {
  const [showAll, setShowAll] = useState(false)

  const openInNewTab = (url: string) => {
    if (url) window.open(url, "_blank")?.focus()
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Testimonials</Badge>
        </div>
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-3xl md:text-5xl tracking-tighter font-bold">{title}</h2>
          <p className="text-center text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "flex justify-center items-center gap-5 flex-wrap",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden",
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 h-auto p-5 relative bg-card border-border hover:shadow-md transition-all duration-300 hover:border-primary/20 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="font-semibold text-base">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.username || testimonial.role}
                      {testimonial.company && ` @ ${testimonial.company}`}
                    </span>
                  </div>
                </div>
                {testimonial.rating && (
                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className={cn(
                          idx < (testimonial.rating || 0)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </div>
                )}
                <div className="mt-5 mb-5">
                  <p className="text-foreground">
                    "{testimonial.text}"
                  </p>
                </div>
                {testimonial.social && (
                  <button
                    onClick={() => openInNewTab(testimonial.social || "")}
                    className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                  >
                    <svg
                      height="23"
                      viewBox="0 0 1200 1227"
                      width="23"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                  </button>
                )}
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button onClick={() => setShowAll(true)} className="btn-primary transition-transform hover:scale-105 duration-200 hover:shadow-md">
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 