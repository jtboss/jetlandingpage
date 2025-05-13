import { JourneyMapProps } from "@/components/JourneyMap";

export const journeyMaps: JourneyMapProps[] = [
  {
    customer: {
      name: "Sarah Johnson",
      company: "TechSolutions Inc.",
      industry: "Software Development",
      logo: "/images/customers/techsolutions-logo.png", 
      quote: "We were spending hours each week on manual data entry between systems. Jet Automation transformed our workflow completely."
    },
    beforeSteps: [
      {
        title: "Manual Data Collection",
        description: "Team spent 10+ hours weekly collecting data from multiple sources",
        pain: "High error rate and wasted productive time",
        metrics: "10 hours/week, 15% error rate"
      },
      {
        title: "Spreadsheet Management",
        description: "Manual updates to spreadsheets from 3 different systems",
        pain: "Version control issues and duplicated work",
        metrics: "8 hours/week spent reconciling data"
      },
      {
        title: "Client Reporting",
        description: "Manual generation of client reports",
        pain: "Delayed reporting and inconsistent formats",
        metrics: "2-day turnaround time for reports"
      }
    ],
    afterSteps: [
      {
        title: "Automated Data Collection",
        description: "Automated data pulling from all sources through API connections",
        solution: "Zapier integration with custom webhooks",
        metrics: "0 hours/week, <1% error rate"
      },
      {
        title: "Centralized Database",
        description: "All data automatically flows into a single source of truth",
        solution: "Custom data mapping and transformation",
        metrics: "No manual reconciliation needed"
      },
      {
        title: "Automated Reporting",
        description: "Client reports generated and delivered automatically",
        solution: "Templated reports with conditional logic",
        metrics: "Real-time reporting availability"
      }
    ],
    results: {
      timeReduction: "18+ hours weekly",
      costSavings: "$4,500/month",
      otherBenefits: [
        "Improved client satisfaction due to faster reporting",
        "Team redeployed to high-value activities",
        "Scalable process for handling new clients"
      ]
    },
    workflow: {
      beforeImage: "/images/workflows/tech-before.svg",
      afterImage: "/images/workflows/tech-after.svg",
      beforeAlt: "Manual data collection workflow before automation",
      afterAlt: "Automated data collection workflow after Jet implementation"
    }
  },
  {
    customer: {
      name: "David Williams",
      company: "RetailGrowth",
      industry: "E-commerce",
      logo: "/images/customers/retailgrowth-logo.png",
      quote: "Our marketing campaigns were disjointed and required constant manual intervention. Jet Automation helped us create a seamless, integrated customer journey."
    },
    beforeSteps: [
      {
        title: "Campaign Management",
        description: "Managing multiple marketing campaigns across different platforms",
        pain: "Inconsistent messaging and timing across channels",
        metrics: "15+ hours/week coordinating campaigns"
      },
      {
        title: "Lead Nurturing",
        description: "Manual follow-up emails sent to potential customers",
        pain: "Delayed responses and missed opportunities",
        metrics: "48-hour average response time"
      },
      {
        title: "Customer Segmentation",
        description: "Manual segmentation of customer lists for targeted campaigns",
        pain: "Static segments that quickly became outdated",
        metrics: "Updated monthly, often missing recent behaviors"
      }
    ],
    afterSteps: [
      {
        title: "Integrated Campaign Hub",
        description: "Centralized campaign management across all channels",
        solution: "Zapier connections between marketing platforms with consolidated dashboard",
        metrics: "3 hours/week for campaign oversight"
      },
      {
        title: "Automated Customer Journey",
        description: "Behavior-triggered email sequences and follow-ups",
        solution: "Custom Zapier workflows based on customer interactions",
        metrics: "Immediate response to customer actions"
      },
      {
        title: "Dynamic Segmentation",
        description: "Real-time customer segmentation based on behavior",
        solution: "Automated tagging and list management through connected APIs",
        metrics: "Segments updated in real-time"
      }
    ],
    results: {
      timeReduction: "25+ hours weekly",
      costSavings: "$6,200/month",
      otherBenefits: [
        "40% increase in campaign conversion rates",
        "28% reduction in customer acquisition cost",
        "Improved customer satisfaction scores"
      ]
    },
    workflow: {
      beforeImage: "/images/workflows/retail-before.svg",
      afterImage: "/images/workflows/retail-after.svg",
      beforeAlt: "Manual marketing workflow before automation",
      afterAlt: "Automated marketing workflow after Jet implementation"
    }
  },
  {
    customer: {
      name: "Michael Chen",
      company: "HealthPlus Medical",
      industry: "Healthcare",
      logo: "/images/customers/healthplus-logo.png",
      quote: "Patient intake and scheduling was a nightmare of paperwork and phone calls. Jet Automation streamlined everything into a digital workflow saving countless hours."
    },
    beforeSteps: [
      {
        title: "Patient Scheduling",
        description: "Phone-based scheduling with manual calendar management",
        pain: "Scheduling conflicts and lengthy phone wait times",
        metrics: "20+ min per appointment scheduling"
      },
      {
        title: "Intake Paperwork",
        description: "Paper forms filled out in-office before appointments",
        pain: "Delayed appointments and transcription errors",
        metrics: "15-20 min delay per new patient"
      },
      {
        title: "Insurance Verification",
        description: "Manual insurance checks by administrative staff",
        pain: "Staff overwhelmed with verification tasks",
        metrics: "4 hours daily on insurance verification"
      }
    ],
    afterSteps: [
      {
        title: "Online Scheduling System",
        description: "Self-service appointment booking with automatic confirmation",
        solution: "Zapier integration between website and practice management software",
        metrics: "<5 min per self-service appointment"
      },
      {
        title: "Digital Intake Process",
        description: "Forms completed online before appointment",
        solution: "Automated form delivery and integration with patient records",
        metrics: "Zero paperwork delay for appointments"
      },
      {
        title: "Automated Insurance Checks",
        description: "Insurance verification triggered by appointment booking",
        solution: "API connection to insurance databases with status tracking",
        metrics: "90% reduction in verification workload"
      }
    ],
    results: {
      timeReduction: "30+ hours weekly",
      costSavings: "$8,000/month",
      otherBenefits: [
        "Improved patient satisfaction with digital-first experience",
        "Reduced administrative staff burnout",
        "Increased appointment capacity by 35%"
      ]
    }
  }
]; 