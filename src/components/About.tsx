import { GraduationCap, Award, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const titleRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();
  const bioRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">Get to know more about my background and journey</p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-12 scroll-animate">
            {/* Education Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-foreground mb-1">MS, Computer Science</p>
                  <p className="text-sm text-muted-foreground mb-2">University of Alabama at Birmingham</p>
                  <Badge variant="secondary" className="text-xs">Graduated May 2025</Badge>
                </div>
              </div>
            </Card>

            {/* Certification Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Certification</h3>
                  <p className="text-foreground mb-1">AWS Developer Associate</p>
                  <p className="text-sm text-muted-foreground mb-2">Amazon Web Services</p>
                  <Badge variant="outline" className="text-xs border-secondary/50">Certified</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Bio Section */}
          <Card ref={bioRef} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/40 transition-all scroll-animate">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm an aspiring AWS and Cloud Developer with hands-on experience in enterprise ERP environments. Currently working as an EDI Developer at Zentech Consulting, I specialize in system integration and data exchange using SEEBURGER BIS within ERP landscapes — giving me a strong foundation in how enterprise systems communicate at scale.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With a Master's in Computer Science from the University of Alabama at Birmingham and an AWS Developer Associate certification, I'm focused on transitioning into cloud-native development. I've built serverless architectures using Lambda, API Gateway, SQS, and DynamoDB, and deployed production workloads with S3, CloudFront, and CI/CD pipelines through GitHub Actions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My goal is to combine my ERP integration expertise with cloud engineering skills to design scalable, event-driven systems on AWS. I bring a unique blend of enterprise software experience and modern cloud development practices to every project I take on.
              </p>

              {/* Availability Banner */}
              <div className="pt-4 mt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-foreground font-medium">Based in Dallas, Texas</p>
                    <p className="text-sm text-muted-foreground">Actively seeking full-time opportunities in both software & cloud development roles</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
