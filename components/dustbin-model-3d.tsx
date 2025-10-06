"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Camera, Zap, Gauge, Wifi, Recycle, Leaf, AlertTriangle, RotateCcw } from "lucide-react"

export function DustbinModel3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedWaste, setSelectedWaste] = useState<string | null>(null)
  const [binStatus, setBinStatus] = useState({
    organic: 45,
    recyclable: 62,
    hazardous: 23,
  })
  const [isSimulating, setIsSimulating] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 600

    // Draw 3D-style dustbin
    const drawDustbin = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Main bin body
      ctx.fillStyle = "#e5e7eb"
      ctx.fillRect(200, 200, 400, 300)

      // 3D effect - right side
      ctx.fillStyle = "#d1d5db"
      ctx.beginPath()
      ctx.moveTo(600, 200)
      ctx.lineTo(650, 150)
      ctx.lineTo(650, 450)
      ctx.lineTo(600, 500)
      ctx.closePath()
      ctx.fill()

      // 3D effect - top
      ctx.fillStyle = "#f3f4f6"
      ctx.beginPath()
      ctx.moveTo(200, 200)
      ctx.lineTo(250, 150)
      ctx.lineTo(650, 150)
      ctx.lineTo(600, 200)
      ctx.closePath()
      ctx.fill()

      // Compartments
      const compartments = [
        { x: 220, y: 220, width: 110, height: 260, color: "#10b981", label: "ORGANIC" },
        { x: 345, y: 220, width: 110, height: 260, color: "#3b82f6", label: "RECYCLABLE" },
        { x: 470, y: 220, width: 110, height: 260, color: "#ef4444", label: "HAZARDOUS" },
      ]

      compartments.forEach((comp, index) => {
        // Compartment body
        ctx.fillStyle = comp.color
        ctx.fillRect(comp.x, comp.y, comp.width, comp.height)

        // Compartment label
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(comp.label, comp.x + comp.width / 2, comp.y + 20)

        // Fill level indicator
        const fillLevels = [binStatus.organic, binStatus.recyclable, binStatus.hazardous]
        const fillHeight = (fillLevels[index] / 100) * (comp.height - 40)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fillRect(comp.x + 10, comp.y + comp.height - fillHeight - 10, comp.width - 20, fillHeight)

        // Lid (servo controlled)
        ctx.fillStyle = selectedWaste === comp.label.toLowerCase() ? "#fbbf24" : "#6b7280"
        ctx.fillRect(comp.x - 5, comp.y - 15, comp.width + 10, 15)
      })

      // Sensors
      // ESP32 Camera Module
      ctx.fillStyle = "#1f2937"
      ctx.fillRect(380, 180, 40, 20)
      ctx.fillStyle = "#3b82f6"
      ctx.beginPath()
      ctx.arc(400, 190, 8, 0, 2 * Math.PI)
      ctx.fill()

      // Load cell indicator
      ctx.fillStyle = "#059669"
      ctx.fillRect(190, 480, 20, 20)

      // Weight sensor indicator (additional)
      ctx.fillStyle = "#f59e0b"
      ctx.fillRect(590, 480, 20, 20)

      // WiFi indicator
      if (isSimulating) {
        ctx.strokeStyle = "#10b981"
        ctx.lineWidth = 2
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.arc(750, 50, 10 + i * 8, 0, Math.PI, true)
          ctx.stroke()
        }
      }
    }

    drawDustbin()
  }, [selectedWaste, binStatus, isSimulating])

  const simulateWasteDetection = (wasteType: string) => {
    setSelectedWaste(wasteType)
    setIsSimulating(true)

    // Simulate detection process
    setTimeout(() => {
      setBinStatus((prev) => ({
        ...prev,
        [wasteType as keyof typeof prev]: Math.min(prev[wasteType as keyof typeof prev] + Math.random() * 10, 100),
      }))
      setIsSimulating(false)
      setSelectedWaste(null)
    }, 2000)
  }

  const resetSimulation = () => {
    setBinStatus({ organic: 45, recyclable: 62, hazardous: 23 })
    setSelectedWaste(null)
    setIsSimulating(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-primary" />
            Interactive 3D Dustbin Model
          </CardTitle>
          <CardDescription>
            Real-time visualization of IntelliBin with sensor integration and AI-powered waste classification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 3D Model Canvas */}
            <div className="lg:col-span-2">
              <div className="relative border rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <canvas ref={canvasRef} className="w-full h-auto" style={{ maxHeight: "600px" }} />
                {isSimulating && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
                        <span className="text-sm font-medium">Processing waste classification...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Controls and Status */}
            <div className="space-y-4">
              {/* Waste Simulation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Waste Detection Simulation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={() => simulateWasteDetection("organic")}
                    disabled={isSimulating}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                  >
                    <Leaf className="h-4 w-4 mr-2" />
                    Drop Organic Waste
                  </Button>
                  <Button
                    onClick={() => simulateWasteDetection("recyclable")}
                    disabled={isSimulating}
                    className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  >
                    <Recycle className="h-4 w-4 mr-2" />
                    Drop Recyclable
                  </Button>
                  <Button
                    onClick={() => simulateWasteDetection("hazardous")}
                    disabled={isSimulating}
                    className="w-full bg-red-600 hover:bg-red-700 cursor-pointer"
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Drop Hazardous
                  </Button>
                  <Button onClick={resetSimulation} variant="outline" className="w-full bg-transparent cursor-pointer">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </CardContent>
              </Card>

              {/* Bin Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fill Levels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Organic</span>
                      <span>{binStatus.organic}%</span>
                    </div>
                    <Progress value={binStatus.organic} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Recyclable</span>
                      <span>{binStatus.recyclable}%</span>
                    </div>
                    <Progress value={binStatus.recyclable} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Hazardous</span>
                      <span>{binStatus.hazardous}%</span>
                    </div>
                    <Progress value={binStatus.hazardous} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Sensor Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sensor Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      <span className="text-sm">ESP32 Camera</span>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4" />
                      <span className="text-sm">Weight Sensor</span>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm">UltraSonic Sensors</span>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4" />
                      <span className="text-sm">ESP32 WiFi</span>
                    </div>
                    <Badge variant={isSimulating ? "default" : "secondary"}>
                      {isSimulating ? "Transmitting" : "Connected"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hardware Components</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• ESP32 Microcontroller</li>
              <li>• ESP Camera Module</li>
              <li>• Weight Sensor</li>
              <li>• IR Sensors</li>
              <li>• Servo Motors (3x)</li>
              <li>• Stepper Motor</li>
              <li>• LED Indicators</li>
              <li>• WiFi/MQTT Connectivity</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• CNN-based Image Recognition</li>
              <li>• 90%+ Accuracy Target</li>
              <li>• Server Inference</li>
              <li>• Real-time Processing</li>
              <li>• Multi-sensor Fusion</li>
              <li>• Continuous Learning</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Smart Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Automatic Lid Control</li>
              <li>• Fill Level Monitoring</li>
              <li>• Waste Classification</li>
              <li>• IoT Connectivity</li>
              <li>• Real-time Alerts</li>
              <li>• Data Analytics</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
