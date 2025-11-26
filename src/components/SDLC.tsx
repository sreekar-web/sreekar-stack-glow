import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Palette, Code, TestTube, Rocket, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SDLC = () => {
  const titleRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();
  const phases = [
    {
      icon: FileText,
      title: "Requirements & Planning",
      color: "border-blue-500",
      description: "Gathering and analyzing project requirements",
      activities: [
        "Functional & non-functional requirements",
        "User stories and use cases",
        "Stakeholder interviews",
        "Feasibility analysis"
      ]
    },
    {
      icon: Palette,
      title: "Design Phase",
      color: "border-purple-500",
      description: "Creating comprehensive system architecture and design",
      activities: [
        "System architecture design",
        "Database schema & ERD modeling",
        "API specification & contracts",
        "UI/UX wireframes & prototypes",
        "Security & compliance design",
        "Integration planning"
      ]
    },
    {
      icon: Code,
      title: "Implementation",
      color: "border-green-500",
      description: "Building the application with best practices",
      activities: [
        "Frontend development (React, TypeScript)",
        "Backend APIs (Node.js, Python)",
        "Database implementation",
        "Third-party integrations",
        "Code reviews & version control"
      ]
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      color: "border-orange-500",
      description: "Ensuring quality and reliability",
      activities: [
        "Unit & integration testing",
        "End-to-end testing",
        "Performance & load testing",
        "Security vulnerability testing",
        "User acceptance testing"
      ]
    },
    {
      icon: Rocket,
      title: "Deployment",
      color: "border-red-500",
      description: "Launching to production environments",
      activities: [
        "CI/CD pipeline setup",
        "Environment configuration",
        "Database migrations",
        "Monitoring & logging setup",
        "Rollback strategies"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      color: "border-cyan-500",
      description: "Ongoing improvement and support",
      activities: [
        "Bug fixes & patches",
        "Performance optimization",
        "Feature enhancements",
        "Security updates",
        "User support & documentation"
      ]
    }
  ];

  return (
    <section id="sdlc" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 scroll-animate">
          <Badge variant="secondary" className="mb-4">
            Software Development Lifecycle
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Full SDLC Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive experience across all phases of software development, from initial planning to deployment and maintenance
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate-scale">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card 
                key={index} 
                className={`border-l-4 ${phase.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline">{index + 1}</Badge>
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            View detailed case studies in the portfolio section below to see these phases in action
          </p>
        </div>
      </div>
    </section>
  );
};

export default SDLC;