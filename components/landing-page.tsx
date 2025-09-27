"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Center } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Recycle,
  Brain,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  TrendingUp,
  Play,
  CheckCircle,
  ArrowRight,
  Users,
  Leaf,
  Camera,
  Cpu,
  BarChart3,
  Sparkles,
  Globe,
  Award,
} from "lucide-react"
import type * as THREE from "three"

// 3D Rotating Dustbin Component
function RotatingDustbin() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Main Dustbin Body - Enhanced with gradient-like effect */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1, 2, 32]} />
        <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.2} envMapIntensity={1.5} />
      </mesh>

      {/* Lid - More premium look */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.2, 32]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.8} roughness={0.1} envMapIntensity={2} />
      </mesh>

      {/* Handle on lid */}
      <mesh position={[0, 1.4, 0]}>
        <torusGeometry args={[0.3, 0.05, 8, 16]} />
        <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Smart Sensors - More prominent */}
      <mesh position={[0, 0.5, 1.1]}>
        <boxGeometry args={[0.4, 0.3, 0.15]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.4}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Camera lens on sensor */}
      <mesh position={[0, 0.5, 1.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
        <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.1} />
      </mesh>

      <Center position={[0, 0, 1.2]}>
        <Text font="/fonts/Geist-Bold.ttf" fontSize={0.18} color="#f59e0b" anchorX="center" anchorY="middle">
          AI
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.3}
            metalness={0.2}
            roughness={0.3}
          />
        </Text>
      </Center>

      {/* Compartment Indicators - Enhanced with glow effect */}
      <mesh position={[-0.8, -0.5, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0.8, -0.5, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Base platform */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[1.4, 1.4, 0.1, 32]} />
        <meshStandardMaterial color="#374151" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Waste sorting slots - Visual indicators */}
      <mesh position={[-0.6, 0.8, 0.8]}>
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.2} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.8, 0.8]}>
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0.6, 0.8, 0.8]}>
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.2} transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

export function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Classification",
      description: "Advanced machine learning algorithms with 95%+ accuracy in waste identification and sorting.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant waste classification and sorting with IoT sensors and edge computing capabilities.",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Comprehensive mobile app with GreenCoins rewards, disposal tracking, and community features.",
    },
    {
      icon: Monitor,
      title: "Municipal Dashboard",
      description: "Complete monitoring and analytics platform for city-wide waste management operations.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full compliance to municipal and environmental regulations.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Cloud-native infrastructure designed to scale from neighborhoods to entire smart cities.",
    },
  ]

  const howItWorksSteps = [
    {
      step: "01",
      icon: Camera,
      title: "Smart Detection",
      description:
        "Advanced computer vision and IoT sensors automatically detect and analyze waste items as they're disposed.",
    },
    {
      step: "02",
      icon: Brain,
      title: "AI Classification",
      description:
        "Machine learning algorithms classify waste into organic, recyclable, or hazardous categories with 95%+ accuracy.",
    },
    {
      step: "03",
      icon: Cpu,
      title: "Automated Sorting",
      description:
        "Intelligent mechanical systems automatically sort waste into appropriate compartments based on AI analysis.",
    },
    {
      step: "04",
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Municipal dashboards provide live monitoring, collection optimization, and comprehensive waste management insights.",
    },
  ]

  const stats = [
    { number: "95%", label: "Classification Accuracy", icon: Brain },
    { number: "50%", label: "Waste Reduction", icon: Leaf },
    { number: "24/7", label: "Real-time Monitoring", icon: Monitor },
    { number: "1000+", label: "Active Users", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced with better gradient and spacing */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-emerald-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 py-24 relative max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Enhanced typography and spacing */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Intelligent
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Waste Revolution
                  </span>
                  <br />
                  <span className="text-gray-700 text-4xl lg:text-5xl">for Smart Cities</span>
                </h1>

                <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                  Revolutionary AI-powered waste segregation system that transforms how cities manage waste with{" "}
                  <span className="text-primary font-semibold">95%+ accuracy</span>, real-time monitoring, and citizen
                  engagement.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Button
                  size="lg"
                  onClick={() => handleNavigation("/demo")}
                  className="gap-3 px-8 py-4 text-lg bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 cursor-pointer"
                >
                  <Sparkles className="h-5 w-5" />
                  Try Live Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavigation("/3d-model")}
                  className="gap-3 px-8 py-4 text-lg border-2 hover:bg-primary/5 cursor-pointer"
                >
                  <Recycle className="h-5 w-5" />
                  Explore 3D Model
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">IoT Enabled</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">ML Powered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Municipal Ready</span>
                </div>
              </div>
            </div>

            {/* Right 3D Model - Enhanced with better lighting */}
            <div className="relative h-[600px] lg:h-[700px]">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                <pointLight position={[-10, -10, -5]} intensity={0.8} />
                <spotLight position={[0, 15, 0]} intensity={1.2} angle={0.3} penumbra={0.5} />
                <RotatingDustbin />
                <Environment preset="city" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
              </Canvas>

              {/* Floating Feature Badges - Enhanced positioning and styling */}
              <div className="absolute top-6 right-6 space-y-3">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white backdrop-blur-sm shadow-lg px-4 py-2">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Powered
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white backdrop-blur-sm shadow-lg px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  IoT Sensors
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white backdrop-blur-sm shadow-lg px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  Real-time
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced design */}
      <section className="py-20 bg-gradient-to-r from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">See IntelliBin in Action</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Watch how our intelligent waste management system revolutionizes city waste collection with AI-powered
              sorting and real-time monitoring.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-xl overflow-hidden">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <Button
                    size="lg"
                    onClick={() => setIsVideoPlaying(true)}
                    className="gap-2 text-lg px-8 py-6 cursor-pointer"
                  >
                    <Play className="h-6 w-6" />
                    Watch Demo Video
                  </Button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="IntelliBin Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">How IntelliBin Works</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our intelligent waste management system combines cutting-edge AI, IoT sensors, and automated sorting to
              revolutionize waste collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-4 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Powerful Features for Smart Cities</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comprehensive waste management solution with cutting-edge technology and municipal-grade reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better gradient */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-emerald-50/30 to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Transform Your City's
                <br />
                <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  Waste Management?
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Join the smart cities revolution with IntelliBin's AI-powered waste management system.
                <br />
                <span className="text-primary font-semibold">Clean. Green. Intelligent.</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                onClick={() => handleNavigation("/demo")}
                className="gap-3 px-10 py-4 text-lg bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 cursor-pointer"
              >
                <Sparkles className="h-5 w-5" />
                Start Free Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation("/documentation")}
                className="gap-3 px-10 py-4 text-lg border-2 hover:bg-primary/5 cursor-pointer"
              >
                <Award className="h-5 w-5" />
                View SIH Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
