"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DustbinModel3D } from "./dustbin-model-3d"
import { IoTDocumentation } from "./iot-documentation"
import { MLModule } from "./ml-module"
import { MobileAppWireframes } from "./mobile-app-wireframes"
import { MunicipalDashboard } from "./municipal-dashboard"
import { BackendArchitecture } from "./backend-architecture"
import { SIHDocumentation } from "./sih-documentation"
import { Cpu, Smartphone, Monitor, Cloud, FileText, Recycle, Brain } from "lucide-react"

export function IntelliBinPrototype() {
  const [activeTab, setActiveTab] = useState("3d-model")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-primary rounded-xl">
            <Recycle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">IntelliBin</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-4">Intelligent Household Waste Segregation & Recycling System</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Smart India Hackathon 2024</Badge>
          <Badge variant="outline">IoT + ML + Mobile</Badge>
          <Badge variant="outline">Municipal Grade</Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7 mb-8">
          <TabsTrigger value="3d-model" className="flex items-center gap-2">
            <Recycle className="h-4 w-4" />
            3D Model
          </TabsTrigger>
          <TabsTrigger value="iot" className="flex items-center gap-2">
            <Cpu className="h-4 w-4" />
            IoT System
          </TabsTrigger>
          <TabsTrigger value="ml" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            ML Module
          </TabsTrigger>
          <TabsTrigger value="mobile" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            Mobile App
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="backend" className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            Backend
          </TabsTrigger>
          <TabsTrigger value="docs" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Documentation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="3d-model">
          <DustbinModel3D />
        </TabsContent>

        <TabsContent value="iot">
          <IoTDocumentation />
        </TabsContent>

        <TabsContent value="ml">
          <MLModule />
        </TabsContent>

        <TabsContent value="mobile">
          <MobileAppWireframes />
        </TabsContent>

        <TabsContent value="dashboard">
          <MunicipalDashboard />
        </TabsContent>

        <TabsContent value="backend">
          <BackendArchitecture />
        </TabsContent>

        <TabsContent value="docs">
          <SIHDocumentation />
        </TabsContent>
      </Tabs>
    </div>
  )
}
