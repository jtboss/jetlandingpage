"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function StyleGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl">JET AUTOMATION</span>
          </div>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="mb-2">Style Guide</h1>
            <p className="text-muted-foreground text-lg">
              Design system for JET AUTOMATION website
            </p>
          </div>

          {/* Color Palette */}
          <section className="space-y-4">
            <h2 className="border-b pb-2">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="bg-background border h-16 rounded-md"></div>
                <p className="font-medium">Background</p>
                <p className="text-xs text-muted-foreground">hsl(36 33% 97%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-foreground h-16 rounded-md"></div>
                <p className="font-medium">Foreground</p>
                <p className="text-xs text-muted-foreground">hsl(220 25% 20%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-primary h-16 rounded-md"></div>
                <p className="font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">hsl(25 100% 65%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-secondary h-16 rounded-md"></div>
                <p className="font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">hsl(220 8% 85%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-accent h-16 rounded-md"></div>
                <p className="font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">hsl(25 80% 90%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-16 rounded-md"></div>
                <p className="font-medium">Muted</p>
                <p className="text-xs text-muted-foreground">hsl(220 8% 94%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-destructive h-16 rounded-md"></div>
                <p className="font-medium">Destructive</p>
                <p className="text-xs text-muted-foreground">hsl(0 84.2% 60.2%)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-border h-16 rounded-md"></div>
                <p className="font-medium">Border</p>
                <p className="text-xs text-muted-foreground">hsl(220 13% 90%)</p>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-4">
            <h2 className="border-b pb-2">Typography</h2>
            <div className="space-y-6">
              <div>
                <h1>Heading 1</h1>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Bold, 4xl/5xl/6xl</p>
              </div>
              <div>
                <h2>Heading 2</h2>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Bold, 3xl/4xl</p>
              </div>
              <div>
                <h3>Heading 3</h3>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Bold, 2xl/3xl</p>
              </div>
              <div>
                <p className="text-xl">Large Paragraph</p>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Regular, xl</p>
              </div>
              <div>
                <p>Regular Paragraph</p>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Regular, base</p>
              </div>
              <div>
                <p className="text-sm">Small Text</p>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Regular, sm</p>
              </div>
              <div>
                <p className="text-xs">Extra Small Text</p>
                <p className="text-xs text-muted-foreground mt-1">Montserrat Regular, xs</p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="space-y-4">
            <h2 className="border-b pb-2">Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl">Default Size</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl">Large Size</h3>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">Primary</Button>
                  <Button size="lg" variant="secondary">Secondary</Button>
                  <Button size="lg" variant="outline">Outline</Button>
                  <Button size="lg" variant="ghost">Ghost</Button>
                  <Button size="lg" variant="destructive">Destructive</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <section className="space-y-4">
            <h2 className="border-b pb-2">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content of the card. It can contain any elements needed.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>Used for showcasing features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M12 22v-5" />
                        <path d="M9 8V2" />
                        <path d="M15 8V2" />
                        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Feature Title</h3>
                      <p className="text-muted-foreground">Feature description goes here.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Custom Classes */}
          <section className="space-y-4">
            <h2 className="border-b pb-2">Custom Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl">Buttons</h3>
                <div className="space-y-2">
                  <button className="btn-primary px-4 py-2 rounded-md">Primary Button</button>
                  <button className="btn-secondary px-4 py-2 rounded-md">Secondary Button</button>
                  <button className="btn-accent px-4 py-2 rounded-md">Accent Button</button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl">Other Elements</h3>
                <p>
                  Custom classes can be added as needed for specific components and layouts.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t py-6 bg-muted/50">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JET AUTOMATION. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="hover:underline">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
} 