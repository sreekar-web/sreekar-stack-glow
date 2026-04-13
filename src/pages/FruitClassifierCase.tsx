import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, Layers, BarChart3, Eye, Upload, FlaskConical, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import confusionImg from "@/assets/fruit-classifier-confusion.png";
import gradcam1 from "@/assets/fruit-classifier-gradcam1.png";
import gradcam2 from "@/assets/fruit-classifier-gradcam2.png";
import webImg from "@/assets/fruit-classifier-web.png";
import webImg1 from "@/assets/fruit-classifier-web1.png";
import webImg2 from "@/assets/fruit-classifier-web2.png";

const FruitClassifierCase = () => {
  const navigate = useNavigate();

  const architectureBlocks = [
    { block: "Block 1", filters: "32", description: "Conv2d → BatchNorm → ReLU → MaxPool → Dropout — extracts low-level features like edges and textures" },
    { block: "Block 2", filters: "64", description: "Conv2d → BatchNorm → ReLU → MaxPool → Dropout — captures mid-level patterns like color gradients and shapes" },
    { block: "Block 3", filters: "128", description: "Conv2d → BatchNorm → ReLU → MaxPool → Dropout — learns high-level abstractions for ripeness indicators" },
    { block: "Head", filters: "FC", description: "Flatten → Fully Connected → Dropout → 3-class output scores (ripe, rotten, unripe)" },
  ];

  const trainingDetails = [
    { icon: Target, title: "Loss Function", description: "CrossEntropyLoss with class weights to handle the imbalanced dataset (rotten was overrepresented)" },
    { icon: TrendingUp, title: "Optimizer & Scheduler", description: "Adam optimizer with StepLR scheduler decaying the learning rate every 7 epochs over 25 total epochs" },
    { icon: Layers, title: "Data Augmentation", description: "Random flips, rotations, and color jitter applied during training to improve generalization" },
    { icon: FlaskConical, title: "Dataset", description: "39,000+ images of apples, bananas, and oranges from Kaggle — remapped into 3 unified ripeness classes with 70/15/15 stratified split" },
  ];

  const results = [
    { metric: "94%", label: "Validation Accuracy" },
    { metric: "92%", label: "Test Accuracy" },
    { metric: "0.92", label: "Macro F1 Score" },
    { metric: "25", label: "Epochs Trained" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Apr 2026</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Fruit Ripeness <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Classifier</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              CNN built from scratch in PyTorch to classify fruit images into ripe, unripe, and rotten — with Grad-CAM explainability and a Streamlit demo
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">CNN</Badge>
              <Badge variant="secondary">Grad-CAM</Badge>
              <Badge variant="secondary">Streamlit</Badge>
              <Badge variant="secondary">Computer Vision</Badge>
              <Badge variant="secondary">Python</Badge>
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
                A computer vision project that classifies fruit images into three ripeness stages — ripe, unripe, and rotten — using a convolutional neural network built entirely from scratch in PyTorch, without any pretrained models or managed ML services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This project was built as a deliberate follow-up to a prior AWS-based image detection pipeline that used Amazon Rekognition. That project showed what managed ML services can do. This one rebuilt the core from scratch to understand how it actually works — convolutional filters, backpropagation, gradient flow, model interpretability — the full picture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The dataset consists of 39,000+ images of apples, bananas, and oranges sourced from Kaggle, originally organized across 9 fruit/ripeness combinations. A custom preprocessing script remapped these into 3 unified ripeness classes and split them into train, validation, and test sets at a 70/15/15 ratio with stratified sampling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlit Demo Screenshots */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Streamlit Demo</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Upload any fruit photo and instantly see the ripeness prediction, confidence scores, and Grad-CAM heatmaps
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[webImg, webImg1, webImg2].map((src, index) => (
                <Card key={index} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
                  <img src={src} alt={`Fruit classifier demo screenshot ${index + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CNN Architecture */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">CNN Architecture</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              A custom 3-block CNN progressively increasing filter depth from 32 → 64 → 128 channels
            </p>
            <div className="space-y-4">
              {architectureBlocks.map((item, index) => (
                <div key={item.block} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-16 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{item.filters}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.block}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Training Pipeline</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingDetails.map((item, index) => (
                <Card key={item.title} className="bg-card/50 backdrop-blur-sm border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Results</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {results.map((r, index) => (
                <Card key={r.label} className="bg-card/50 backdrop-blur-sm border-border/50 text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6">
                    <h3 className="text-3xl font-bold text-primary mb-2">{r.metric}</h3>
                    <p className="text-muted-foreground text-sm">{r.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Confusion Matrix */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">Confusion Matrix & Classification Report</h3>
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
                <img src={confusionImg} alt="Confusion matrix and classification report for the fruit ripeness classifier" className="w-full h-auto object-cover" loading="lazy" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Grad-CAM Explainability */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Grad-CAM Explainability</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Implemented from scratch — hooks into the final convolutional layer, captures gradients and activations during the backward pass, and generates heatmaps showing which regions most influenced the prediction
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[gradcam1, gradcam2].map((src, index) => (
                <Card key={index} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
                  <img src={src} alt={`Grad-CAM visualization ${index + 1}`} className="w-full h-auto object-cover" loading="lazy" />
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
              {["PyTorch", "Python", "CNN (from scratch)", "Grad-CAM", "Streamlit", "NumPy", "Matplotlib", "Seaborn", "Kaggle Dataset", "Computer Vision"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in This Project?</h2>
            <p className="text-muted-foreground mb-8">
              This project demonstrates building deep learning models from scratch with full interpretability. Let's discuss how similar approaches can solve your challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => { navigate("/"); setTimeout(() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), 300); }}>
                View More Projects
              </Button>
              <Button variant="outline" onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300); }}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FruitClassifierCase;
