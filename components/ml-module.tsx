"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Camera, Cpu, Cloud, Target, Zap, CheckCircle, AlertCircle } from "lucide-react"

export function MLModule() {
  const [isTraining, setIsTraining] = useState(false)
  const [trainingProgress, setTrainingProgress] = useState(0)
  const [selectedModel, setSelectedModel] = useState("cnn")
  const [predictionDemo, setPredictionDemo] = useState<string | null>(null)

  // Simulate training progress
  useEffect(() => {
    if (isTraining) {
      const interval = setInterval(() => {
        setTrainingProgress((prev) => {
          if (prev >= 100) {
            setIsTraining(false)
            return 100
          }
          return prev + Math.random() * 5
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [isTraining])

  const modelArchitectures = [
    {
      id: "cnn",
      name: "Convolutional Neural Network",
      accuracy: 92.3,
      speed: "Fast",
      size: "12.4 MB",
      description: "Custom CNN optimized for waste classification",
    },
    {
      id: "mobilenet",
      name: "MobileNetV2 Transfer Learning",
      accuracy: 89.7,
      speed: "Very Fast",
      size: "8.2 MB",
      description: "Lightweight model for edge deployment",
    },
    {
      id: "resnet",
      name: "ResNet-50 Fine-tuned",
      accuracy: 94.1,
      speed: "Medium",
      size: "25.6 MB",
      description: "High accuracy model for cloud inference",
    },
  ]

  const confusionMatrix = [
    { actual: "Organic", predicted: { organic: 847, recyclable: 23, hazardous: 12 } },
    { actual: "Recyclable", predicted: { organic: 31, recyclable: 892, hazardous: 8 } },
    { actual: "Hazardous", predicted: { organic: 15, recyclable: 19, hazardous: 901 } },
  ]

  const samplePredictions = [
    {
      image: "/banana-peel-organic-waste.jpg",
      prediction: "Organic",
      confidence: 0.94,
      correct: true,
    },
    {
      image: "/plastic-bottle-recyclable.jpg",
      prediction: "Recyclable",
      confidence: 0.89,
      correct: true,
    },
    {
      image: "/battery-hazardous-waste.jpg",
      prediction: "Hazardous",
      confidence: 0.96,
      correct: true,
    },
    {
      image: "/paper-cup-recyclable-waste.jpg",
      prediction: "Recyclable",
      confidence: 0.87,
      correct: false,
    },
  ]

  const startTraining = () => {
    setIsTraining(true)
    setTrainingProgress(0)
  }

  const runPredictionDemo = (wasteType: string) => {
    setPredictionDemo(wasteType)
    setTimeout(() => setPredictionDemo(null), 3000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Machine Learning Classification Module
          </CardTitle>
          <CardDescription>
            CNN-based waste classification system with 90%+ accuracy for real-time sorting
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="architecture" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="architecture">Model Architecture</TabsTrigger>
          <TabsTrigger value="training">Training Pipeline</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="deployment">Deployment Options</TabsTrigger>
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="space-y-6">
          {/* Model Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modelArchitectures.map((model) => (
              <Card
                key={model.id}
                className={`cursor-pointer transition-all ${
                  selectedModel === model.id ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Accuracy:</span>
                    <Badge variant={model.accuracy > 90 ? "default" : "secondary"}>{model.accuracy}%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Speed:</span>
                    <Badge variant="outline">{model.speed}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Model Size:</span>
                    <Badge variant="outline">{model.size}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Architecture Diagram */}
          <Card>
            <CardHeader>
              <CardTitle>CNN Architecture Pipeline</CardTitle>
              <CardDescription>Data flow from image input to waste classification output</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center items-center gap-4 p-6">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-blue-100 rounded-lg">
                    <Camera className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-sm mt-2">Input Image</span>
                  <span className="text-xs text-muted-foreground">640x480 RGB</span>
                </div>

                <div className="text-muted-foreground">→</div>

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-emerald-100 rounded-lg">
                    <div className="w-8 h-8 bg-emerald-600 rounded"></div>
                  </div>
                  <span className="text-sm mt-2">Conv2D Layers</span>
                  <span className="text-xs text-muted-foreground">Feature Extraction</span>
                </div>

                <div className="text-muted-foreground">→</div>

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-purple-100 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 rounded"></div>
                  </div>
                  <span className="text-sm mt-2">MaxPooling</span>
                  <span className="text-xs text-muted-foreground">Dimensionality Reduction</span>
                </div>

                <div className="text-muted-foreground">→</div>

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-orange-100 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 rounded"></div>
                  </div>
                  <span className="text-sm mt-2">Dense Layers</span>
                  <span className="text-xs text-muted-foreground">Classification</span>
                </div>

                <div className="text-muted-foreground">→</div>

                <div className="flex flex-col items-center">
                  <div className="p-4 bg-red-100 rounded-lg">
                    <Target className="h-8 w-8 text-red-600" />
                  </div>
                  <span className="text-sm mt-2">Output</span>
                  <span className="text-xs text-muted-foreground">3 Classes + Confidence</span>
                </div>
              </div>

              <div className="mt-6 bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Layer Details:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Convolutional Layers:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Conv2D(32, 3x3) + ReLU + BatchNorm</li>
                      <li>Conv2D(64, 3x3) + ReLU + BatchNorm</li>
                      <li>Conv2D(128, 3x3) + ReLU + BatchNorm</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Classification Layers:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>GlobalAveragePooling2D</li>
                      <li>Dense(256) + ReLU + Dropout(0.5)</li>
                      <li>Dense(3) + Softmax</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          {/* Training Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Dataset Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Total Images:</span>
                    <Badge variant="secondary">15,000</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Organic Waste:</span>
                    <Badge variant="secondary">5,200</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Recyclable:</span>
                    <Badge variant="secondary">5,100</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Hazardous:</span>
                    <Badge variant="secondary">4,700</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Data Sources:</strong> Custom collected images, augmented dataset with rotation, scaling, and
                  color variations for robust training.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Batch Size:</span>
                    <Badge variant="secondary">32</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Learning Rate:</span>
                    <Badge variant="secondary">0.001</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Epochs:</span>
                    <Badge variant="secondary">100</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Optimizer:</span>
                    <Badge variant="secondary">Adam</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Validation Split:</strong> 80% training, 20% validation with stratified sampling to maintain
                  class balance.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Simulation */}
          <Card>
            <CardHeader>
              <CardTitle>Training Simulation</CardTitle>
              <CardDescription>Interactive demonstration of model training process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button onClick={startTraining} disabled={isTraining} className="mb-4">
                  {isTraining ? "Training in Progress..." : "Start Training Simulation"}
                </Button>
              </div>

              {(isTraining || trainingProgress > 0) && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Training Progress</span>
                      <span>{Math.round(trainingProgress)}%</span>
                    </div>
                    <Progress value={trainingProgress} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-muted p-3 rounded">
                      <div className="text-lg font-semibold">{isTraining ? Math.round(trainingProgress / 10) : 10}</div>
                      <div className="text-sm text-muted-foreground">Epoch</div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <div className="text-lg font-semibold">
                        {isTraining ? (0.95 - trainingProgress * 0.01).toFixed(3) : "0.045"}
                      </div>
                      <div className="text-sm text-muted-foreground">Loss</div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <div className="text-lg font-semibold">
                        {isTraining ? (85 + trainingProgress * 0.07).toFixed(1) : "92.3"}%
                      </div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <div className="text-lg font-semibold">
                        {isTraining ? (90 + trainingProgress * 0.05).toFixed(1) : "95.2"}%
                      </div>
                      <div className="text-sm text-muted-foreground">Val Acc</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          {/* Confusion Matrix */}
          <Card>
            <CardHeader>
              <CardTitle>Confusion Matrix</CardTitle>
              <CardDescription>Model performance across different waste categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 bg-muted">Actual \ Predicted</th>
                      <th className="border p-2 bg-emerald-100">Organic</th>
                      <th className="border p-2 bg-blue-100">Recyclable</th>
                      <th className="border p-2 bg-red-100">Hazardous</th>
                    </tr>
                  </thead>
                  <tbody>
                    {confusionMatrix.map((row, index) => (
                      <tr key={index}>
                        <td className="border p-2 bg-muted font-medium">{row.actual}</td>
                        <td className="border p-2 text-center">{row.predicted.organic}</td>
                        <td className="border p-2 text-center">{row.predicted.recyclable}</td>
                        <td className="border p-2 text-center">{row.predicted.hazardous}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Precision & Recall</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Organic Precision:</span>
                    <Badge variant="secondary">94.2%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recyclable Precision:</span>
                    <Badge variant="secondary">91.8%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Hazardous Precision:</span>
                    <Badge variant="secondary">96.4%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">F1 Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Organic F1:</span>
                    <Badge variant="secondary">93.1%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recyclable F1:</span>
                    <Badge variant="secondary">92.5%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Hazardous F1:</span>
                    <Badge variant="secondary">95.8%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overall Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Overall Accuracy:</span>
                    <Badge variant="default">92.3%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Macro F1:</span>
                    <Badge variant="secondary">93.8%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Inference Time:</span>
                    <Badge variant="secondary">45ms</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="deployment" className="space-y-6">
          {/* Deployment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  Edge Deployment (ESP32)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Framework:</span>
                    <Badge variant="secondary">TensorFlow Lite Micro</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Model Size:</span>
                    <Badge variant="secondary">8.2 MB</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Inference Time:</span>
                    <Badge variant="secondary">120ms</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Memory Usage:</span>
                    <Badge variant="secondary">2.1 MB RAM</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Advantages:</strong> No internet dependency, real-time processing, reduced latency, privacy
                  preservation.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-emerald-600" />
                  Cloud Deployment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Platform:</span>
                    <Badge variant="secondary">AWS Lambda / Vercel</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Model Size:</span>
                    <Badge variant="secondary">25.6 MB</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Inference Time:</span>
                    <Badge variant="secondary">45ms</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Scalability:</span>
                    <Badge variant="secondary">Auto-scaling</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Advantages:</strong> Higher accuracy, continuous learning, centralized updates, advanced
                  analytics.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API Integration */}
          <Card>
            <CardHeader>
              <CardTitle>Cloud API Integration</CardTitle>
              <CardDescription>RESTful API for waste classification service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// API Endpoint
POST /api/classify-waste

// Request Body
{
  "image": "base64_encoded_image_data",
  "device_id": "intellibin_001",
  "timestamp": "2024-01-15T10:30:00Z",
  "metadata": {
    "weight": 245.7,
    "gas_reading": 12.3
  }
}

// Response
{
  "classification": "organic",
  "confidence": 0.94,
  "probabilities": {
    "organic": 0.94,
    "recyclable": 0.04,
    "hazardous": 0.02
  },
  "processing_time_ms": 45,
  "model_version": "v2.1.0"
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demo" className="space-y-6">
          {/* Live Prediction Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Live Classification Demo</CardTitle>
              <CardDescription>Interactive demonstration of waste classification predictions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {samplePredictions.map((sample, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      predictionDemo === sample.prediction.toLowerCase()
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => runPredictionDemo(sample.prediction.toLowerCase())}
                  >
                    <img
                      src={sample.image || "/placeholder.svg"}
                      alt="Waste sample"
                      className="w-full h-24 object-cover rounded mb-3"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            sample.prediction === "Organic"
                              ? "default"
                              : sample.prediction === "Recyclable"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {sample.prediction}
                        </Badge>
                        {sample.correct ? (
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-orange-600" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Confidence: {(sample.confidence * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {predictionDemo && (
                <Card className="bg-primary/5 border-primary">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
                        <span className="font-medium">Processing {predictionDemo} waste...</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Running CNN inference and calculating confidence scores
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="text-center">
                <Button
                  onClick={() => {
                    const randomSample = samplePredictions[Math.floor(Math.random() * samplePredictions.length)]
                    runPredictionDemo(randomSample.prediction.toLowerCase())
                  }}
                  variant="outline"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Random Prediction Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Model Performance Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Real-time Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">92.3%</div>
                  <div className="text-sm text-muted-foreground">Overall Accuracy</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">45ms</div>
                  <div className="text-sm text-muted-foreground">Avg Inference Time</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">15K</div>
                  <div className="text-sm text-muted-foreground">Training Images</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">99.2%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
