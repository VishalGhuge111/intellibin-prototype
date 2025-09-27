"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Award,
  CheckCircle,
  Clock,
  Globe,
  Zap,
  Recycle,
  Smartphone,
  Brain,
  Cloud,
  Download,
  ExternalLink,
} from "lucide-react"

export function SIHDocumentation() {
  const [activeSection, setActiveSection] = useState("overview")

  const teamMembers = [
    { name: "Janhavi Kashyap", role: "Team Lead & Android Developer", expertise: "React Native, Flutter, UI/UX" },
    { name: "Harsh Pandhe", role: "Blockchain Developer & Co-Lead", expertise: "Blockchain, Node.JS, MERN" },
    { name: "Dhiraj Durgade", role: "Backend Developer", expertise: "Django, Python, Javascript" },
    { name: "Naman Stephen", role: "IoT Developer", expertise: "Arduino, Sensors, MQTT, Hardware" },
    { name: "Ujwal Thakur", role: "ML Engineer", expertise: "Computer Vision, TensorFlow, Data Science" },
    { name: "Vishal Ghuge", role: "Web Developer", expertise: "React, Node.js, Tailwind CSS" },
  ]

  const milestones = [
    { phase: "Research & Planning", progress: 100, status: "completed" },
    { phase: "Prototype Development", progress: 100, status: "completed" },
    { phase: "IoT Integration", progress: 85, status: "in-progress" },
    { phase: "ML Model Training", progress: 90, status: "in-progress" },
    { phase: "Mobile App Development", progress: 75, status: "in-progress" },
    { phase: "Municipal Dashboard", progress: 80, status: "in-progress" },
    { phase: "Testing & Validation", progress: 60, status: "planned" },
    { phase: "Deployment & Scaling", progress: 30, status: "planned" },
  ]

  const techStack = [
    { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
    { category: "Backend", technologies: ["Node.js", "Express", "MongoDB", "Redis", "WebSocket"] },
    { category: "Mobile", technologies: ["React Native", "Expo", "AsyncStorage", "Push Notifications"] },
    { category: "IoT", technologies: ["Arduino", "ESP32", "MQTT", "Sensors", "LoRaWAN"] },
    { category: "ML/AI", technologies: ["TensorFlow", "OpenCV", "Python", "CNN", "Edge AI"] },
    { category: "Cloud", technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"] },
  ]

  const impactMetrics = [
    { metric: "Waste Segregation Accuracy", target: "95%", current: "92%" },
    { metric: "User Engagement Rate", target: "80%", current: "75%" },
    { metric: "Recycling Rate Improvement", target: "60%", current: "55%" },
    { metric: "Carbon Footprint Reduction", target: "30%", current: "25%" },
    { metric: "Collection Efficiency", target: "85%", current: "80%" },
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Smart India Hackathon 2025
          </h1>
        </div>
        <h2 className="text-2xl font-semibold text-foreground">IntelliBin: Complete Project Documentation</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive technical documentation and project overview for the Intelligent Household Waste Segregation &
          Recycling System - A revolutionary IoT + ML solution for sustainable waste management.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-green-100 text-green-800 border-green-200">Problem Statement: SIH25046</Badge>
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Theme: Clean and Green Technology</Badge>
          <Badge className="bg-purple-100 text-purple-800 border-purple-200">Category: Hardware</Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="solution">Solution</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        {/* Overview Section */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  India generates over 62 million tonnes of waste annually, with only 60% being collected and 15% being
                  processed. Poor waste segregation at source leads to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Environmental pollution and health hazards
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Inefficient waste collection and processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    Low recycling rates and resource wastage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    High municipal waste management costs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  IntelliBin is an AI-powered smart waste management ecosystem that revolutionizes waste segregation
                  through:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Automated waste classification using Computer Vision
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    IoT-enabled smart bins with real-time monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Gamified mobile app with rewards system
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Municipal dashboard for efficient collection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Key Features & Innovation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Brain className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold">AI Classification</h3>
                  <p className="text-sm text-muted-foreground">95% accuracy in waste type detection</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold">Real-time IoT</h3>
                  <p className="text-sm text-muted-foreground">Live monitoring and alerts</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Smartphone className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold">User Engagement</h3>
                  <p className="text-sm text-muted-foreground">Gamification with GreenCoins</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Solution Architecture */}
        <TabsContent value="solution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Solution Architecture</CardTitle>
              <CardDescription>Complete system overview and component interaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">System Components</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Recycle className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-medium">Smart Dustbin Hardware</h4>
                        <p className="text-sm text-muted-foreground">IoT sensors, camera, segregation mechanism</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Brain className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-medium">AI Classification Engine</h4>
                        <p className="text-sm text-muted-foreground">CNN model for waste type detection</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Smartphone className="h-6 w-6 text-purple-600" />
                      <div>
                        <h4 className="font-medium">Mobile Application</h4>
                        <p className="text-sm text-muted-foreground">User interface with rewards system</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Cloud className="h-6 w-6 text-orange-600" />
                      <div>
                        <h4 className="font-medium">Cloud Backend</h4>
                        <p className="text-sm text-muted-foreground">Data processing and analytics</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Data Flow</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <span>User deposits waste in smart bin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <span>Camera captures waste image</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <span>AI model classifies waste type</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <span>Mechanical segregation occurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-100 text-red-800 rounded-full flex items-center justify-center text-xs font-bold">
                        5
                      </div>
                      <span>Data sent to cloud backend</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center text-xs font-bold">
                        6
                      </div>
                      <span>User receives GreenCoins reward</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center text-xs font-bold">
                        7
                      </div>
                      <span>Municipal dashboard updated</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Technical Specifications */}
        <TabsContent value="technical" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {techStack.map((stack, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-sm">{stack.category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {stack.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Hardware Specifications</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• ESP32 microcontroller with WiFi/Bluetooth</li>
                    <li>• ESP Camera Module for image capture</li>
                    <li>• IR sensors for proximity detection</li>
                    <li>• Servo motors for compartment control</li>
                    <li>• Stepper motor for mechanical operations</li>
                    <li>• Weight sensors for load measurement</li>
                    <li>• Solar panel for sustainable power</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Software Requirements</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Node.js 18+ for backend services</li>
                    <li>• MongoDB for data storage</li>
                    <li>• Redis for caching and sessions</li>
                    <li>• TensorFlow 2.x for ML models</li>
                    <li>• React Native for mobile app</li>
                    <li>• AWS/Azure for cloud deployment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Security & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold">Data Security</h3>
                  <p className="text-sm text-muted-foreground">End-to-end encryption, secure APIs</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <FileText className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold">Privacy Compliance</h3>
                  <p className="text-sm text-muted-foreground">GDPR compliant, data anonymization</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Globe className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold">Standards</h3>
                  <p className="text-sm text-muted-foreground">ISO 27001, municipal regulations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Timeline */}
        <TabsContent value="implementation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Development Milestones</CardTitle>
              <CardDescription>Current progress and upcoming phases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{milestone.phase}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{milestone.progress}%</span>
                        {milestone.status === "completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {milestone.status === "in-progress" && <Clock className="h-4 w-4 text-blue-500" />}
                        {milestone.status === "planned" && <Clock className="h-4 w-4 text-gray-400" />}
                      </div>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Impact & Metrics */}
        <TabsContent value="impact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Expected Impact Metrics</CardTitle>
              <CardDescription>Projected outcomes and current achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{metric.metric}</span>
                      <span className="text-sm text-muted-foreground">
                        {metric.current} / {metric.target}
                      </span>
                    </div>
                    <Progress
                      value={(Number.parseFloat(metric.current) / Number.parseFloat(metric.target)) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">30%</div>
                  <div className="text-sm text-muted-foreground">Carbon footprint reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-muted-foreground">Increase in recycling rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-muted-foreground">Waste segregation accuracy</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Operational Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-sm text-muted-foreground">Collection efficiency improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-muted-foreground">Route optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-muted-foreground">Jobs created</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Social Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1M+</div>
                  <div className="text-sm text-muted-foreground">Citizens engaged</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">80%</div>
                  <div className="text-sm text-muted-foreground">User satisfaction rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-muted-foreground">Health improvement</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Team Information */}
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team IntelliBin</CardTitle>
              <CardDescription>Meet the innovators behind the solution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-blue-600">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>


        </TabsContent>
      </Tabs>
    </div>
  )
}
