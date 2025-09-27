"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Recycle,
  Menu,
  FileText,
  Cpu,
  Cloud,
  Home,
  Box,
  TestTube,
  Brain,
  Building2,
  Monitor,
  Smartphone,
  ChevronDown,
} from "lucide-react"

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDocDropdownOpen, setIsDocDropdownOpen] = useState(false)

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "3d-model", label: "3D Model", icon: Box },
    { id: "demo", label: "Demo", icon: Building2 },
    { id: "municipal-dashboard", label: "Municipal Dashboard", icon: Monitor },
    { id: "citizen-app", label: "Citizen App", icon: Smartphone },
    { id: "ml-module", label: "ML Module", icon: Brain },
  ]

  const documentationItems = [
    { id: "documentation", label: "Overview", icon: FileText },
    { id: "iot-system", label: "IoT System", icon: Cpu },
    { id: "backend", label: "Backend Architecture", icon: Cloud },
    { id: "municipal-survey", label: "Municipal Survey", icon: Building2 },
  ]

  const handleNavigation = (section: string) => {
    onNavigate(section)
    setIsOpen(false)
    setIsDocDropdownOpen(false)
  }

  const toggleDocDropdown = () => {
    setIsDocDropdownOpen(!isDocDropdownOpen)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="p-2 bg-primary rounded-lg">
              <Recycle className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">IntelliBin</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => handleNavigation(item.id)}
                className="h-10 px-4 gap-3 text-sm font-medium"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}

            <div className="relative">
              <Button
                variant={documentationItems.some((item) => activeSection === item.id) ? "default" : "ghost"}
                onClick={toggleDocDropdown}
                className="h-10 px-4 gap-3 text-sm font-medium"
              >
                <FileText className="h-4 w-4" />
                Documentation
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isDocDropdownOpen ? "rotate-180" : ""}`}
                />
              </Button>

              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg transition-all duration-200 ${
                  isDocDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-2">
                  {documentationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "default" : "ghost"}
                      onClick={() => handleNavigation(item.id)}
                      className="w-full justify-start gap-3 h-10 text-sm font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary rounded-lg">
                    <Recycle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold">IntelliBin</span>
                </div>

                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "default" : "ghost"}
                      onClick={() => handleNavigation(item.id)}
                      className="w-full justify-start gap-3"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-muted-foreground mb-2 px-3">Documentation</p>
                    {documentationItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={activeSection === item.id ? "default" : "ghost"}
                        onClick={() => handleNavigation(item.id)}
                        className="w-full justify-start gap-3"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
