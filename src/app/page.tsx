"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button-wrapper"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedHero } from "@/components/ui/AnimatedHero"
import { useState, useEffect } from "react";
import OurServices from "@/components/OurServices"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BenefitsSection } from "@/components/BenefitsSection"
import { ConsistentBackground } from '@/components/ui/ConsistentBackground'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        
        const targetId = anchor.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Close mobile menu if open
          setMobileMenuOpen(false);
          
          // Scroll to the element smoothly
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          
          // Update URL without reloading
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    // Add event listener
    document.addEventListener('click', handleAnchorClick);
    
    // Handle initial hash in URL
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 500);
      }
    }
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-slate-200">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-2xl text-black">JET</Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {["Services", "Benefits", "Contact"].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-sm font-medium text-slate-600 hover:text-primary animated-underline"
                >
                  {item}
                </Link>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-slate-700 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            
            <div className="hidden md:flex items-center">
              <Button 
                size="sm"
                className="bg-black text-white hover:shadow-[0_0_0_3px_rgba(59,130,246,0.3)] transition-shadow rounded-full"
              >
                <Link href="#contact" className="flex items-center">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4">
            <div className="container mx-auto space-y-1">
              {["Services", "Benefits", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Button className="w-full justify-center bg-black text-white hover:shadow-[0_0_0_3px_rgba(59,130,246,0.3)] transition-shadow rounded-full">
                  <Link href="#contact" className="flex items-center">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedHero 
          badge="Automate More Simple"
          title="Automate Your Business"
          subtitle="Save Hours Every Week"
          description="Streamline operations, reduce manual tasks, and scale faster with custom automations powered by AI + Zapier."
        />

        {/* Services Section */}
        <ConsistentBackground className="py-20" intensity="light" showWaveDivider={true}>
          <div id="services" className="container">
            <OurServices />
          </div>
        </ConsistentBackground>

        {/* Benefits Section */}
        <ConsistentBackground className="py-20" intensity="medium">
          <div id="benefits" className="container">
            <BenefitsSection />
          </div>
        </ConsistentBackground>

        {/* Contact Section */}
        <ConsistentBackground className="py-20" intensity="light">
          <div id="contact" className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Contact Us</Badge>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Ready to Automate?</h2>
                <p className="max-w-[600px] text-slate-600 md:text-lg mx-auto">
                  Fill out the form below and we'll contact you to discuss your automation needs
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg">
              <ContactForm />
            </div>
          </div>
        </ConsistentBackground>
      </main>

      {/* Footer */}
      <ConsistentBackground className="py-16" intensity="strong">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="font-bold text-2xl text-black">JET</span>
              </div>
              <p className="text-slate-700 max-w-xs mb-6">
                Streamline your business operations with custom automations that save time and reduce costs.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin'].map((social) => (
                  <Link 
                    key={social}
                    href="#" 
                    className="text-slate-600 hover:text-primary transition-colors"
                    aria-label={`${social} link`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 shadow-sm hover:shadow-md transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === 'facebook' && (
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        )}
                        {social === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {social === 'linkedin' && (
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Services</h3>
              <ul className="space-y-2">
                {["Zapier Workflows", "AI Integration", "Process Automation", "Custom Solutions"].map((item) => (
                  <li key={item}>
                    <Link href="#services" className="text-slate-700 hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Company</h3>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#" },
                  { label: "Contact", href: "#contact" },
                  { label: "Blog", href: "#" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-slate-700 hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} JET Automation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-slate-600 hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="text-xs text-slate-600 hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </ConsistentBackground>
    </div>
  );
}
