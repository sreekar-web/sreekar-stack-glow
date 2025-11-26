import { Code, Database, CloudCog, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const titleRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Design, build, and deploy complete web applications from concept to production. Creating responsive, user-friendly interfaces backed by robust server-side logic.",
      outcomes: ["Fast, responsive UIs", "Scalable architecture", "Modern tech stack"],
      color: "primary",
    },
    {
      icon: Database,
      title: "Database Design & Integration",
      description: "Architect efficient database schemas and integrate them seamlessly with your applications. Optimize queries for performance and ensure data integrity.",
      outcomes: ["Optimized schemas", "Fast query performance", "Data reliability"],
      color: "secondary",
    },
    {
      icon: CloudCog,
      title: "Cloud-Ready Deployment",
      description: "Deploy applications to cloud platforms with best practices. Leverage AWS services for scalable, reliable infrastructure with basic CI/CD pipelines.",
      outcomes: ["Scalable infrastructure", "Cost-effective deployment", "AWS expertise"],
      color: "accent",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/20 hover:border-primary/40",
      secondary: "border-secondary/20 hover:border-secondary/40",
      accent: "border-accent/20 hover:border-accent/40",
    };
    return colors[color as keyof typeof colors];
  };

  const getIconBg = (color: string) => {
    const colors = {
      primary: "bg-primary/10",
      secondary: "bg-secondary/10",
      accent: "bg-accent/10",
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Services I <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end software solutions focused on scalability, maintainability, and performance
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate-scale">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`p-6 bg-card/50 backdrop-blur-sm transition-all hover:scale-105 group ${getColorClasses(service.color)}`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${getIconBg(service.color)}`}>
                  <service.icon className={`h-6 w-6 ${getIconColor(service.color)}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm">
                      <div className={`h-1.5 w-1.5 rounded-full ${getIconColor(service.color).replace('text-', 'bg-')}`} />
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  onClick={scrollToContact}
                  className="w-full justify-between group-hover:bg-muted/50"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="mt-16 text-center scroll-animate">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your project to life with modern, scalable solutions.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
