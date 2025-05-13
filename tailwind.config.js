/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: '#E2E8F0',
  			input: '#E2E8F0',
  			ring: '#94A3B8',
  			background: '#FFFFFF',
  			foreground: '#334155',
  			primary: {
  				DEFAULT: '#3B82F6',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#38BDF8',
  				foreground: '#FFFFFF'
  			},
  			tertiary: {
  				DEFAULT: '#EDE8D0',  // Beige color as requested
  				foreground: '#334155'
  			},
  			muted: {
  				DEFAULT: '#F8FAFC',
  				foreground: '#64748B'
  			},
  			accent: {
  				DEFAULT: '#F59E0B',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF'
  			},
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#334155'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#334155'
  			},
  			slate: '#64748B'
  		},
  		textColor: {
  			slate: '#64748B'
  		},
  		backgroundColor: {
  			slate: '#64748B'
  		},
  		borderColor: {
  			slate: '#64748B'
  		},
  		borderRadius: {
  			lg: '0.75rem',
  			md: '0.5rem',
  			sm: '0.25rem'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-montserrat)',
  				'var(--font-inter)',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
  			'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0H0V1H1V0Z\' fill=\'%23E2E8F0\'/%3E%3C/svg%3E")',
  			'hero-gradient': 'linear-gradient(135deg, #EDE8D0 0%, #F8FAFC 50%, #EFF6FF 100%)',
  		}
  	}
  },
  plugins: [],
} 