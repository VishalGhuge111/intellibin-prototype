"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Cloud,
  Database,
  Shield,
  Zap,
  Globe,
  Server,
  Smartphone,
  Monitor,
  Cpu,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Code,
} from "lucide-react"

export function BackendArchitecture() {
  const [selectedComponent, setSelectedComponent] = useState("overview")
  const [selectedDeployment, setSelectedDeployment] = useState("vercel")

  const architectureComponents = [
    {
      id: "api-gateway",
      name: "API Gateway",
      icon: Globe,
      description: "Request routing, authentication, rate limiting",
      tech: "Vercel Edge Functions",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "auth-service",
      name: "Authentication Service",
      icon: Shield,
      description: "Aadhaar OTP verification, JWT tokens",
      tech: "UIDAI API Integration",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      id: "iot-service",
      name: "IoT Data Service",
      icon: Cpu,
      description: "MQTT broker, sensor data processing",
      tech: "AWS IoT Core / Firebase",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "ml-service",
      name: "ML Classification",
      icon: Zap,
      description: "Image processing, waste classification",
      tech: "TensorFlow Serving",
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "database",
      name: "Database Layer",
      icon: Database,
      description: "User data, bin status, analytics",
      tech: "PostgreSQL / MongoDB",
      color: "bg-gray-100 text-gray-800",
    },
    {
      id: "notification",
      name: "Notification Service",
      icon: Smartphone,
      description: "Push notifications, alerts",
      tech: "Firebase FCM",
      color: "bg-red-100 text-red-800",
    },
  ]

  const deploymentOptions = [
    {
      id: "vercel",
      name: "Vercel Platform",
      description: "Serverless deployment with edge functions",
      pros: ["Auto-scaling", "Global CDN", "Zero config", "Integrated CI/CD"],
      cons: ["Function timeout limits", "Cold starts"],
      features: "Pay-per-use scaling",
    },
    {
      id: "aws",
      name: "AWS Cloud",
      description: "Full cloud infrastructure with microservices",
      pros: ["Complete control", "IoT Core integration", "Scalable", "Enterprise grade"],
      cons: ["Complex setup", "Management overhead"],
      features: "Reserved instances available",
    },
    {
      id: "firebase",
      name: "Firebase + GCP",
      description: "Google's mobile-first backend platform",
      pros: ["Real-time database", "Easy mobile integration", "ML APIs", "Authentication"],
      cons: ["Vendor lock-in", "Limited customization"],
      features: "Usage-based billing",
    },
  ]

  const apiEndpoints = {
    authentication: [
      { method: "POST", endpoint: "/api/auth/send-otp", description: "Send Aadhaar OTP" },
      { method: "POST", endpoint: "/api/auth/verify-otp", description: "Verify OTP and login" },
      { method: "POST", endpoint: "/api/auth/refresh", description: "Refresh JWT token" },
    ],
    iot: [
      { method: "POST", endpoint: "/api/iot/sensor-data", description: "Receive sensor data from bins" },
      { method: "GET", endpoint: "/api/iot/bin-status/{id}", description: "Get specific bin status" },
      { method: "POST", endpoint: "/api/iot/classification-result", description: "Send ML results to bin" },
    ],
    mobile: [
      { method: "GET", endpoint: "/api/user/profile", description: "Get user profile" },
      { method: "GET", endpoint: "/api/user/disposal-history", description: "Get disposal history" },
      { method: "GET", endpoint: "/api/rewards/balance", description: "Get GreenCoins balance" },
      { method: "POST", endpoint: "/api/rewards/redeem", description: "Redeem rewards" },
    ],
    municipal: [
      { method: "GET", endpoint: "/api/admin/dashboard", description: "Get dashboard data" },
      { method: "GET", endpoint: "/api/admin/analytics", description: "Get analytics data" },
      { method: "GET", endpoint: "/api/admin/alerts", description: "Get active alerts" },
      { method: "POST", endpoint: "/api/admin/routes", description: "Optimize collection routes" },
    ],
  }

  const securityFeatures = [
    {
      feature: "Aadhaar Integration",
      description: "UIDAI API for secure identity verification",
      implementation: "OAuth 2.0 + OTP verification",
      compliance: "GDPR, Data Protection Act",
    },
    {
      feature: "Data Encryption",
      description: "End-to-end encryption for all communications",
      implementation: "TLS 1.3, AES-256 encryption",
      compliance: "ISO 27001, SOC 2",
    },
    {
      feature: "API Security",
      description: "Rate limiting, authentication, input validation",
      implementation: "JWT tokens, API keys, CORS",
      compliance: "OWASP Top 10",
    },
    {
      feature: "Privacy Protection",
      description: "Data anonymization and user consent management",
      implementation: "Data masking, consent APIs",
      compliance: "GDPR Article 25",
    },
  ]

  const databaseSchema = {
    users: {
      fields: ["id", "aadhaar_hash", "name", "phone", "email", "created_at", "green_coins", "total_disposals"],
      relationships: ["has_many: disposals", "has_many: rewards_transactions"],
    },
    bins: {
      fields: ["id", "location", "ward", "capacity", "current_fill", "last_collection", "status", "sensors"],
      relationships: ["has_many: sensor_readings", "has_many: disposals"],
    },
    disposals: {
      fields: ["id", "user_id", "bin_id", "waste_type", "weight", "confidence", "timestamp", "coins_earned"],
      relationships: ["belongs_to: user", "belongs_to: bin"],
    },
    sensor_readings: {
      fields: ["id", "bin_id", "timestamp", "weight", "fill_level", "gas_readings", "temperature", "humidity"],
      relationships: ["belongs_to: bin"],
    },
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-primary" />
            Backend Architecture & Cloud Infrastructure
          </CardTitle>
          <CardDescription>
            Scalable, secure, and compliant backend system for IntelliBin smart waste management
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="architecture" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="architecture">System Architecture</TabsTrigger>
          <TabsTrigger value="apis">API Design</TabsTrigger>
          <TabsTrigger value="database">Database Schema</TabsTrigger>
          <TabsTrigger value="security">Security & Compliance</TabsTrigger>
          <TabsTrigger value="deployment">Deployment Options</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="space-y-6">
          {/* Architecture Overview */}
          <Card>
            <CardHeader>
              <CardTitle>System Architecture Overview</CardTitle>
              <CardDescription>Microservices-based architecture with cloud-native components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Client Layer */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-center">Client Layer</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Mobile App</span>
                      </div>
                      <p className="text-sm text-gray-600">React Native citizen app</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Monitor className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Web Dashboard</span>
                      </div>
                      <p className="text-sm text-gray-600">React.js municipal dashboard</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">IoT Devices</span>
                      </div>
                      <p className="text-sm text-gray-600">ESP32-based smart bins</p>
                    </div>
                  </div>
                </div>

                {/* Service Layer */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-center">Service Layer</h3>
                  <div className="space-y-3">
                    {architectureComponents.map((component) => {
                      const Icon = component.icon
                      return (
                        <div
                          key={component.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedComponent === component.id
                              ? "ring-2 ring-primary bg-primary/5"
                              : "hover:shadow-md bg-white"
                          }`}
                          onClick={() => setSelectedComponent(component.id)}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-5 w-5" />
                            <span className="font-medium">{component.name}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{component.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {component.tech}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Data Layer */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-center">Data Layer</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-gray-600" />
                        <span className="font-medium">Primary Database</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">PostgreSQL for transactional data</p>
                      <Badge variant="outline" className="text-xs">
                        ACID Compliant
                      </Badge>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Server className="h-5 w-5 text-orange-600" />
                        <span className="font-medium">Time Series DB</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">InfluxDB for sensor data</p>
                      <Badge variant="outline" className="text-xs">
                        High Performance
                      </Badge>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-red-600" />
                        <span className="font-medium">Cache Layer</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Redis for session & caching</p>
                      <Badge variant="outline" className="text-xs">
                        Sub-ms Latency
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Flow Diagram */}
          <Card>
            <CardHeader>
              <CardTitle>Data Flow Architecture</CardTitle>
              <CardDescription>End-to-end data flow from IoT devices to user applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center items-center gap-4 p-6">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-purple-100 rounded-lg">
                    <Cpu className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-sm mt-2 font-medium">ESP32 Sensors</span>
                  <span className="text-xs text-muted-foreground">Data Collection</span>
                </div>

                <ArrowRight className="text-muted-foreground" />

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-blue-100 rounded-lg">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-sm mt-2 font-medium">MQTT Broker</span>
                  <span className="text-xs text-muted-foreground">Message Queue</span>
                </div>

                <ArrowRight className="text-muted-foreground" />

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-orange-100 rounded-lg">
                    <Zap className="h-8 w-8 text-orange-600" />
                  </div>
                  <span className="text-sm mt-2 font-medium">ML Service</span>
                  <span className="text-xs text-muted-foreground">Classification</span>
                </div>

                <ArrowRight className="text-muted-foreground" />

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <Database className="h-8 w-8 text-gray-600" />
                  </div>
                  <span className="text-sm mt-2 font-medium">Database</span>
                  <span className="text-xs text-muted-foreground">Data Storage</span>
                </div>

                <ArrowRight className="text-muted-foreground" />

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-emerald-100 rounded-lg">
                    <Monitor className="h-8 w-8 text-emerald-600" />
                  </div>
                  <span className="text-sm mt-2 font-medium">Client Apps</span>
                  <span className="text-xs text-muted-foreground">User Interface</span>
                </div>
              </div>

              <div className="mt-6 bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Real-time Processing:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>MQTT for low-latency messaging</li>
                      <li>WebSocket connections for live updates</li>
                      <li>Event-driven architecture</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Scalability:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Horizontal scaling with load balancers</li>
                      <li>Microservices architecture</li>
                      <li>Auto-scaling based on demand</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apis" className="space-y-6">
          {/* API Overview */}
          <Card>
            <CardHeader>
              <CardTitle>RESTful API Design</CardTitle>
              <CardDescription>Comprehensive API endpoints for all system components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(apiEndpoints).map(([category, endpoints]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-4 capitalize">{category} APIs</h3>
                    <div className="space-y-3">
                      {endpoints.map((endpoint, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant={
                                endpoint.method === "GET"
                                  ? "secondary"
                                  : endpoint.method === "POST"
                                    ? "default"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm font-mono">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* API Documentation Sample */}
          <Card>
            <CardHeader>
              <CardTitle>API Documentation Sample</CardTitle>
              <CardDescription>Example API endpoint with request/response format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// POST /api/iot/sensor-data
// Receive sensor data from smart bins

// Request Headers
{
  "Authorization": "Bearer <JWT_TOKEN>",
  "Content-Type": "application/json",
  "X-Device-ID": "intellibin_001"
}

// Request Body
{
  "device_id": "intellibin_001",
  "timestamp": "2024-01-15T10:30:00Z",
  "location": {
    "latitude": 28.6139,
    "longitude": 77.2090,
    "ward": "Ward 3"
  },
  "sensors": {
    "camera": {
      "image_base64": "iVBORw0KGgoAAAANSUhEUgAA...",
      "resolution": "640x480",
      "format": "JPEG"
    },
    "load_cell": {
      "weight_grams": 245.7,
      "calibrated": true
    },
    "gas_sensor": {
      "methane_ppm": 12.3,
      "co2_ppm": 450.2,
      "ammonia_ppm": 8.1
    },
    "environmental": {
      "temperature_c": 28.5,
      "humidity_percent": 65.2
    }
  },
  "bin_status": {
    "organic_fill": 45,
    "recyclable_fill": 62,
    "hazardous_fill": 23,
    "last_collection": "2024-01-14T08:00:00Z"
  }
}

// Response (200 OK)
{
  "status": "success",
  "message": "Sensor data received and processed",
  "classification": {
    "waste_type": "organic",
    "confidence": 0.94,
    "action": "open_organic_compartment"
  },
  "bin_update": {
    "new_fill_level": 47,
    "collection_needed": false,
    "next_collection_eta": "2024-01-16T14:00:00Z"
  },
  "user_reward": {
    "user_id": "user_12345",
    "coins_earned": 15,
    "total_coins": 1865
  }
}

// Error Response (400 Bad Request)
{
  "status": "error",
  "error_code": "INVALID_SENSOR_DATA",
  "message": "Invalid or missing sensor readings",
  "details": {
    "missing_fields": ["load_cell.weight_grams"],
    "invalid_fields": ["gas_sensor.methane_ppm"]
  }
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* API Rate Limiting */}
          <Card>
            <CardHeader>
              <CardTitle>API Rate Limiting & Quotas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">IoT Devices</h4>
                  <div className="space-y-1 text-sm">
                    <div>Rate: 100 req/min</div>
                    <div>Burst: 200 req</div>
                    <div>Daily: 50,000 req</div>
                  </div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Mobile Apps</h4>
                  <div className="space-y-1 text-sm">
                    <div>Rate: 60 req/min</div>
                    <div>Burst: 120 req</div>
                    <div>Daily: 10,000 req</div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Web Dashboard</h4>
                  <div className="space-y-1 text-sm">
                    <div>Rate: 120 req/min</div>
                    <div>Burst: 300 req</div>
                    <div>Daily: 25,000 req</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-6">
          {/* Database Schema */}
          <Card>
            <CardHeader>
              <CardTitle>Database Schema Design</CardTitle>
              <CardDescription>Normalized relational schema for optimal performance and data integrity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(databaseSchema).map(([table, schema]) => (
                  <div key={table} className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-3 capitalize">{table} Table</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Fields:</h4>
                        <div className="space-y-1">
                          {schema.fields.map((field, index) => (
                            <div key={index} className="text-sm font-mono bg-muted px-2 py-1 rounded">
                              {field}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Relationships:</h4>
                        <div className="space-y-1">
                          {schema.relationships.map((rel, index) => (
                            <div key={index} className="text-sm text-blue-600">
                              {rel}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Database Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Database Optimization</CardTitle>
              <CardDescription>Performance tuning and scaling strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Indexing Strategy</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="font-medium text-sm">Primary Indexes</div>
                      <div className="text-sm text-muted-foreground">users.aadhaar_hash, bins.location</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="font-medium text-sm">Composite Indexes</div>
                      <div className="text-sm text-muted-foreground">disposals(user_id, timestamp)</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="font-medium text-sm">Partial Indexes</div>
                      <div className="text-sm text-muted-foreground">bins WHERE status = 'full'</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Scaling Approach</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="font-medium text-sm">Read Replicas</div>
                      <div className="text-sm text-muted-foreground">3 replicas for dashboard queries</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="font-medium text-sm">Partitioning</div>
                      <div className="text-sm text-muted-foreground">sensor_readings by timestamp</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="font-medium text-sm">Caching</div>
                      <div className="text-sm text-muted-foreground">Redis for frequent queries</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Migration */}
          <Card>
            <CardHeader>
              <CardTitle>Database Migration Scripts</CardTitle>
              <CardDescription>SQL scripts for database setup and data migration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`-- Create Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aadhaar_hash VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    green_coins INTEGER DEFAULT 0,
    total_disposals INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

-- Create Bins Table
CREATE TABLE bins (
    id VARCHAR(20) PRIMARY KEY,
    location POINT NOT NULL,
    ward VARCHAR(20) NOT NULL,
    capacity DECIMAL(5,2) NOT NULL,
    current_fill DECIMAL(5,2) DEFAULT 0,
    last_collection TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active',
    sensors JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Disposals Table
CREATE TABLE disposals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    bin_id VARCHAR(20) REFERENCES bins(id),
    waste_type VARCHAR(20) NOT NULL,
    weight DECIMAL(6,2) NOT NULL,
    confidence DECIMAL(3,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    coins_earned INTEGER DEFAULT 0,
    image_url VARCHAR(255)
);

-- Create Indexes
CREATE INDEX idx_users_aadhaar ON users(aadhaar_hash);
CREATE INDEX idx_bins_location ON bins USING GIST(location);
CREATE INDEX idx_bins_ward ON bins(ward);
CREATE INDEX idx_disposals_user_timestamp ON disposals(user_id, timestamp DESC);
CREATE INDEX idx_disposals_bin_timestamp ON disposals(bin_id, timestamp DESC);

-- Create Sensor Readings Table (Time Series)
CREATE TABLE sensor_readings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bin_id VARCHAR(20) REFERENCES bins(id),
    timestamp TIMESTAMP NOT NULL,
    weight DECIMAL(6,2),
    fill_level DECIMAL(5,2),
    gas_readings JSONB,
    temperature DECIMAL(4,1),
    humidity DECIMAL(4,1)
) PARTITION BY RANGE (timestamp);

-- Create monthly partitions
CREATE TABLE sensor_readings_2024_01 PARTITION OF sensor_readings
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          {/* Security Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    {feature.feature}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Implementation:</span>
                      <div className="text-sm text-muted-foreground">{feature.implementation}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Compliance:</span>
                      <Badge variant="outline" className="ml-2">
                        {feature.compliance}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Checklist */}
          <Card>
            <CardHeader>
              <CardTitle>Security Implementation Checklist</CardTitle>
              <CardDescription>Comprehensive security measures and compliance requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Authentication & Authorization</h4>
                  <div className="space-y-2">
                    {[
                      "Aadhaar OTP integration with UIDAI",
                      "JWT token-based authentication",
                      "Role-based access control (RBAC)",
                      "Multi-factor authentication for admins",
                      "Session management and timeout",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Data Protection</h4>
                  <div className="space-y-2">
                    {[
                      "End-to-end encryption (TLS 1.3)",
                      "Database encryption at rest",
                      "PII data anonymization",
                      "GDPR compliance mechanisms",
                      "Data retention policies",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">API Security</h4>
                  <div className="space-y-2">
                    {[
                      "Rate limiting and throttling",
                      "Input validation and sanitization",
                      "CORS policy implementation",
                      "API key management",
                      "Request/response logging",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Infrastructure Security</h4>
                  <div className="space-y-2">
                    {[
                      "VPC and network segmentation",
                      "Firewall and intrusion detection",
                      "Regular security audits",
                      "Vulnerability scanning",
                      "Incident response procedures",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Framework */}
          <Card>
            <CardHeader>
              <CardTitle>Compliance Framework</CardTitle>
              <CardDescription>Regulatory compliance and data protection standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">GDPR Compliance</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Right to be forgotten</li>
                    <li>• Data portability</li>
                    <li>• Consent management</li>
                    <li>• Privacy by design</li>
                  </ul>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Indian Data Protection</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Aadhaar Act compliance</li>
                    <li>• IT Act 2000</li>
                    <li>• Data localization</li>
                    <li>• Audit requirements</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Security Standards</h4>
                  <ul className="text-sm space-y-1">
                    <li>• ISO 27001</li>
                    <li>• SOC 2 Type II</li>
                    <li>• OWASP Top 10</li>
                    <li>• PCI DSS (if applicable)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment" className="space-y-6">
          {/* Deployment Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all ${
                  selectedDeployment === option.id ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedDeployment(option.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-emerald-600 mb-2">Advantages:</h4>
                    <ul className="text-sm space-y-1">
                      {option.pros.map((pro, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-emerald-600" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-2">Considerations:</h4>
                    <ul className="text-sm space-y-1">
                      {option.cons.map((con, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <AlertTriangle className="h-3 w-3 text-orange-600" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-sm font-medium">Billing Model: </span>
                    <Badge variant="outline">{option.features}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recommended Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Deployment Architecture</CardTitle>
              <CardDescription>Hybrid approach combining Vercel and AWS for optimal performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Vercel (Frontend & API)</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Next.js web dashboard</li>
                      <li>• Edge functions for API gateway</li>
                      <li>• Global CDN for static assets</li>
                      <li>• Automatic HTTPS and scaling</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">AWS (Backend Services)</h4>
                    <ul className="text-sm space-y-2">
                      <li>• IoT Core for device management</li>
                      <li>• Lambda for ML processing</li>
                      <li>• RDS for database</li>
                      <li>• S3 for image storage</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Deployment Pipeline</h4>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">Git Push</span>
                    </div>
                    <ArrowRight className="text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">CI/CD Pipeline</span>
                    </div>
                    <ArrowRight className="text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm">Automated Testing</span>
                    </div>
                    <ArrowRight className="text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-purple-600" />
                      <span className="text-sm">Production Deploy</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure Scaling */}
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Scaling Strategy</CardTitle>
              <CardDescription>Scalable architecture for different deployment sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Pilot Deployment (100 bins)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Vercel Pro Plan</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>AWS Basic Services</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Single Database Instance</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Basic Monitoring</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">City Scale (1000 bins)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Vercel Enterprise</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>AWS Auto-scaling</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Database Clustering</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Advanced Analytics</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Metro Scale (10,000 bins)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Multi-region Deployment</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Microservices Architecture</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Distributed Database</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between">
                      <span>Enterprise Monitoring</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
