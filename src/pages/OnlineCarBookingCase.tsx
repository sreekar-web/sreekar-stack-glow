import { ArrowLeft, Car, Database, Shield, Zap, Calendar, CreditCard, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OnlineCarBookingCase = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary" className="text-sm">
                Sep 2020 – Dec 2020
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Online Car Booking System
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive web-based platform enabling users to search, reserve, and pay for car rentals while providing admins with powerful fleet management tools. Built with JavaScript, SQL, and REST APIs to ensure reliable booking flows and persistent data storage.
            </p>

            <div className="flex flex-wrap gap-2">
              {["JavaScript", "SQL", "Backend", "REST API", "Stripe", "Node.js", "Express", "PostgreSQL"].map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Target Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• End Users (customers booking cars)</li>
                    <li>• Fleet Managers (admin operations)</li>
                    <li>• Drivers (optional assignment system)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Key Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 99.9% uptime for booking flows</li>
                    <li>• &lt;300ms search response time</li>
                    <li>• PCI-compliant payment handling</li>
                    <li>• Scalable horizontal architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Requirements */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    User Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Registration & Auth:</strong> Email/password signup, social login, password reset</p>
                  <p><strong className="text-foreground">Search & Filter:</strong> Location-based search, date/time range, car type, seats, price range</p>
                  <p><strong className="text-foreground">Booking Flow:</strong> Check availability, reserve, modify/cancel with policy rules</p>
                  <p><strong className="text-foreground">Payments:</strong> Stripe integration, security deposits, email invoices</p>
                  <p><strong className="text-foreground">User Profile:</strong> Booking history, saved payment methods, preferences</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Admin Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Fleet Management:</strong> Add/update vehicles, manage availability and pricing</p>
                  <p><strong className="text-foreground">Booking Management:</strong> View and manage all bookings, handle cancellations</p>
                  <p><strong className="text-foreground">Analytics:</strong> Revenue reports, booking statistics, fleet utilization</p>
                  <p><strong className="text-foreground">User Management:</strong> RBAC system, access control</p>
                  <p><strong className="text-foreground">Notifications:</strong> Email and optional SMS for booking updates</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Modern, scalable architecture for reliability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Frontend</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• React + TypeScript</li>
                      <li>• React Router</li>
                      <li>• Tailwind CSS</li>
                      <li>• Formik (forms)</li>
                      <li>• Vite (build tool)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Backend</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Node.js + Express</li>
                      <li>• PostgreSQL</li>
                      <li>• Redis (caching)</li>
                      <li>• JWT auth</li>
                      <li>• REST API</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Services</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Stripe payments</li>
                      <li>• AWS S3 storage</li>
                      <li>• RabbitMQ queues</li>
                      <li>• CloudFront CDN</li>
                      <li>• Sentry monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Architecture Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <div className="px-4 py-2 bg-primary/20 border-2 border-primary rounded-lg font-semibold">
                        User Browser/Mobile
                      </div>
                    </div>
                    <div className="text-center text-muted-foreground">↓ HTTPS ↓</div>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <div className="px-4 py-2 bg-secondary/20 border-2 border-secondary rounded-lg font-semibold">
                        API Gateway / Backend
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-muted-foreground mb-2">↓</div>
                        <div className="px-3 py-2 bg-accent/20 border border-accent rounded text-sm font-medium">
                          PostgreSQL
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground mb-2">↓</div>
                        <div className="px-3 py-2 bg-green-500/20 border border-green-500 rounded text-sm font-medium">
                          Stripe Payment
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground mb-2">↓</div>
                        <div className="px-3 py-2 bg-orange-500/20 border border-orange-500 rounded text-sm font-medium">
                          S3 / CDN
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground mb-2">↓</div>
                        <div className="px-3 py-2 bg-purple-500/20 border border-purple-500 rounded text-sm font-medium">
                          Message Broker
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="text-center">
                        <div className="text-muted-foreground mb-2">↓</div>
                        <div className="px-3 py-2 bg-primary/20 border border-primary rounded text-sm">
                          Worker Services
                          <div className="text-xs text-muted-foreground mt-1">(Notifications, Processing)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Booking Process Flow</CardTitle>
                <CardDescription>End-to-end booking sequence with payment integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                      <div className="font-semibold mb-2">1. Search & Browse</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• User searches vehicles</li>
                        <li>• API queries available vehicles</li>
                        <li>• Results displayed with filters</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-secondary">
                      <div className="font-semibold mb-2">2. Check Availability</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• User selects dates/vehicle</li>
                        <li>• API checks availability</li>
                        <li>• PENDING booking created</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                      <div className="font-semibold mb-2">3. Payment Processing</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Stripe payment intent created</li>
                        <li>• User confirms payment</li>
                        <li>• Webhook confirms success</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary">
                    <div className="font-semibold mb-2">4. Confirmation & Notification</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Booking status updated to CONFIRMED</li>
                      <li>• Notification job queued in message broker</li>
                      <li>• Email/SMS confirmation sent to user</li>
                      <li>• Booking details available in user dashboard</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Database className="h-8 w-8 text-primary" />
              Database Design
            </h2>

            <Card>
              <CardHeader>
                <CardTitle>Entity Relationship Model</CardTitle>
                <CardDescription>PostgreSQL with normalized schema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">users</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• user_id (PK)</li>
                        <li>• name, email, phone</li>
                        <li>• password_hash, role</li>
                        <li>• created_at</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">vehicles</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• vehicle_id (PK)</li>
                        <li>• make, model, year, seats</li>
                        <li>• type, license_plate</li>
                        <li>• location_id (FK), status</li>
                        <li>• daily_rate, image_url</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">bookings</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• booking_id (PK)</li>
                        <li>• user_id (FK), vehicle_id (FK)</li>
                        <li>• start_datetime, end_datetime</li>
                        <li>• total_amount, status</li>
                        <li>• created_at</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">payments</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• payment_id (PK)</li>
                        <li>• booking_id (FK)</li>
                        <li>• amount, currency, status</li>
                        <li>• provider_id (stripe)</li>
                        <li>• payment_method_token</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">locations</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• location_id (PK)</li>
                        <li>• name, address</li>
                        <li>• latitude, longitude</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">reviews</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• review_id (PK)</li>
                        <li>• booking_id (FK), user_id (FK)</li>
                        <li>• rating, comment</li>
                        <li>• created_at</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Key Relationships</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="font-medium mb-3 text-primary">Primary Relationships</div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="text-primary">→</span>
                            <span>users <strong>1:N</strong> bookings</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-primary">→</span>
                            <span>vehicles <strong>1:N</strong> bookings</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-primary">→</span>
                            <span>bookings <strong>1:1</strong> payments</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="font-medium mb-3 text-secondary">Supporting Relationships</div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="text-secondary">→</span>
                            <span>vehicles <strong>1:N</strong> availability</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-secondary">→</span>
                            <span>locations <strong>1:N</strong> vehicles</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-secondary">→</span>
                            <span>bookings <strong>1:N</strong> reviews</span>
                          </li>
                        </ul>
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">API Endpoints</h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/auth/register</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/auth/login</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Car className="h-5 w-5 text-primary" />
                    Vehicles & Search
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <Badge className="bg-blue-500">GET</Badge>
                    <span className="text-muted-foreground">/api/vehicles?lat=&lng=&radius=&start=&end=</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-blue-500">GET</Badge>
                    <span className="text-muted-foreground">/api/vehicles/:id</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/bookings/availability</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/bookings</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-yellow-500">PUT</Badge>
                    <span className="text-muted-foreground">/api/bookings/:id/cancel</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-blue-500">GET</Badge>
                    <span className="text-muted-foreground">/api/bookings/:id</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/payments/intent</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/payments/webhook</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Admin
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <Badge className="bg-green-500">POST</Badge>
                    <span className="text-muted-foreground">/api/admin/vehicles</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-yellow-500">PUT</Badge>
                    <span className="text-muted-foreground">/api/admin/vehicles/:id</span>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-blue-500">GET</Badge>
                    <span className="text-muted-foreground">/api/admin/reports?from=&to=&type=</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Testing */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Security
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Authentication:</strong> JWT access + refresh tokens, secure cookie storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Authorization:</strong> RBAC for admin endpoints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Payment Security:</strong> PCI compliance via Stripe tokenization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Data Protection:</strong> Encryption at rest and in transit (TLS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Input Validation:</strong> Prepared queries, ORM to prevent SQL injection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">GDPR Compliance:</strong> Data export/deletion endpoints</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  Testing
                </h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Unit Tests:</strong> Jest for business logic and utilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Integration Tests:</strong> API endpoints with test DB (Supertest)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">E2E Tests:</strong> Cypress for booking flow and payment simulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Load Testing:</strong> k6 for 1000 concurrent requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Security Testing:</strong> OWASP checks, SAST scans, penetration tests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Accessibility:</strong> Axe-core integration in CI</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Outcomes & Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">99.9%</CardTitle>
                  <CardDescription>System Uptime</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">&lt;300ms</CardTitle>
                  <CardDescription>Search Response</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">PCI</CardTitle>
                  <CardDescription>Compliant Payments</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Technical Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Implemented reliable booking flow with conflict prevention and concurrent request handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Integrated Stripe payment gateway with security deposits and webhook handling for payment confirmations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Designed normalized database schema with proper indexing for geospatial and time-based queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Built scalable REST API with Redis caching for improved search performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Implemented asynchronous notification system using message queues for email/SMS delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Created comprehensive admin dashboard for fleet management and analytics reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Similar Solutions?</h2>
            <p className="text-muted-foreground mb-8">
              This project demonstrates expertise in building scalable booking systems, payment integrations, and complex business logic handling.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate("/#contact")} size="lg">
                Get in Touch
              </Button>
              <Button onClick={() => navigate("/")} variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineCarBookingCase;