"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useCursor } from "@/components/ui/smooth-cursor-provider"

export function SmoothCursorDemo() {
  const { setCursorVariant, setCursorText } = useCursor()

  return (
    <div className="bg-background px-6 py-12 md:px-8 xl:px-12">
      <div className="md:grid-cols-2 grid grid-cols-1 grid-flow-row items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-medium text-foreground">
              Streamline Your
              {" "}
              <span className="text-primary">Business Workflows</span>
              {" "}
              With Custom Automation
            </h1>
            <p className="tracking-tight text-muted-foreground">
              JET Automation builds custom Zapier workflows and AI integrations to streamline your business operations and save you time.
            </p>
          </div>
          <div className="my-8">
            <Button
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="rounded-full"
              size="lg"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
        <div
          className="aspect-square rounded-md bg-muted size-40 md:size-auto"
          onMouseEnter={() => setCursorText("Explore Solutions")}
          onMouseLeave={() => setCursorText("")}
        />
      </div>
    </div>
  )
} 