import { ArrowLeft, Database, Users, GraduationCap, FileText, Shield, BarChart3, Calendar, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const StudentDatabaseCase = () => {
  const navigate = useNavigate();

  const technologies = [
    "Python",
    "FastAPI/Flask",
    "PostgreSQL",
    "React",
    "TypeScript",
    "AWS S3",
    "Redis",
    "JWT Auth",
    "Celery",
    "Docker"
  ];

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete CRUD operations for student records with document storage and profile management"
    },
    {
      icon: GraduationCap,
      title: "Course & Enrollment",
      description: "Manage courses, sections, schedules, and student enrollments with capacity checks"
    },
    {
      icon: BarChart3,
      title: "Grades & GPA",
      description: "Automated grade entry, weighted calculations, and GPA computation with configurable scales"
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Session-based attendance marking with automated reports and eligibility tracking"
    },
    {
      icon: FileText,
      title: "Transcript Generation",
      description: "Async PDF generation of official transcripts with complete academic history"
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "RBAC with roles for Admin, Registrar, Faculty, Student, and Viewer with audit logging"
    }
  ];

  const metrics = [
    { label: "Students Supported", value: "50K+" },
    { label: "Response Time", value: "<2s" },
    { label: "Uptime", value: "99%" },
    { label: "System Availability", value: "24/7" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <Badge variant="secondary">Feb 2022 – Jun 2022</Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Student Database System
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive web application for managing student academic data across educational institutes, featuring student profiles, course management, grade tracking, attendance, and automated transcript generation with role-based access control.
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              
              <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Educational institutions needed a centralized system to manage complex academic data including student profiles, course enrollments, grades, attendance tracking, and transcript generation. The system had to support multiple user roles (Admin, Registrar, Faculty, Students) with appropriate access controls while maintaining data integrity and FERPA/GDPR compliance.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a full-stack web application with Python backend (FastAPI) and React frontend, featuring comprehensive student management, automated GPA calculations, attendance tracking, and asynchronous transcript generation. Implemented RBAC with JWT authentication, audit logging, and bulk import/export capabilities for efficient data management across departments supporting up to 50,000 students.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <Card key={feature.title} className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
              
              <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Architecture Components</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 bg-muted/50 p-6 rounded-lg border border-border">
                    <div className="space-y-3">
                      <div className="font-semibold text-primary">Frontend Layer</div>
                      <div className="space-y-2">
                        <div className="p-2 bg-primary/10 rounded text-sm">React SPA + TypeScript</div>
                        <div className="p-2 bg-primary/10 rounded text-sm">React Query (data fetching)</div>
                        <div className="p-2 bg-primary/10 rounded text-sm">Tailwind CSS</div>
                        <div className="p-2 bg-primary/10 rounded text-sm">Admin/Faculty/Student portals</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="font-semibold text-secondary">Backend Services</div>
                      <div className="space-y-2">
                        <div className="p-2 bg-secondary/10 rounded text-sm">Python FastAPI</div>
                        <div className="p-2 bg-secondary/10 rounded text-sm">JWT Auth + RBAC</div>
                        <div className="p-2 bg-secondary/10 rounded text-sm">RESTful APIs</div>
                        <div className="p-2 bg-secondary/10 rounded text-sm">Async request handling</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="font-semibold text-accent">Data & Jobs</div>
                      <div className="space-y-2">
                        <div className="p-2 bg-accent/10 rounded text-sm">PostgreSQL (primary)</div>
                        <div className="p-2 bg-accent/10 rounded text-sm">Redis + Celery (jobs)</div>
                        <div className="p-2 bg-accent/10 rounded text-sm">AWS S3 (files)</div>
                        <div className="p-2 bg-accent/10 rounded text-sm">SendGrid (emails)</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    JWT Authentication → RBAC Middleware → API Endpoints → PostgreSQL/S3 → Background Workers (Celery)
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Database Design Highlights</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                      <div className="font-semibold mb-3 text-primary">Core Entities</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Students:</strong> Personal info, admission data, guardian details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Courses & Sections:</strong> Curriculum, schedules, capacity management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Enrollments:</strong> Student-section mappings with status tracking</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-secondary">
                      <div className="font-semibold mb-3 text-secondary">Academic Tracking</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span><strong>Assignments & Grades:</strong> Weighted calculations, GPA computation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span><strong>Attendance:</strong> Session-based tracking with eligibility rules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span><strong>Transcripts:</strong> Generated records with PDF URLs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent">
                    <div className="font-semibold mb-3 text-accent">Key Relationships</div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Students <strong>1:M</strong> Enrollments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Courses <strong>1:M</strong> Sections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Sections <strong>1:M</strong> Assignments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Assignments <strong>1:M</strong> Grades</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Sections <strong>1:M</strong> Attendance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Users (Faculty) <strong>1:M</strong> Sections</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-muted/30 rounded">
                    <Database className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Indexing Strategy:</strong> Optimized with composite indexes on (student_id, semester), (section_id, student_id) for fast enrollment and grade lookups. Full-text search on student names and emails.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* API & Integration */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">API Design & Integration</h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3">Student Management APIs</h3>
                  <div className="space-y-2 text-sm font-mono text-muted-foreground">
                    <div><Badge className="mr-2">GET</Badge>/api/students - List/search with filtering</div>
                    <div><Badge className="mr-2">POST</Badge>/api/students - Create student record</div>
                    <div><Badge className="mr-2">PUT</Badge>/api/students/:id - Update profile</div>
                    <div><Badge className="mr-2">POST</Badge>/api/students/:id/documents - Upload docs</div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3">Academic Operations APIs</h3>
                  <div className="space-y-2 text-sm font-mono text-muted-foreground">
                    <div><Badge className="mr-2">POST</Badge>/api/enrollments - Enroll student in section</div>
                    <div><Badge className="mr-2">POST</Badge>/api/grades/bulk - Batch grade entry</div>
                    <div><Badge className="mr-2">POST</Badge>/api/sections/:id/attendance - Mark attendance</div>
                    <div><Badge className="mr-2">GET</Badge>/api/students/:id/transcript - Generate PDF</div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-3">Integration Features</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bulk CSV import for student data migration from legacy systems</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Export capabilities for reports (CSV, PDF) with custom filtering</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Email notifications via SendGrid for enrollments and grade postings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>RESTful design with OpenAPI/Swagger documentation</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Security & Compliance</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Security Measures</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>JWT authentication with refresh token rotation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Role-based access control (RBAC) at endpoint level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Input validation & SQL injection prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>TLS encryption for all data in transit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Encryption at rest for sensitive database fields</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Presigned URLs for secure file access</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Compliance & Privacy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>FERPA compliance for student privacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>GDPR-ready data export & deletion flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprehensive audit logging for all actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Data retention policies with automated cleanup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Immutable audit trail for regulatory compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Role separation for sensitive operations</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Performance Metrics</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric) => (
                  <Card key={metric.label} className="p-6 bg-card/50 backdrop-blur-sm text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing Strategy */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Testing & Quality Assurance</h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">Comprehensive Testing Approach</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Unit Testing</h4>
                      <p className="text-muted-foreground">
                        Business logic testing for GPA calculations, enrollment rules, and grade computations with pytest coverage
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Integration Testing</h4>
                      <p className="text-muted-foreground">
                        API endpoint testing with test database for enrollment, grading, and transcript flows
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">E2E Testing</h4>
                      <p className="text-muted-foreground">
                        Cypress tests simulating faculty grade entry, student views, and transcript generation workflows
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Performance Testing</h4>
                      <p className="text-muted-foreground">
                        Load testing for search queries and report generation with batch transcript requests
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Security Testing</h4>
                      <p className="text-muted-foreground">
                        SAST scans, OWASP dependency checks, and penetration tests for auth and file uploads
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Data Migration Testing</h4>
                      <p className="text-muted-foreground">
                        Legacy data import validation with integrity checks and rollback procedures
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Project Outcomes</h2>
              
              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technical Achievements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Scalable architecture supporting 50,000+ student records with sub-2-second query response times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Automated GPA calculation engine with configurable grading scales and weighted credit hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Asynchronous transcript generation processing thousands of requests via worker queues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Comprehensive audit system tracking all administrative actions for compliance</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Business Impact</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Streamlined academic data management reducing manual processing time by 70%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Enhanced data accuracy and integrity through automated validation and calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Improved accessibility for students and faculty with responsive, intuitive dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>FERPA/GDPR compliant system ensuring student privacy and institutional compliance</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Learning Outcomes</h3>
                    <p className="text-muted-foreground">
                      This project strengthened expertise in full-stack Python development with FastAPI, complex relational database design, asynchronous job processing with Celery, secure authentication patterns, and building scalable systems that meet regulatory compliance requirements for sensitive educational data.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Interested in Similar Projects?</h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how I can help build robust data management systems for your organization.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/#contact")} size="lg">
                  Get in Touch
                </Button>
                <Button onClick={() => navigate("/")} variant="outline" size="lg">
                  View More Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDatabaseCase;
