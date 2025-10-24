import { ArrowLeft, Shield, Wifi, MessageSquare, Lock, Smartphone, Database, Cloud, Bell, Users, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProgressiveWebChatCase = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            className="mb-8 group"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>

          <div className="max-w-4xl">
            <Badge className="mb-4" variant="secondary">
              Feb 2021 – May 2021
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Progressive Web Chat App
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure, cross-platform PWA with end-to-end encryption, WhatsApp-style UI, offline support, and real-time messaging capabilities
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">PWA</Badge>
              <Badge variant="outline">E2EE</Badge>
              <Badge variant="outline">WebSocket</Badge>
              <Badge variant="outline">Service Worker</Badge>
              <Badge variant="outline">IndexedDB</Badge>
              <Badge variant="outline">Web Crypto</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Goal
                  </h3>
                  <p className="text-muted-foreground">
                    Develop a secure, cross-platform Progressive Web App providing real-time chat with WhatsApp-style UI, end-to-end encryption, offline support, and full PWA features including installability and push notifications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Target Users
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• End users (chatters)</li>
                    <li>• Group administrators</li>
                    <li>• System administrators</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  description: "Double Ratchet protocol ensuring only intended recipients can read messages",
                },
                {
                  icon: Wifi,
                  title: "Offline Support",
                  description: "Queue messages offline and sync automatically when connection returns",
                },
                {
                  icon: Bell,
                  title: "Push Notifications",
                  description: "Web Push (VAPID) notifications even when PWA is closed",
                },
                {
                  icon: Smartphone,
                  title: "PWA Features",
                  description: "Installable, service worker caching, works like a native app",
                },
                {
                  icon: MessageSquare,
                  title: "1:1 & Group Chat",
                  description: "Private conversations and group messaging with member management",
                },
                {
                  icon: CheckCircle2,
                  title: "Rich Messaging",
                  description: "Text, emojis, attachments, read receipts, typing indicators",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Functional Requirements */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Functional Requirements</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Authentication & Profile</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• User authentication via email/phone + OTP or password</li>
                  <li>• Create and edit profile (display name, avatar)</li>
                  <li>• Contact management: add, remove, block users</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Messaging Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 1:1 and group chat capabilities</li>
                  <li>• Send text, emojis, images, audio, video, and files</li>
                  <li>• Message states: sent, delivered, read</li>
                  <li>• Typing indicators and presence (online/last seen)</li>
                  <li>• Search messages and contacts</li>
                  <li>• Message deletion (self or everyone with time limit)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Security & Offline</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end encryption for all message payloads</li>
                  <li>• Read cached conversations offline</li>
                  <li>• Queue outgoing messages and sync when online</li>
                  <li>• Service worker caching for assets and UI</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">PWA Capabilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Installable on desktop and mobile</li>
                  <li>• Offline-first architecture with IndexedDB</li>
                  <li>• Push notifications via VAPID</li>
                  <li>• Responsive WhatsApp-style interface</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    Architecture Components
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend Layer</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• React PWA with Service Worker</li>
                        <li>• IndexedDB for local storage</li>
                        <li>• WebSocket client for real-time</li>
                        <li>• Web Crypto API for encryption</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend Layer</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Node.js/Python API server</li>
                        <li>• WebSocket server for messaging</li>
                        <li>• PostgreSQL/MongoDB database</li>
                        <li>• Redis for presence & queues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Storage & Files</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• S3-compatible object storage</li>
                        <li>• Encrypted attachment handling</li>
                        <li>• CDN for static assets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Push & Workers</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Web Push (VAPID) gateway</li>
                        <li>• Background job workers</li>
                        <li>• Redis pub/sub for scaling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Architecture Flow</h4>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre className="text-muted-foreground">
{`[Browser PWA / Mobile PWA]
  - Service Worker
  - WebSocket Client
  - IndexedDB (cache & queue)
     |
  <-> [WebSocket Server] <-> [Backend API]
           |                      |
           |                      +-> [DB: Users, Conversations]
           |                      +-> [S3: Encrypted files]
           |                      +-> [Redis: Presence, queues]
           |
           +-> [Push Service] -> Browser/Mobile Push`}
                    </pre>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Database Design</h2>
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Core Tables
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">users</h4>
                      <p className="text-sm text-muted-foreground">
                        user_id (PK), phone/email, display_name, avatar_url, public_key, created_at, last_seen
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">devices</h4>
                      <p className="text-sm text-muted-foreground">
                        device_id (PK), user_id (FK), device_name, push_subscription, last_active, device_public_key
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">conversations</h4>
                      <p className="text-sm text-muted-foreground">
                        convo_id (PK), type (private/group), title, created_by, created_at, metadata
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">messages</h4>
                      <p className="text-sm text-muted-foreground">
                        message_id (PK), convo_id (FK), sender_id (FK), ciphertext (blob), iv/nonce, attachments[], created_at, status, server_sequence
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">message_acknowledgements</h4>
                      <p className="text-sm text-muted-foreground">
                        ack_id, message_id, user_id, ack_type (DELIVERED/READ), ack_ts
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">attachments</h4>
                      <p className="text-sm text-muted-foreground">
                        attachment_id, message_id (FK), s3_url (encrypted), mime_type, size, thumbnail_url, created_at
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Key Relationships</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Users → Devices (1:M) - Multi-device support</li>
                    <li>• Conversations → Participants (M:N) - Group membership</li>
                    <li>• Conversations → Messages (1:M) - Message history</li>
                    <li>• Messages → Attachments (1:M) - File handling</li>
                    <li>• Messages → Acknowledgements (1:M) - Read receipts</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Encryption & Security */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Encryption & Security</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  End-to-End Encryption Design
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Double Ratchet Protocol:</strong> Similar to Signal, using established libraries like libsignal-protocol-javascript
                  </li>
                  <li>
                    <strong className="text-foreground">Key Management:</strong> Each user/device has identity key pair and prekeys for asynchronous delivery
                  </li>
                  <li>
                    <strong className="text-foreground">Group Encryption:</strong> Per-group symmetric keys encrypted for each participant
                  </li>
                  <li>
                    <strong className="text-foreground">Message Flow:</strong> Client encrypts with derived symmetric key, server stores only ciphertext
                  </li>
                  <li>
                    <strong className="text-foreground">Attachment Security:</strong> Files encrypted client-side (AES-GCM) before upload
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      JWT tokens, secure device key storage, Web Crypto SubtleCrypto
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Data Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Replay protection, authenticated encryption (AES-GCM), ephemeral keys
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Privacy</h4>
                    <p className="text-sm text-muted-foreground">
                      Minimal server-side metadata, no message content in push notifications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Backup</h4>
                    <p className="text-sm text-muted-foreground">
                      Optional encrypted backup protected by user passphrase
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">API Documentation</h2>
            <div className="overflow-x-auto">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Endpoint</th>
                      <th className="text-left py-3 px-4">Method</th>
                      <th className="text-left py-3 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-xs">/api/auth/register</td>
                      <td className="py-3 px-4"><Badge variant="outline">POST</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">User registration with device setup</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-xs">/api/auth/login</td>
                      <td className="py-3 px-4"><Badge variant="outline">POST</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">Authenticate and get JWT tokens</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-xs">/api/conversations</td>
                      <td className="py-3 px-4"><Badge variant="outline">GET</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">List user conversations</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-xs">/api/conversations/:id/messages</td>
                      <td className="py-3 px-4"><Badge variant="outline">GET</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">Fetch message history (ciphertext)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-xs">/api/messages/:id/ack</td>
                      <td className="py-3 px-4"><Badge variant="outline">POST</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">Record delivered/read acknowledgment</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-xs">/api/attachments/request-upload</td>
                      <td className="py-3 px-4"><Badge variant="outline">POST</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">Get pre-signed URL for file upload</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-xs">/api/devices/:id/push</td>
                      <td className="py-3 px-4"><Badge variant="outline">POST</Badge></td>
                      <td className="py-3 px-4 text-muted-foreground">Register push notification subscription</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm mt-6">
                <h3 className="text-xl font-semibold mb-4">WebSocket Real-time Protocol</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">message:send</h4>
                    <p className="text-xs text-muted-foreground mb-2">Client sends encrypted message to server</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "type": "message:send",
  "temp_id": "c-temp-123456",
  "convo_id": "convo_abc",
  "ciphertext": "<encrypted>",
  "nonce": "<base64>"
}`}
                    </pre>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">message:receive</h4>
                    <p className="text-xs text-muted-foreground mb-2">Server pushes message to recipients</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "type": "message:receive",
  "message_id": "msg_98765",
  "server_seq": 123456,
  "sender_id": "user_alice",
  "ciphertext": "<encrypted>"
}`}
                    </pre>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Other Events</h4>
                    <p className="text-xs text-muted-foreground">
                      message:ack (read receipts), presence:update, typing:start/stop, member:joined/left
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React + TypeScript with Vite</li>
                  <li>• Workbox for Service Worker</li>
                  <li>• IndexedDB (idb/Dexie.js)</li>
                  <li>• WebSocket client</li>
                  <li>• Web Crypto API</li>
                  <li>• libsignal-protocol-javascript</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Python/Node.js (Fastify/NestJS)</li>
                  <li>• WebSocket server (uWebSockets.js)</li>
                  <li>• PostgreSQL database</li>
                  <li>• Redis (presence, pub/sub)</li>
                  <li>• JWT authentication</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Storage & Push</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AWS S3 (encrypted attachments)</li>
                  <li>• CDN for static content</li>
                  <li>• Web Push (VAPID)</li>
                  <li>• web-push (Node)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• libsodium for crypto primitives</li>
                  <li>• Double Ratchet protocol</li>
                  <li>• AES-GCM encryption</li>
                  <li>• TLS for all connections</li>
                </ul>
              </Card>
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
                <h3 className="text-xl font-semibold mb-4">Testing Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Unit & Integration</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Encryption routine tests</li>
                      <li>• Message format parser tests</li>
                      <li>• WebSocket server tests</li>
                      <li>• REST API endpoint tests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">E2E Testing</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Multi-client flow simulation</li>
                      <li>• Offline/online switching</li>
                      <li>• Attachment handling</li>
                      <li>• Playwright/Cypress automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Security Testing</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Crypto implementation review</li>
                      <li>• Key exchange validation</li>
                      <li>• Penetration testing</li>
                      <li>• Auth & injection tests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Performance</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Load test with thousands of connections</li>
                      <li>• Attachment throughput testing</li>
                      <li>• Message latency &lt; 500ms</li>
                      <li>• k6/locust load testing</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Outcomes & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold mb-2">&lt; 500ms</h3>
                <p className="text-muted-foreground">Message delivery latency for real-time communication</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <h3 className="text-2xl font-bold mb-2">E2EE</h3>
                <p className="text-muted-foreground">Military-grade end-to-end encryption for all messages</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <h3 className="text-2xl font-bold mb-2">Offline-First</h3>
                <p className="text-muted-foreground">Full functionality with automatic sync when online</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold mb-2">PWA</h3>
                <p className="text-muted-foreground">Cross-platform app with native-like experience</p>
              </Card>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm mt-8">
              <h3 className="text-xl font-semibold mb-4">Technical Achievements</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Implemented Double Ratchet encryption protocol ensuring privacy-first messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Built robust offline-first architecture with IndexedDB and Service Worker caching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Achieved real-time messaging with WebSocket infrastructure supporting concurrent users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Developed WhatsApp-style UI with read receipts, typing indicators, and rich media support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Integrated Web Push notifications ensuring engagement even when app is closed</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Similar Solutions?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how secure messaging and PWA technologies can benefit your project
            </p>
            <Button size="lg" onClick={() => navigate("/#contact")}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressiveWebChatCase;
