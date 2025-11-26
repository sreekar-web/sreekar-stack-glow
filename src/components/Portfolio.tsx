import { ExternalLink, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const navigate = useNavigate();
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const footerRef = useScrollAnimation();
  
  const projects = [
    {
      title: "Bank and Institute App",
      timeframe: "Jun 2024 – Aug 2024",
      description: "Salesforce-based application managing operations and data for banks and educational institutes using interconnected SQL tables. Emphasized data modeling, integration, and platform customization.",
      tags: ["Salesforce", "SQL", "Data Modeling", "Integration"],
      color: "primary",
      link: "/case/bank-institute",
    },
    {
      title: "Drones in Agriculture",
      timeframe: "Sep 2023 – Nov 2023",
      description: "Led backend programming and flight control implementation with JavaScript dashboard for real-time telemetry. Trained a basic ML model for decision-making in agricultural drone operations.",
      tags: ["JavaScript", "IoT", "ML", "Backend"],
      color: "secondary",
      link: "/case/drones-agriculture",
    },
    {
      title: "Student Database System",
      timeframe: "Feb 2022 – Jun 2022",
      description: "Web application in Python to manage student academic data with dashboard UI and SQL database integration. Streamlined data management for educational institutions.",
      tags: ["Python", "SQL", "Web App", "Dashboard"],
      color: "accent",
      link: "/case/student-database",
    },
    {
      title: "Progressive Web Chat App",
      timeframe: "Feb 2021 – May 2021",
      description: "Secure chat application with encryption, WhatsApp-style interface, and PWA principles for cross-platform usability. Built with Python focusing on security and user experience.",
      tags: ["Python", "PWA", "Security", "Chat"],
      color: "accent",
      link: "/case/chat-app",
    },
    {
      title: "Online Car Booking System",
      timeframe: "Sep 2020 – Dec 2020",
      description: "Backend system in JavaScript with SQL persistence for managing car bookings. Implemented booking flows and data storage with focus on reliability.",
      tags: ["JavaScript", "SQL", "Backend", "REST API"],
      color: "secondary",
      link: "/case/car-booking",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/20 hover:border-primary/40",
      secondary: "border-secondary/20 hover:border-secondary/40",
      accent: "border-accent/20 hover:border-accent/40",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of diverse technical challenges and solutions across full-stack development
            </p>
          </div>

          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate-scale">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`p-6 bg-card/50 backdrop-blur-sm transition-all hover:scale-105 group ${getColorClasses(project.color)}`}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{project.timeframe}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-muted/50"
                  disabled={!project.link}
                  onClick={() => project.link && navigate(project.link)}
                >
                  View Case Study
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div ref={footerRef} className="mt-12 text-center scroll-animate">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">More projects coming soon!</span> Each project strengthened my expertise in scalable architectures, database design, and cloud technologies.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
