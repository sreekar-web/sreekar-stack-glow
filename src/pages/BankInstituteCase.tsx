import { useNavigate } from "react-router-dom";
import { ArrowLeft, Database, Lock, Code, BarChart, Users, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BankInstituteCase = () => {
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
              <span>Jun 2024 – Aug 2024</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Bank and Institute <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">App</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Salesforce-based application managing operations and data for banks and educational institutes using interconnected SQL tables
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Salesforce</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Data Modeling</Badge>
              <Badge variant="secondary">Integration</Badge>
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
                  A comprehensive Salesforce-based solution designed to manage the operations and data for both banking institutions and educational institutes. The system handles multiple interconnected entities through a robust SQL database architecture, emphasizing data modeling, integration, and platform customization.
                </p>
                <p>
                  This project showcases enterprise-level application development with complex data relationships, role-based access control, and integrated reporting capabilities for financial and academic operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Functional Requirements */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Functional Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Bank Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Create, update, delete bank accounts</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Track deposits, withdrawals, and transfers</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Generate account statements</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle>Institute Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>Add, update, delete student and staff records</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>Maintain courses, classes, and enrollments</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>Track academic history and performance</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Lock className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle>User Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Role-based access (Admin, Bank Officer, Institute Staff, Student)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Secure login and authentication</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>User profile management</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BarChart className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Reporting & Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Generate daily, monthly, and annual reports</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Visual dashboards for financial data</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Academic performance analytics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              System Architecture
            </h2>
            
            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Architecture Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
                  <pre className="text-sm overflow-x-auto">
{`[Frontend React App]
        |
        | REST API
        ↓
[Backend Node.js/Salesforce]
        |
        | SQL Queries
        ↓
   [Database]
        |
        ↓
  [Reporting Module]`}
                  </pre>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Frontend</h4>
                    <p className="text-sm text-muted-foreground">React.js dashboards and forms for user interaction</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Backend</h4>
                    <p className="text-sm text-muted-foreground">Salesforce + Node.js for API handling and business logic</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Database</h4>
                    <p className="text-sm text-muted-foreground">MySQL/PostgreSQL for structured data storage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Database Design
            </h2>
            
            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle>Entity-Relationship Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h4 className="font-semibold mb-3 text-primary">Users</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>user_id (PK)</div>
                        <div>name</div>
                        <div>email</div>
                        <div>password</div>
                        <div>role</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h4 className="font-semibold mb-3 text-primary">Banks</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>bank_id (PK)</div>
                        <div>name</div>
                        <div>location</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h4 className="font-semibold mb-3 text-secondary">Accounts</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>account_id (PK)</div>
                        <div>bank_id (FK)</div>
                        <div>user_id (FK)</div>
                        <div>account_type</div>
                        <div>balance</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h4 className="font-semibold mb-3 text-secondary">Transactions</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>txn_id (PK)</div>
                        <div>account_id (FK)</div>
                        <div>amount</div>
                        <div>txn_type</div>
                        <div>timestamp</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h4 className="font-semibold mb-3 text-accent">Institutes</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>institute_id (PK)</div>
                        <div>name</div>
                        <div>type</div>
                        <div>location</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h4 className="font-semibold mb-3 text-accent">Courses</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>course_id (PK)</div>
                        <div>institute_id (FK)</div>
                        <div>course_name</div>
                        <div>duration</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50 md:col-span-2">
                      <h4 className="font-semibold mb-3">Enrollments</h4>
                      <div className="space-y-1 text-sm text-muted-foreground font-mono">
                        <div>enrollment_id (PK)</div>
                        <div>student_id (FK → Users)</div>
                        <div>course_id (FK → Courses)</div>
                        <div>enrollment_date</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <h4 className="font-semibold mb-3">Key Relationships</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex gap-2">
                        <span className="text-primary">→</span>
                        <span>Users → Accounts (1:M)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary">→</span>
                        <span>Banks → Accounts (1:M)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-secondary">→</span>
                        <span>Accounts → Transactions (1:M)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-accent">→</span>
                        <span>Institutes → Courses (1:M)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-accent">→</span>
                        <span>Users (Students) ↔ Courses (M:N via Enrollments)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              API Documentation
            </h2>
            
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  REST API Endpoints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { method: "POST", endpoint: "/users/login", desc: "Authenticate user", request: "{email, password}", response: "{token, userId, role}" },
                    { method: "GET", endpoint: "/accounts", desc: "Fetch all accounts", request: "-", response: "[{account details}]" },
                    { method: "POST", endpoint: "/accounts", desc: "Create new account", request: "{user_id, bank_id, type, initial_balance}", response: "{account_id, status}" },
                    { method: "GET", endpoint: "/transactions", desc: "Get transaction history", request: "?account_id=", response: "[{txn details}]" },
                    { method: "POST", endpoint: "/transactions", desc: "Record new transaction", request: "{account_id, amount, txn_type}", response: "{txn_id, status}" },
                    { method: "GET", endpoint: "/institutes", desc: "List all institutes", request: "-", response: "[{institute details}]" },
                    { method: "GET", endpoint: "/courses", desc: "List courses for institute", request: "?institute_id=", response: "[{course details}]" },
                    { method: "POST", endpoint: "/enrollments", desc: "Enroll student in course", request: "{student_id, course_id}", response: "{enrollment_id, status}" },
                  ].map((api, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant={api.method === "GET" ? "secondary" : "default"}>
                          {api.method}
                        </Badge>
                        <code className="text-sm text-primary">{api.endpoint}</code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{api.desc}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="font-semibold">Request:</span>
                          <code className="ml-2 text-muted-foreground">{api.request}</code>
                        </div>
                        <div>
                          <span className="font-semibold">Response:</span>
                          <code className="ml-2 text-muted-foreground">{api.response}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center animate-fade-in">
              Technology Stack
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Frontend Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge>React.js</Badge>
                    <span className="text-sm text-muted-foreground">UI Framework</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>HTML5/CSS3</Badge>
                    <span className="text-sm text-muted-foreground">Markup & Styling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>JavaScript</Badge>
                    <span className="text-sm text-muted-foreground">Client Logic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>Chart.js</Badge>
                    <span className="text-sm text-muted-foreground">Data Visualization</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle>Backend Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge>Salesforce</Badge>
                    <span className="text-sm text-muted-foreground">CRM Platform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>Node.js</Badge>
                    <span className="text-sm text-muted-foreground">API Server</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>MySQL/PostgreSQL</Badge>
                    <span className="text-sm text-muted-foreground">Database</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>JWT</Badge>
                    <span className="text-sm text-muted-foreground">Authentication</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Testing */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Security Measures
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Role-based access control (Admin, Officer, Staff, Student)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>HTTPS encryption for all communications</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Password hashing with bcrypt</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>SQL injection prevention with prepared statements</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-secondary" />
                    Performance & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Handles 500 concurrent users</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>System uptime ≥ 99%</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Unit & integration testing coverage</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Load testing for performance validation</span>
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
            
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>Successfully implemented a scalable architecture handling complex relationships between banking and educational data models</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>Designed and deployed a comprehensive SQL database schema with proper normalization and foreign key constraints</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>Integrated Salesforce platform capabilities with custom backend APIs for seamless data flow and business logic execution</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>Implemented role-based access control ensuring data security and appropriate user permissions across multiple user types</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>Delivered reporting and analytics capabilities providing actionable insights for both financial and academic operations</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Interested in Similar Solutions?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help build scalable applications for your organization.
            </p>
            <Button onClick={() => navigate("/#contact")} size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankInstituteCase;
