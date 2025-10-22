import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sreekar-rachakonda-34b9a4321",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rachakondasreekar9@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
    },
  ];

  return (
    <footer className="py-12 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sreekar Rachakonda
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Software Engineer building scalable, cloud-ready applications.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-primary transition-colors"
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() => scrollToSection(link.id)}
                    className="justify-start text-muted-foreground hover:text-foreground text-sm"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Atlanta, Georgia, US</p>
                <p>
                  <a
                    href="mailto:rachakondasreekar9@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    rachakondasreekar9@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:470-965-3789"
                    className="hover:text-primary transition-colors"
                  >
                    470-965-3789
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Sreekar Rachakonda. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
