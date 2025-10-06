"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Calendar,
  Building2,
  Quote,
  Camera,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Target,
} from "lucide-react"

export function MunicipalSurvey() {
  const surveyData = {
    location: "Municipal Corporation Lonavala",
    date: "23 September 2025",
  }

  const keyFindings = [
    {
      title: "Current System Challenges",
      description: "Manual tracking leads to 40% inefficiency in waste collection routes",
      impact: "High",
      icon: AlertCircle,
      color: "text-red-500",
    },
    {
      title: "Technology Adoption",
      description: "Ready to implement IoT-based solutions for better monitoring",
      impact: "Positive",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Resource Optimization",
      description: "Need for real-time data to optimize collection schedules",
      impact: "Critical",
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Staff Training",
      description: "Existing staff willing to adapt to new digital systems",
      impact: "Positive",
      icon: Target,
      color: "text-green-500",
    },
  ]

  const testimonials = [
    {
      name: "Mr. Rajesh Patil",
      position: "Waste Management Officer",
      quote:
        "Our current system relies heavily on manual processes. We track collection routes on paper and often miss optimal timing. An automated system would help us serve citizens better.",
      department: "Waste Management",
    },
    {
      name: "Mrs. Priya Sharma",
      position: "IT Head",
      position_marathi: "आयटी प्रमुख",
      quote:
        "We have basic infrastructure but lack real-time monitoring. IntelliBin's IoT approach aligns perfectly with our digitization goals.",
      department: "IT Department",
    },
    {
      name: "Mr. Sunil Jadhav",
      position: "Field Supervisor",
      quote:
        "Daily we face challenges in knowing which bins are full. Sometimes we visit empty bins, sometimes we miss overflowing ones. Smart monitoring would solve this completely.",
      department: "Field Operations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">SIH 2025 Field Research</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Municipal Survey Report
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Field survey conducted by our team at Municipal Corporation Lonavala as part of Smart India Hackathon 2025
              to understand the current waste management system and validate our IntelliBin solution approach
            </p>

            {/* Survey Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-lg">{surveyData.location}</p>
                  <p className="text-sm text-muted-foreground">Survey Location</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-lg">{surveyData.date}</p>
                  <p className="text-sm text-muted-foreground">Survey Date</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Survey Purpose & Methodology */}
        <Card className="mb-12 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Survey Purpose & Methodology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">Why We Conducted This Survey</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    As participants in <strong className="text-primary">Smart India Hackathon 2025</strong>, our team
                    needed to understand the real-world challenges faced by municipal corporations in waste management.
                  </p>
                  <p className="leading-relaxed">
                    This field survey was organized to validate our IntelliBin solution approach and ensure our
                    technology addresses actual ground-level problems faced by municipal staff and citizens.
                  </p>
                  <p className="leading-relaxed">
                    We wanted to learn directly from officials about their current system workflows, challenges, and
                    technology adoption readiness before finalizing our SIH solution design.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Research Approach</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Direct observation of current waste management processes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Interviews with department heads and field staff
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Documentation of existing infrastructure and workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    Assessment of technology readiness and adoption capacity
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Survey Images */}
        <Card className="mb-12 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Camera className="h-6 w-6 text-primary" />
              Survey Documentation
            </CardTitle>
            <p className="text-muted-foreground">
              Visual documentation from our field visit to Municipal Corporation Lonavala
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Large placeholder images that can be easily replaced */}
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 overflow-hidden">
                  <img
                    src="/municipal/team-members-with-municipal-staff-discussing-smart.jpg"
                    alt="Meeting with Municipal Officials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground font-medium">
                  Meeting with Municipal Officials - Understanding Current System
                </p>
              </div>

              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 overflow-hidden">
                  <img
                    src="/municipal/municipal-dashboard-computer-screen-showing-waste-.jpg"
                    alt="Current Municipal Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground font-medium">
                  Current Municipal Dashboard - Existing Tracking System
                </p>
              </div>

              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 overflow-hidden">
                  <img src="/municipal/waste-collection-trucks-and-bins-in-municipal-area.jpg" alt="Field Operations" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-center text-muted-foreground font-medium">
                  Field Operations - Current Waste Collection Process
                </p>
              </div>

              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 overflow-hidden">
                  <img src="/municipal/municipal-office-meeting-with-officials-discussing.jpg" alt="Team Discussion" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-center text-muted-foreground font-medium">
                  Team Discussion - Presenting IntelliBin Solution Concept
                </p>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 overflow-hidden">
                  <img
                    src="/municipal/municipal-corporation-lonavala-building-exterior-w.jpg"
                    alt="Municipal Corporation Building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground font-medium">
                  Municipal Corporation Lonavala - Survey Location Overview
                </p>
              </div>


            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="mb-12 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              Key Findings & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFindings.map((finding, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary/50 bg-gradient-to-r from-primary/5 to-background"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <finding.icon className={`h-6 w-6 ${finding.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className="font-semibold mb-2">{finding.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{finding.description}</p>
                        <Badge
                          variant={
                            finding.impact === "Positive"
                              ? "default"
                              : finding.impact === "Critical"
                                ? "destructive"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {finding.impact} Impact
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="mb-12 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Quote className="h-6 w-6 text-primary" />
              Official Testimonials
            </CardTitle>
            <p className="text-muted-foreground">
              Direct insights from municipal officials about their current system challenges
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <Card className="border-l-4 border-l-primary/30 bg-gradient-to-r from-primary/5 to-background">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Quote className="h-8 w-8 text-primary/40 flex-shrink-0" />
                        <div className="flex-1">
                          <blockquote className="text-lg italic text-foreground mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-primary">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                            </div>
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {testimonial.department}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < testimonials.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Recommendations */}
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              Survey Insights for SIH Solution
            </CardTitle>
            <p className="text-muted-foreground">Key learnings that shaped our IntelliBin approach</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Phase 1: Pilot Testing</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Deploy IntelliBin system in 3-5 high-traffic locations for initial testing and staff training
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Phase 2: Gradual Rollout</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Expand to all major collection points with integrated dashboard training for municipal staff
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-purple-600 mb-4" />
                  <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Phase 3: Full Integration</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Complete system integration with citizen app launch and advanced analytics implementation
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-3 text-primary">Survey Impact on Our SIH Solution</h4>
              <p className="text-muted-foreground leading-relaxed">
                This field survey at Municipal Corporation Lonavala provided invaluable insights that directly
                influenced our Smart India Hackathon 2025 solution design. The real-world challenges we observed - from
                manual tracking inefficiencies to staff readiness for digital adoption - validated our IntelliBin
                approach and helped us refine our technology to address actual municipal needs rather than theoretical
                problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
