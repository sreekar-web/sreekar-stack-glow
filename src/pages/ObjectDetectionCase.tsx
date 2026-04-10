import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cloud, Eye, Database, Lock, Zap, Server, Globe, Upload, Image, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ObjectDetectionCase = () => {
  const navigate = useNavigate();

  const awsServices = [
    {
      icon: Cloud,
      name: "Amazon S3",
      description: "Hosts the frontend application (index.html) and stores uploaded images for processing.",
    },
    {
      icon: Globe,
      name: "CloudFront",
      description: "CDN that serves the frontend globally with low latency and caching for optimal performance.",
    },
    {
      icon: Server,
      name: "API Gateway",
      description: "Exposes RESTful endpoints that trigger Lambda functions for image upload and retrieval.",
    },
    {
      icon: Zap,
      name: "AWS Lambda",
      description: "Serverless compute that processes images by invoking Rekognition and storing results in DynamoDB.",
    },
    {
      icon: Eye,
      name: "Amazon Rekognition",
      description: "AI-powered computer vision service that detects and labels objects within uploaded images.",
    },
    {
      icon: Database,
      name: "DynamoDB",
      description: "NoSQL database that persists detection results with fast, single-digit millisecond retrieval.",
    },
    {
      icon: Lock,
      name: "IAM",
      description: "Fine-grained access control ensuring least-privilege permissions across all AWS services.",
    },
  ];

  const architectureFlow = [
    { step: "1", label: "User Upload", description: "User uploads an image through the CloudFront-served frontend" },
    { step: "2", label: "API Gateway", description: "RESTful endpoint receives the request and triggers Lambda" },
    { step: "3", label: "Lambda Processing", description: "Lambda function sends the image to Rekognition for analysis" },
    { step: "4", label: "Object Detection", description: "Rekognition identifies objects, scenes, and labels with confidence scores" },
    { step: "5", label: "Store Results", description: "Detection results are persisted in DynamoDB for fast retrieval" },
    { step: "6", label: "Return Response", description: "Labeled results are returned to the frontend for display" },
  ];

  const features = [
    {
      icon: Upload,
      title: "Image Upload",
      description: "Drag-and-drop or click-to-upload interface for seamless image submission to the processing pipeline.",
    },
    {
      icon: Search,
      title: "AI Object Detection",
      description: "Leverages Amazon Rekognition to detect objects, scenes, and activities with confidence scoring.",
    },
    {
      icon: BarChart3,
      title: "Results Dashboard",
      description: "Displays detected labels with confidence percentages and bounding box visualizations.",
    },
    {
      icon: Database,
      title: "Persistent Storage",
      description: "All detection results are stored in DynamoDB, enabling historical lookups and analytics.",
    },
  ];

  const outcomes = [
    { metric: "Fully Serverless", description: "Zero server management with auto-scaling Lambda functions" },
    { metric: "Global Delivery", description: "CloudFront CDN ensures sub-100ms frontend load times worldwide" },
    { metric: "AI-Powered", description: "Rekognition provides enterprise-grade object detection without ML expertise" },
    { metric: "Cost Efficient", description: "Pay-per-use pricing across all services — no idle compute costs" },
  ];

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
              <span>Apr 2026</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              AWS <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Object Detection</span> System
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Serverless image recognition pipeline powered by AWS Rekognition, Lambda, and DynamoDB for real-time object detection and labeling
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">AWS Lambda</Badge>
              <Badge variant="secondary">Rekognition</Badge>
              <Badge variant="secondary">DynamoDB</Badge>
              <Badge variant="secondary">API Gateway</Badge>
              <Badge variant="secondary">CloudFront</Badge>
              <Badge variant="secondary">S3</Badge>
              <Badge variant="secondary">IAM</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This project demonstrates a fully serverless image recognition system built on AWS. Users upload images through a CloudFront-served frontend hosted on S3. The image is sent via API Gateway to a Lambda function, which invokes Amazon Rekognition to detect and label objects within the image.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Detection results — including labels, confidence scores, and metadata — are persisted in DynamoDB for fast retrieval and historical analysis. The entire architecture follows serverless best practices with IAM enforcing least-privilege access across all service interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">AWS Services Architecture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awsServices.map((service, index) => (
                <Card key={service.name} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Processing Pipeline</h2>
            <div className="space-y-4">
              {architectureFlow.map((item, index) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  {index < architectureFlow.length - 1 && (
                    <div className="hidden md:block ml-auto text-muted-foreground/30 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-card/50 backdrop-blur-sm border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <feature.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & IAM */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Security & IAM</h2>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" />
                      Access Control
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• IAM roles with least-privilege policies</li>
                      <li>• Lambda execution roles scoped per service</li>
                      <li>• S3 bucket policies restricting public access</li>
                      <li>• CloudFront Origin Access Identity for S3</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" />
                      Data Protection
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• HTTPS enforced via CloudFront</li>
                      <li>• API Gateway request validation</li>
                      <li>• DynamoDB encryption at rest</li>
                      <li>• S3 server-side encryption for stored images</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => (
                <Card key={outcome.metric} className="bg-card/50 backdrop-blur-sm border-border/50 text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-primary mb-2">{outcome.metric}</h3>
                    <p className="text-muted-foreground text-sm">{outcome.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Amazon S3", "CloudFront", "API Gateway", "AWS Lambda", "Amazon Rekognition", "DynamoDB", "IAM", "HTML/CSS/JS", "Serverless Architecture"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in This Architecture?</h2>
            <p className="text-muted-foreground mb-8">
              This project showcases serverless AI integration on AWS. Let's discuss how similar architectures can solve your challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), 300);
                }}
              >
                View More Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObjectDetectionCase;
