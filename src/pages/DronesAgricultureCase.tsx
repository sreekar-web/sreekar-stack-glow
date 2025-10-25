import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plane, Database, Brain, Shield, Activity, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DronesAgricultureCase = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              Sep 2023 – Nov 2023
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Drones in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Agriculture</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real-time agricultural monitoring system with autonomous drone navigation, ML-powered crop analysis, and live telemetry dashboard
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge>JavaScript</Badge>
              <Badge>Python</Badge>
              <Badge>IoT</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>MQTT</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>TensorFlow</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Led the development of an autonomous agricultural drone system that collects real-time field data, streams telemetry to a React dashboard, and applies machine learning models for intelligent decision-making. The system enables precision agriculture through automated field inspection, crop health monitoring, and data-driven irrigation recommendations.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Activity className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Real-Time Monitoring</h3>
                  <p className="text-sm text-muted-foreground">&lt;1s telemetry latency</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <Brain className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="font-semibold mb-1">ML Integration</h3>
                  <p className="text-sm text-muted-foreground">Crop disease detection</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <Plane className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold mb-1">Autonomous Flight</h3>
                  <p className="text-sm text-muted-foreground">98% uptime reliability</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Functional Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Functional Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Data Collection
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time sensor data (humidity, temperature, soil moisture)</li>
                  <li>• Crop health monitoring and imaging</li>
                  <li>• GPS coordinates and flight telemetry</li>
                  <li>• Live camera feed streaming</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Flight Control
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Autonomous navigation with pre-defined boundaries</li>
                  <li>• Manual override capabilities</li>
                  <li>• Battery monitoring and auto-return</li>
                  <li>• Multi-drone coordination support</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  ML-Powered Analysis
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Crop disease detection from aerial imagery</li>
                  <li>• Irrigation need prediction</li>
                  <li>• Yield estimation algorithms</li>
                  <li>• Anomaly detection in crop patterns</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data Management
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Historical data storage and retrieval</li>
                  <li>• Report generation (CSV, PDF)</li>
                  <li>• Role-based access (Admin, Field Operator)</li>
                  <li>• Analytics dashboard with visualizations</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Architecture Overview</h3>
                  <p className="text-muted-foreground mb-6">
                    The system follows a modern IoT architecture with real-time data streaming, cloud processing, and web-based visualization. Drones communicate via MQTT for low-latency telemetry, while the backend processes and stores data for analytics and ML inference.
                  </p>
                </div>

                <div className="bg-background/60 p-6 rounded-lg border border-border">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border-2 border-primary rounded-lg font-semibold mb-4">
                        <Plane className="h-5 w-5" />
                        Autonomous Drones
                      </div>
                    </div>
                    <div className="text-center text-muted-foreground">↓ MQTT / WebSocket ↓</div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="px-4 py-3 bg-secondary/20 border border-secondary rounded-lg font-medium text-sm">
                          MQTT Broker
                          <div className="text-xs text-muted-foreground mt-1">Low-latency messaging</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="px-4 py-3 bg-secondary/20 border border-secondary rounded-lg font-medium text-sm">
                          Python API
                          <div className="text-xs text-muted-foreground mt-1">Flask/FastAPI</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="px-4 py-3 bg-secondary/20 border border-secondary rounded-lg font-medium text-sm">
                          WebSocket Server
                          <div className="text-xs text-muted-foreground mt-1">Real-time push</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-muted-foreground">↓</div>
                    <div className="flex justify-center gap-6 flex-wrap">
                      <div className="px-4 py-2 bg-accent/20 border border-accent rounded text-sm">
                        PostgreSQL
                      </div>
                      <div className="px-4 py-2 bg-accent/20 border border-accent rounded text-sm">
                        TensorFlow ML
                      </div>
                      <div className="px-4 py-2 bg-accent/20 border border-accent rounded text-sm">
                        Image Storage (S3)
                      </div>
                    </div>
                    <div className="text-center text-muted-foreground">↓ REST API / WebSocket ↓</div>
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border border-primary rounded-lg font-medium">
                        React Dashboard + Leaflet.js Maps + Chart.js
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Frontend Layer</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• React.js dashboard for visualization</li>
                      <li>• Leaflet.js for field mapping</li>
                      <li>• Chart.js for telemetry graphs</li>
                      <li>• WebSocket client for live updates</li>
                      <li>• Responsive design (desktop, tablet, mobile)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Backend Layer</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Python (Flask/FastAPI) REST API</li>
                      <li>• MQTT broker for drone communication</li>
                      <li>• PostgreSQL for persistent storage</li>
                      <li>• TensorFlow for ML inference</li>
                      <li>• JWT authentication and authorization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Database Design</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <p className="text-muted-foreground mb-6">
                The database schema is optimized for time-series sensor data with efficient indexing for real-time queries and historical analysis.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2">Drones</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      drone_id (PK), name, model, status, battery_level, location
                    </p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold mb-2">Sensors</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      sensor_id (PK), drone_id (FK), type, last_updated
                    </p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2">Sensor_Data</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      data_id (PK), sensor_id (FK), value, timestamp
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2">Flights</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      flight_id (PK), drone_id (FK), start_time, end_time, area_covered
                    </p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold mb-2">Images</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      image_id (PK), flight_id (FK), image_url, analysis_result
                    </p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2">Users</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      user_id (PK), name, email, role, password
                    </p>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Key Relationships & Data Flow</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="font-medium mb-3 text-primary">Primary Relationships</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>Drones <strong>1:M</strong> Sensors (each drone has multiple sensors)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>Sensors <strong>1:M</strong> Sensor_Data (time-series readings)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>Drones <strong>1:M</strong> Flights (flight history)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="font-medium mb-3 text-secondary">Image & Analysis</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">→</span>
                          <span>Flights <strong>1:M</strong> Images (captured imagery per flight)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">→</span>
                          <span>Images contain ML analysis results (crop health, diseases)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary mt-1">→</span>
                          <span>Indexed by timestamp for efficient time-series queries</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 border border-accent/30 rounded text-sm text-muted-foreground">
                    <strong className="text-foreground">Optimization:</strong> Time-series data partitioned by date with automatic retention policies. Sensor_Data uses BRIN indexes for timestamp-based queries achieving &lt;100ms query times on millions of records.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">API Documentation</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold">Endpoint</th>
                    <th className="text-left py-3 px-2 font-semibold">Method</th>
                    <th className="text-left py-3 px-2 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/auth/login</td>
                    <td className="py-3 px-2"><Badge variant="secondary">POST</Badge></td>
                    <td className="py-3 px-2">Authenticate user and return JWT token</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/drones</td>
                    <td className="py-3 px-2"><Badge variant="outline">GET</Badge></td>
                    <td className="py-3 px-2">List all drones with status</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/drones/:id</td>
                    <td className="py-3 px-2"><Badge variant="outline">GET</Badge></td>
                    <td className="py-3 px-2">Get specific drone details and telemetry</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/flights</td>
                    <td className="py-3 px-2"><Badge variant="secondary">POST</Badge></td>
                    <td className="py-3 px-2">Initialize new autonomous flight mission</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/flights/:id</td>
                    <td className="py-3 px-2"><Badge variant="outline">GET</Badge></td>
                    <td className="py-3 px-2">Retrieve flight data and path history</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/sensors/:id/data</td>
                    <td className="py-3 px-2"><Badge variant="outline">GET</Badge></td>
                    <td className="py-3 px-2">Fetch time-series sensor readings</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-mono text-xs">/images/analyze</td>
                    <td className="py-3 px-2"><Badge variant="secondary">POST</Badge></td>
                    <td className="py-3 px-2">Run ML model for crop health analysis</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-mono text-xs">/reports/export</td>
                    <td className="py-3 px-2"><Badge variant="outline">GET</Badge></td>
                    <td className="py-3 px-2">Export flight/sensor data (CSV, PDF)</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Chart.js</Badge>
                  <Badge variant="secondary">Leaflet.js</Badge>
                  <Badge variant="secondary">WebSocket</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <h3 className="text-lg font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MQTT</Badge>
                  <Badge variant="secondary">JWT</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <h3 className="text-lg font-semibold mb-4">ML & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">OpenCV</Badge>
                  <Badge variant="secondary">AWS EC2</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Testing */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Security & Testing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security Measures
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• HTTPS/TLS for all communications</li>
                  <li>• JWT-based authentication</li>
                  <li>• Encrypted MQTT channels (TLS)</li>
                  <li>• Role-based access control</li>
                  <li>• Secure AWS S3 image storage</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-secondary" />
                  Testing Strategy
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unit tests for backend endpoints</li>
                  <li>• Integration tests for drone-to-dashboard sync</li>
                  <li>• Load tests (10 concurrent drones)</li>
                  <li>• ML model accuracy validation</li>
                  <li>• User acceptance testing</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Key Outcomes & Learnings</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Technical Achievements</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Achieved &lt;1s latency for real-time telemetry streaming using MQTT and WebSocket</li>
                    <li>• Implemented autonomous flight control with 98% uptime reliability</li>
                    <li>• Trained ML model for crop disease detection with 85%+ accuracy</li>
                    <li>• Successfully coordinated multiple drones operating simultaneously</li>
                    <li>• Built responsive dashboard for field operators and researchers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">Skills Developed</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>IoT Architecture:</strong> Designed and implemented real-time sensor data pipelines</li>
                    <li>• <strong>Backend Development:</strong> Built scalable Python APIs with FastAPI</li>
                    <li>• <strong>Machine Learning:</strong> Integrated TensorFlow models for image-based inference</li>
                    <li>• <strong>Real-Time Systems:</strong> Implemented MQTT messaging for low-latency communication</li>
                    <li>• <strong>Full-Stack Integration:</strong> Connected React frontend with Python backend and PostgreSQL</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Impact</h3>
                  <p className="text-muted-foreground">
                    This project demonstrated the practical application of IoT and ML in precision agriculture, enabling farmers to make data-driven decisions for irrigation, pest control, and yield optimization. The system's autonomous capabilities and real-time insights significantly reduced manual field inspection time while improving crop monitoring accuracy.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Interested in Similar Projects?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how IoT, machine learning, and real-time systems can solve your challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/#portfolio")}>
                View More Projects
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/#contact")}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DronesAgricultureCase;