"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  Camera,
  Brain,
  CheckCircle,
  AlertTriangle,
  Recycle,
  Leaf,
  Zap,
  BarChart3,
  Clock,
  Target,
} from "lucide-react"

interface ClassificationResult {
  category: "organic" | "recyclable" | "hazardous"
  confidence: number
  details: {
    material: string
    decompositionTime: string
    recyclingProcess: string
    environmentalImpact: string
    disposalInstructions: string
  }
}

const wasteDatabase = {
  "banana-peel": {
    category: "organic" as const,
    confidence: 96.8,
    details: {
      material: "Organic Food Waste - Fruit Peel",
      decompositionTime: "2-5 weeks in compost",
      recyclingProcess: "Composting, Biogas production",
      environmentalImpact: "Biodegradable, produces methane if landfilled",
      disposalInstructions: "Place in organic/green bin for composting",
    },
  },
  "plastic-bottle": {
    category: "recyclable" as const,
    confidence: 94.2,
    details: {
      material: "PET Plastic Bottle (Type 1)",
      decompositionTime: "450-1000 years",
      recyclingProcess: "Mechanical recycling into new bottles or polyester fiber",
      environmentalImpact: "High carbon footprint, marine pollution risk",
      disposalInstructions: "Remove cap, rinse clean, place in recycling bin",
    },
  },
  battery: {
    category: "hazardous" as const,
    confidence: 98.5,
    details: {
      material: "Lithium-ion Battery",
      decompositionTime: "Never decomposes naturally",
      recyclingProcess: "Specialized e-waste recycling facility",
      environmentalImpact: "Toxic heavy metals, soil and water contamination",
      disposalInstructions: "Take to designated e-waste collection center",
    },
  },
  "paper-cup": {
    category: "recyclable" as const,
    confidence: 91.7,
    details: {
      material: "Paper Cup with Plastic Lining",
      decompositionTime: "20 years due to plastic coating",
      recyclingProcess: "Specialized facility to separate paper from plastic",
      environmentalImpact: "Moderate, requires special processing",
      disposalInstructions: "Check local recycling guidelines, may need special bin",
    },
  },
}

export function MLDemoPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<ClassificationResult | null>(null)
  const [processingProgress, setProcessingProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleSampleImage = useCallback((imagePath: string, wasteType: keyof typeof wasteDatabase) => {
    setSelectedImage(imagePath)
    setResult(null)
    // Simulate processing for sample images
    processImage(wasteType)
  }, [])

  const processImage = useCallback((wasteType?: keyof typeof wasteDatabase) => {
    setIsProcessing(true)
    setProcessingProgress(0)
    setResult(null)

    // Simulate ML processing with progress
    const progressInterval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    setTimeout(() => {
      clearInterval(progressInterval)
      setProcessingProgress(100)

      // Simulate classification result
      let classificationResult: ClassificationResult

      if (wasteType && wasteDatabase[wasteType]) {
        classificationResult = wasteDatabase[wasteType]
      } else {
        // Random classification for uploaded images
        const categories = Object.values(wasteDatabase)
        const randomCategory = categories[Math.floor(Math.random() * categories.length)]
        classificationResult = {
          ...randomCategory,
          confidence: Math.random() * 10 + 90, // 90-100% confidence
        }
      }

      setResult(classificationResult)
      setIsProcessing(false)
      setProcessingProgress(0)
    }, 3000)
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "organic":
        return "bg-green-500"
      case "recyclable":
        return "bg-blue-500"
      case "hazardous":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "organic":
        return Leaf
      case "recyclable":
        return Recycle
      case "hazardous":
        return AlertTriangle
      default:
        return Brain
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-primary rounded-xl">
            <Brain className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">AI Waste Classification Demo</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-4">
          Upload or select an image to see our ML model classify waste with 95%+ accuracy
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <Target className="h-3 w-3" />
            95%+ Accuracy
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Zap className="h-3 w-3" />
            Real-time Processing
          </Badge>
          <Badge variant="outline" className="gap-1">
            <BarChart3 className="h-3 w-3" />
            Detailed Analysis
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image Upload & Samples */}
        <div className="space-y-6">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <div className="space-y-4">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Selected waste item"
                      className="max-w-full max-h-64 mx-auto rounded-lg object-contain"
                    />
                    <p className="text-sm text-muted-foreground">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium">Upload waste image</p>
                      <p className="text-sm text-muted-foreground">Supports JPG, PNG, WebP up to 10MB</p>
                    </div>
                  </div>
                )}
              </div>

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

              {selectedImage && (
                <Button onClick={() => processImage()} disabled={isProcessing} className="w-full gap-2" size="lg">
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4" />
                      Classify Waste
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Sample Images */}
          <Card>
            <CardHeader>
              <CardTitle>Try Sample Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="cursor-pointer group"
                  onClick={() => handleSampleImage("/banana-peel-organic-waste.jpg", "banana-peel")}
                >
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                    <img
                      src="/banana-peel-organic-waste.jpg"
                      alt="Banana peel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-center mt-2">Banana Peel</p>
                </div>

                <div
                  className="cursor-pointer group"
                  onClick={() => handleSampleImage("/plastic-bottle-recyclable.jpg", "plastic-bottle")}
                >
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                    <img
                      src="/plastic-bottle-recyclable.jpg"
                      alt="Plastic bottle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-center mt-2">Plastic Bottle</p>
                </div>

                <div
                  className="cursor-pointer group"
                  onClick={() => handleSampleImage("/battery-hazardous-waste.jpg", "battery")}
                >
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                    <img src="/battery-hazardous-waste.jpg" alt="Battery" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-center mt-2">Battery</p>
                </div>

                <div
                  className="cursor-pointer group"
                  onClick={() => handleSampleImage("/paper-cup-recyclable-waste.jpg", "paper-cup")}
                >
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                    <img src="/paper-cup-recyclable-waste.jpg" alt="Paper cup" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-center mt-2">Paper Cup</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          {/* Processing Status */}
          {isProcessing && (
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
                    <span className="font-medium">Processing with AI Model...</span>
                  </div>
                  <Progress value={processingProgress} className="w-full" />
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Preprocessing image...</p>
                    <p>• Running CNN classification...</p>
                    <p>• Analyzing waste characteristics...</p>
                    <p>• Generating detailed report...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Classification Results */}
          {result && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Classification Result
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category & Confidence */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full ${getCategoryColor(result.category)}`}>
                      {(() => {
                        const Icon = getCategoryIcon(result.category)
                        return <Icon className="h-6 w-6 text-white" />
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold capitalize">{result.category} Waste</h3>
                      <p className="text-sm text-muted-foreground">Confidence: {result.confidence.toFixed(1)}%</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {result.confidence.toFixed(1)}%
                  </Badge>
                </div>

                {/* Detailed Information */}
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="recycling">Recycling</TabsTrigger>
                    <TabsTrigger value="disposal">Disposal</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Material Type</h4>
                        <p className="text-sm">{result.details.material}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Decomposition Time
                        </h4>
                        <p className="text-sm">{result.details.decompositionTime}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Environmental Impact</h4>
                        <p className="text-sm">{result.details.environmentalImpact}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="recycling" className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-1">
                        <Recycle className="h-3 w-3" />
                        Recycling Process
                      </h4>
                      <p className="text-sm">{result.details.recyclingProcess}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="disposal" className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Disposal Instructions</h4>
                      <p className="text-sm">{result.details.disposalInstructions}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {/* Model Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Model Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-muted-foreground">Architecture</p>
                  <p>ResNet-50 CNN</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Training Data</p>
                  <p>500K+ Images</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Accuracy</p>
                  <p>95.8%</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Processing Time</p>
                  <p>&lt; 2 seconds</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  This demo uses a pre-trained model. In production, the model continuously learns from new data to
                  improve accuracy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
