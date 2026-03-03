import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cloud, Globe, Lock, GitBranch, Server, Shield, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AWSCloudCase = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <span>2025</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Portfolio on <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AWS Cloud</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Static portfolio website deployed with S3, CloudFront CDN, ACM SSL, and GitHub Actions CI/CD for automated global delivery
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">AWS S3</Badge>
              <Badge variant="secondary">CloudFront</Badge>
              <Badge variant="secondary">ACM</Badge>
              <Badge variant="secondary">CI/CD</Badge>
              <Badge variant="secondary">GitHub Actions</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Deployed a personal portfolio website on AWS using a production-grade architecture. Amazon S3 serves as the origin for static assets, while CloudFront provides global CDN distribution with edge caching for low-latency delivery worldwide.
                </p>
                <p>
                  AWS Certificate Manager (ACM) provisions and validates SSL/TLS certificates for secure HTTPS access on a custom domain. A GitHub Actions CI/CD pipeline automates the entire build-and-deploy workflow, ensuring every push to the main branch triggers a fresh deployment with CloudFront cache invalidation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Key Components
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Server className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Amazon S3</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Static website hosting as CloudFront origin</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Bucket policy restricted to CloudFront OAI</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Versioning-friendly deployment with <code className="text-xs bg-muted px-1 rounded">--delete</code> sync</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Globe className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle>CloudFront CDN</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>Global edge caching for low-latency delivery</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>Custom domain with HTTPS enforcement</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>Automatic cache invalidation on deploy</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Lock className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle>ACM (SSL/TLS)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Free SSL certificate provisioning</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>DNS-based CNAME validation</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Auto-renewal for zero-downtime security</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GitBranch className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>GitHub Actions CI/CD</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Triggered on push to <code className="text-xs bg-muted px-1 rounded">main</code> branch</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Automated build, S3 sync, and cache invalidation</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Secure IAM credentials via GitHub Secrets</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Deployment Architecture
            </h2>

            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  Architecture Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
                  <div className="space-y-6">
                    {/* Flow diagram */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div className="text-center space-y-2">
                        <div className="p-3 bg-primary/10 rounded-lg mx-auto w-fit">
                          <GitBranch className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-sm font-semibold">GitHub</div>
                        <div className="text-xs text-muted-foreground">Push to main</div>
                      </div>

                      <div className="text-center text-muted-foreground hidden md:block">→</div>

                      <div className="text-center space-y-2">
                        <div className="p-3 bg-secondary/10 rounded-lg mx-auto w-fit">
                          <RefreshCw className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="text-sm font-semibold">CI/CD Pipeline</div>
                        <div className="text-xs text-muted-foreground">Build & Deploy</div>
                      </div>

                      <div className="text-center text-muted-foreground hidden md:block">→</div>

                      <div className="text-center space-y-2">
                        <div className="p-3 bg-accent/10 rounded-lg mx-auto w-fit">
                          <Server className="h-6 w-6 text-accent" />
                        </div>
                        <div className="text-sm font-semibold">S3 Bucket</div>
                        <div className="text-xs text-muted-foreground">Static Origin</div>
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="text-center space-y-2">
                          <div className="p-3 bg-accent/10 rounded-lg mx-auto w-fit">
                            <Server className="h-6 w-6 text-accent" />
                          </div>
                          <div className="text-sm font-semibold">S3 Origin</div>
                        </div>

                        <div className="text-center space-y-2">
                          <div className="p-3 bg-secondary/10 rounded-lg mx-auto w-fit">
                            <Globe className="h-6 w-6 text-secondary" />
                          </div>
                          <div className="text-sm font-semibold">CloudFront CDN</div>
                          <div className="text-xs text-muted-foreground">Edge Caching</div>
                        </div>

                        <div className="text-center space-y-2">
                          <div className="p-3 bg-primary/10 rounded-lg mx-auto w-fit">
                            <Lock className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-sm font-semibold">ACM + DNS</div>
                          <div className="text-xs text-muted-foreground">HTTPS + Custom Domain</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
                      GitHub Push → Actions Build → S3 Sync → CloudFront Invalidation → Global HTTPS Delivery
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CI/CD Pipeline Details */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              CI/CD Pipeline
            </h2>

            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle>GitHub Actions Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    {[
                      { step: "1", title: "Checkout", desc: "Clone repository code", color: "primary" },
                      { step: "2", title: "Setup Node.js", desc: "Install Node.js v18 environment", color: "primary" },
                      { step: "3", title: "Install Dependencies", desc: "Run npm ci for clean install", color: "secondary" },
                      { step: "4", title: "Build", desc: "Generate production bundle in dist/", color: "secondary" },
                      { step: "5", title: "Configure AWS Credentials", desc: "Authenticate via IAM access keys from GitHub Secrets", color: "accent" },
                      { step: "6", title: "Sync to S3", desc: "Upload dist/ to S3 bucket with --delete flag", color: "accent" },
                      { step: "7", title: "Invalidate CloudFront", desc: "Clear CDN cache for /* paths", color: "primary" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 mb-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-${item.color}/20 flex items-center justify-center text-sm font-bold text-${item.color}`}>
                          {item.step}
                        </div>
                        <div className="flex-1 pb-4 border-b border-border/30 last:border-0">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & IAM */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Security & IAM
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>IAM Configuration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Dedicated IAM user for CI/CD deployments</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Least-privilege S3 and CloudFront policies</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Access keys stored as GitHub Secrets</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Lock className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle>HTTPS & DNS</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>ACM-provisioned SSL certificate</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>DNS CNAME validation for domain ownership</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>HTTPS-only with HTTP → HTTPS redirect</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Key Outcomes
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 animate-fade-in">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Sub-second page loads via CloudFront edge caching across 400+ global PoPs
                </p>
              </Card>

              <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Automated Deploys</h3>
                <p className="text-sm text-muted-foreground">
                  Push-to-deploy workflow — every commit to main auto-builds and ships to production
                </p>
              </Card>

              <Card className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Secure by Default</h3>
                <p className="text-sm text-muted-foreground">
                  HTTPS-only with ACM certificates, least-privilege IAM, and no public S3 access
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Technologies Used
            </h2>
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Amazon S3", desc: "Object storage & hosting" },
                    { name: "CloudFront", desc: "CDN & edge caching" },
                    { name: "ACM", desc: "SSL/TLS certificates" },
                    { name: "IAM", desc: "Access management" },
                    { name: "GitHub Actions", desc: "CI/CD automation" },
                    { name: "Route 53 / DNS", desc: "Domain routing" },
                  ].map((tech) => (
                    <div key={tech.name} className="p-3 bg-muted/50 rounded-lg border border-border/50 text-center">
                      <div className="font-medium text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Button onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AWSCloudCase;
