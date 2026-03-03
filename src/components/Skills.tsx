import { Code2, Database, Cloud, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import awsCertificate from "@/assets/aws-certificate.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const titleRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const certsRef = useScrollAnimation();
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "primary",
      skills: ["JavaScript", "TypeScript", "React", "HTML/CSS", "PWA"],
    },
    {
      icon: Layers,
      title: "Backend",
      color: "secondary",
      skills: ["Python", "Node.js", "REST APIs", "Salesforce"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "accent",
      skills: ["SQL", "PostgreSQL", "Database Design", "Data Modeling"],
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      color: "primary",
      skills: ["AWS", "Cloud Deployment", "Git", "CI/CD Basics"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/20 hover:border-primary/40 bg-primary/5",
      secondary: "border-secondary/20 hover:border-secondary/40 bg-secondary/5",
      accent: "border-accent/20 hover:border-accent/40 bg-accent/5",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getIconColor = (color: string) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies and cloud platforms, with a focus on building scalable solutions
            </p>
          </div>

          <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate-scale">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className={`p-6 backdrop-blur-sm transition-all hover:scale-105 ${getColorClasses(category.color)}`}
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-card/50`}>
                    <category.icon className={`h-6 w-6 ${getIconColor(category.color)}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs py-1 px-3 hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* AWS Certifications */}
          <div ref={certsRef} className="mt-12 space-y-4 scroll-animate">
            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/30 hover:border-secondary/50 transition-all">
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.credly.com/badges/d18d4d5c-5fea-4582-b884-65f83812ab86/linked_in?t=t5w34b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 group cursor-pointer"
                >
                  <img 
                    src={awsCertificate} 
                    alt="AWS Developer Associate Certificate" 
                    className="h-24 w-auto rounded-lg border-2 border-secondary/30 group-hover:border-secondary transition-all group-hover:scale-105 shadow-lg"
                  />
                </a>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary/20">
                    <Cloud className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">AWS Developer Associate Certified</p>
                    <p className="text-sm text-muted-foreground">Application development, deployment, and debugging on AWS</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Click certificate to view full credentials</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.credly.com/badges/c799d536-c41e-491c-9254-b9418f268fc6/linked_in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 group cursor-pointer"
                >
                  <img 
                    src={awsCertificate} 
                    alt="AWS Cloud Practitioner Certificate" 
                    className="h-24 w-auto rounded-lg border-2 border-accent/30 group-hover:border-accent transition-all group-hover:scale-105 shadow-lg"
                  />
                </a>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Cloud className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">AWS Cloud Practitioner Certified</p>
                    <p className="text-sm text-muted-foreground">Cloud fundamentals, deployment strategies, and AWS services</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Click certificate to view full credentials</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
