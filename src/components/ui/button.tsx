import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(160,143,101,0.5)] border border-transparent hover:border-primary/30",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:shadow-[0_0_15px_rgba(161,93,69,0.5)] border border-transparent hover:border-destructive/30",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:shadow-[0_0_15px_rgba(185,173,133,0.5)] hover:border-accent/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:shadow-[0_0_15px_rgba(140,122,88,0.5)] border border-transparent hover:border-secondary/30",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:shadow-[0_0_10px_rgba(185,173,133,0.3)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    noAnimation?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, noAnimation = false, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement | null>(null)
    
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement)
    
    // Only apply ripple effect to button variants that have backgrounds
    const hasRippleVariant = variant !== 'link' && variant !== 'ghost'
    
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!hasRippleVariant || noAnimation || !buttonRef.current) return
      
      const button = buttonRef.current
      const rect = button.getBoundingClientRect()
      
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      const circle = document.createElement('span')
      const diameter = Math.max(rect.width, rect.height) * 2
      
      circle.style.width = `${diameter}px`
      circle.style.height = `${diameter}px`
      circle.style.left = `${x - diameter / 2}px`
      circle.style.top = `${y - diameter / 2}px`
      circle.style.position = 'absolute'
      circle.style.borderRadius = '50%'
      circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
      circle.style.pointerEvents = 'none'
      circle.style.transform = 'scale(0)'
      circle.style.animation = 'ripple 0.6s linear'
      
      button.appendChild(circle)
      
      setTimeout(() => {
        if (circle && button.contains(circle)) {
          button.removeChild(circle)
        }
      }, 600)
    }
    
    // Create a style element for the ripple animation if it doesn't exist
    React.useEffect(() => {
      const styleId = 'button-animation-styles'
      if (!document.getElementById(styleId) && typeof document !== 'undefined') {
        const style = document.createElement('style')
        style.id = styleId
        style.innerHTML = `
          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          @keyframes pulse-border {
            0% {
              box-shadow: 0 0 0 0 rgba(160, 143, 101, 0.4);
            }
            70% {
              box-shadow: 0 0 0 6px rgba(160, 143, 101, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(160, 143, 101, 0);
            }
          }
          
          .btn-pulse {
            animation: pulse-border 2s infinite;
          }
        `
        document.head.appendChild(style)
      }
    }, [])
    
    // Add hover and active animations via CSS classes
    const animationClasses = !noAnimation ? 
      'transition-all hover:scale-[1.03] active:scale-[0.97] duration-200 overflow-hidden hover:shadow-lg' : ''
    
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      )
    }
    
    // Handle click with ripple effect
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!noAnimation) {
        createRipple(e)
      }
      
      if (props.onClick) {
        props.onClick(e)
      }
    }
    
    return (
      <button
        ref={buttonRef}
        className={cn(buttonVariants({ variant, size, className }), animationClasses)}
        onClick={handleClick}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
