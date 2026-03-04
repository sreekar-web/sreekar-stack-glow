import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cloud, Zap, Database, Shield, GitBranch, Activity, AlertTriangle, Server, CheckCircle2, ArrowRight, Box, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServerlessOrderCase = () => {
  const navigate = useNavigate();

  const architectureFlow = [
    { label: "Client", icon: Server, desc: "HTTP POST request" },
    { label: "API Gateway", icon: Cloud, desc: "Request routing" },
    { label: "CreateOrder λ", icon: Zap, desc: "Validation & enqueue" },
    { label: "SQS Queue", icon: Box, desc: "Async buffering" },
    { label: "ProcessOrder λ", icon: Zap, desc: "Order processing" },
    { label: "DynamoDB", icon: Database, desc: "Persistent storage" },
  ];

  const cicdSteps = [
    { step: "Push", desc: "Developer pushes code to GitHub repository" },
    { step: "Test", desc: "GitHub Actions runs Jest unit tests" },
    { step: "Build", desc: "SAM builds the serverless application" },
    { step: "Deploy", desc: "CloudFormation deploys infrastructure to AWS" },
  ];

  const features = [
    { icon: Zap, title: "Event-Driven Architecture", desc: "Decoupled microservices communicating through SQS queues for maximum scalability and resilience." },
    { icon: Box, title: "Queue-Based Processing", desc: "Asynchronous order processing ensures no requests are lost, even under heavy load." },
    { icon: AlertTriangle, title: "Dead Letter Queue", desc: "Failed messages are automatically routed to a DLQ for retry or manual investigation." },
    { icon: Layers, title: "Infrastructure as Code", desc: "Entire stack defined with AWS SAM templates for repeatable, version-controlled deployments." },
    { icon: GitBranch, title: "CI/CD Automation", desc: "GitHub Actions pipeline automates testing, building, and deploying on every push." },
    { icon: Activity, title: "CloudWatch Observability", desc: "Structured logging and monitoring across all Lambda functions for debugging and alerting." },
    { icon: Shield, title: "IAM Least-Privilege", desc: "Each Lambda function has precisely scoped IAM roles — no over-permissioned resources." },
    { icon: CheckCircle2, title: "Unit Testing", desc: "Jest test suites validate business logic before deployment through the CI/CD pipeline." },
  ];

  const awsServices = [
    "AWS Lambda", "Amazon API Gateway", "Amazon SQS", "Amazon DynamoDB",
    "Amazon CloudWatch", "AWS IAM", "AWS CloudFormation", "AWS SAM",
  ];

  const devTools = [
    "Node.js", "Jest", "GitHub", "GitHub Actions",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">AWS Serverless</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Serverless Order{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Processing System
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A production-style event-driven backend built entirely on AWS, simulating how a real e-commerce platform processes customer orders asynchronously and reliably.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["AWS Lambda", "API Gateway", "SQS", "DynamoDB", "SAM", "GitHub Actions", "Node.js", "Jest"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              Project <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Overview</span>
            </h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                This project implements an event-driven backend system where incoming API requests are processed through a queue-based architecture to ensure scalability, reliability, and fault tolerance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It demonstrates how modern cloud systems handle asynchronous workloads and scalable backend processing using serverless technologies — showcasing skills in cloud architecture, infrastructure as code, CI/CD automation, distributed systems, and observability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              System <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Architecture</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Requests flow through a fully decoupled pipeline — from ingestion to persistent storage
            </p>

            {/* Main flow */}
            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-0 mb-8">
              {architectureFlow.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm text-center min-w-[130px] border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                    <step.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold text-sm">{step.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                  </Card>
                  {i < architectureFlow.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground mx-1 hidden lg:block shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* DLQ branch */}
            <div className="flex justify-center">
              <Card className="p-4 bg-destructive/5 border-destructive/20 text-center max-w-xs">
                <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-destructive" />
                <p className="font-semibold text-sm">Dead Letter Queue</p>
                <p className="text-xs text-muted-foreground mt-1">Failed messages routed here for retry / investigation</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Request <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Workflow</span>
            </h2>
            <div className="space-y-6">
              {[
                "A client sends an HTTP POST request to create an order.",
                "Amazon API Gateway receives the request and triggers a Lambda function.",
                "The CreateOrder Lambda validates the request and sends the order message to an Amazon SQS queue.",
                "A worker Lambda function (ProcessOrder) is automatically triggered by the queue.",
                "The worker processes the order and stores it in Amazon DynamoDB.",
                "If processing fails, the message is sent to a Dead Letter Queue for retry or investigation.",
                "Logs and execution details are recorded in Amazon CloudWatch.",
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <Card className="flex-1 p-4 bg-card/50 backdrop-blur-sm">
                    <p className="text-muted-foreground">{step}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Key <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Pipeline */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              CI/CD <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pipeline</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {cicdSteps.map((s, i) => (
                <div key={s.step} className="flex-1 flex flex-col items-center">
                  <Card className="p-6 bg-card/50 backdrop-blur-sm text-center w-full h-full border-secondary/20 hover:border-secondary/40 transition-all">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-secondary">{i + 1}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{s.step}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </Card>
                  {i < cicdSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground my-2 rotate-90 md:rotate-0 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Technologies <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Used</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" /> AWS Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {awsServices.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" /> Development Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devTools.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              Key <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Outcomes</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "100%", label: "Serverless" },
                { metric: "Zero", label: "Data Loss" },
                { metric: "Auto", label: "Scaling" },
                { metric: "Full", label: "CI/CD" },
              ].map((o) => (
                <Card key={o.label} className="p-6 bg-card/50 backdrop-blur-sm border-accent/20">
                  <p className="text-3xl font-bold text-primary mb-1">{o.metric}</p>
                  <p className="text-muted-foreground text-sm">{o.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Interested in serverless architecture?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how event-driven systems can power your next project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => navigate("/")} variant="outline">View More Projects</Button>
                <Button onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300); }}>
                  Get in Touch
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServerlessOrderCase;
