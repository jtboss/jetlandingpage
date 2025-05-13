import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SmoothCursorProvider } from "@/components/ui/smooth-cursor-provider";

// Use Montserrat font with multiple weights for bold and confident appearance
const montserrat = Montserrat({
  subsets: ["latin"],
  // Include bold and semibold weights for confident appearance
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// Use Inter font for body text per style guide
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JET AUTOMATION | Custom Zapier & AI Workflows",
  description: "JET AUTOMATION builds custom Zapier workflows and AI integrations to streamline your business operations and save you time.",
  keywords: "automation, zapier, workflow automation, business automation, AI integration, process optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta name="pragma" content="no-cache" />
        <meta name="expires" content="0" />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} font-sans`}>
        <SmoothCursorProvider>
          {children}
        </SmoothCursorProvider>
      </body>
    </html>
  );
}
