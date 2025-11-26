import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const titleRef = useScrollAnimation();
  const experience1Ref = useScrollAnimation();
  const experience2Ref = useScrollAnimation();
  const experiences = [
    {
      company: "Qbarters Pvt Ltd",
      location: "Bangalore, India",
      role: "Junior Software Engineer",
      period: "Jul 2021 – Dec 2022",
      achievements: [
        "Created and sustained 6 software applications with an 85% average bug-free code deployment rate.",
        "Designed and implemented a payment page using JavaScript Payment SDK and integrated it with SQL database for transaction tracking.",
        "Built real-time delivery tracking system using JavaScript, WebSockets, and SQL to deliver live updates and enhance customer experience.",
        "Implemented features using Python, JavaScript, and SQL with relational data management via primary keys.",
        "Collaborated with product, design, and QA teams to deliver projects on time."
      ]
    },
    {
      company: "Letsgettin Pvt Ltd",
      location: "Bangalore, India",
      role: "Software Engineer Intern",
      period: "Jan 2021 – Jun 2021",
      achievements: [
        "Fixed bugs during product deployment and improved code quality.",
        "Participated in sprint planning, learning agile workflows and project tracking.",
        "Created case models based on business requirements and product goals."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">My professional journey in software development</p>
          </div>

          <div className="space-y-8">
            <Card 
              ref={experience1Ref}
              className="p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all scroll-animate-left"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{experiences[0].role}</h3>
                    <p className="text-lg text-foreground mb-1">{experiences[0].company}</p>
                    <p className="text-sm text-muted-foreground">{experiences[0].location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground lg:shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{experiences[0].period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {experiences[0].achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card 
              ref={experience2Ref}
              className="p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all scroll-animate-right"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{experiences[1].role}</h3>
                    <p className="text-lg text-foreground mb-1">{experiences[1].company}</p>
                    <p className="text-sm text-muted-foreground">{experiences[1].location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground lg:shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{experiences[1].period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {experiences[1].achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
