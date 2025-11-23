import { Download, Mail, ExternalLink, MapPin, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift bg-300%" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 gap-2 py-1.5 px-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Ready to Innovate
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Sreekar</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Rachakonda
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Full-Stack Software Engineer
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                I build scalable, cloud-ready web applications end-to-end.
              </p>

              {/* Quick Facts */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="outline" className="gap-2 py-2 px-4 border-primary/30 hover:border-primary/50 transition-colors">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>MS CS @ UAB (2025)</span>
                </Badge>
                <Badge variant="outline" className="gap-2 py-2 px-4 border-secondary/30 hover:border-secondary/50 transition-colors">
                  <Award className="h-4 w-4 text-secondary" />
                  <span>AWS Developer Associate</span>
                </Badge>
                <Badge variant="outline" className="gap-2 py-2 px-4 border-accent/30 hover:border-accent/50 transition-colors">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Atlanta, GA</span>
                </Badge>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 text-foreground"
              >
                Hire Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="/Sreekar_Rachakonda_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Availability Banner */}
            <div className="inline-block">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-semibold">Actively seeking opportunities</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 animate-glow-pulse" />
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/20 via-card to-secondary/20 backdrop-blur-sm overflow-hidden animate-float">
                <img 
                  src={profilePhoto} 
                  alt="Sreekar Rachakonda - Software Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
