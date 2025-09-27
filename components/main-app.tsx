"use client"

import { useState } from "react"
import { Navbar } from "./navbar"
import { LandingPage } from "./landing-page"
import { DustbinModel3D } from "./dustbin-model-3d"
import { MLModule } from "./ml-module"
import { MobileAppWireframes } from "./mobile-app-wireframes"
import { MunicipalDashboard } from "./municipal-dashboard"
import { BackendArchitecture } from "./backend-architecture"
import { IoTDocumentation } from "./iot-documentation"
import { SIHDocumentation } from "./sih-documentation"
import { MLDemoPage } from "./ml-demo-page"
import { MunicipalSurvey } from "./municipal-survey"

export function MainApp() {
  const [activeSection, setActiveSection] = useState("home")

  const handleNavigation = (section: string) => {
    setActiveSection(section)
  }

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <LandingPage onNavigate={handleNavigation} />
      case "3d-model":
        return (
          <div className="container mx-auto px-4 py-8">
            <DustbinModel3D />
          </div>
        )
      case "demo":
        return <MLDemoPage />
      case "ml-module":
        return (
          <div className="container mx-auto px-4 py-8">
            <MLModule />
          </div>
        )
      case "municipal-dashboard":
        return (
          <div className="container mx-auto px-4 py-8">
            <MunicipalDashboard />
          </div>
        )
      case "citizen-app":
        return (
          <div className="container mx-auto px-4 py-8">
            <MobileAppWireframes />
          </div>
        )
      case "documentation":
        return (
          <div className="container mx-auto px-4 py-8">
            <SIHDocumentation />
          </div>
        )
      case "iot-system":
        return (
          <div className="container mx-auto px-4 py-8">
            <IoTDocumentation />
          </div>
        )
      case "backend":
        return (
          <div className="container mx-auto px-4 py-8">
            <BackendArchitecture />
          </div>
        )
      case "municipal-survey":
        return (
          <div className="container">
            <MunicipalSurvey />
          </div>
        )
      default:
        return <LandingPage onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      <main>{renderContent()}</main>
    </div>
  )
}
