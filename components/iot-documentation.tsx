"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Wifi, Camera, Gauge, Zap, Code, Database, ArrowRight, CheckCircle } from "lucide-react"

export function IoTDocumentation() {
  const [activeFlow, setActiveFlow] = useState(0)

  const firmwareFlow = [
    { step: "Initialize", icon: Cpu, description: "ESP32 boot sequence and sensor initialization" },
    { step: "Capture", icon: Camera, description: "ESP32 camera captures waste image" },
    { step: "Sense", icon: Gauge, description: "Read weight sensor and IR sensor data" },
    { step: "Process", icon: Code, description: "Local preprocessing and data packaging" },
    { step: "Transmit", icon: Wifi, description: "Send data via WiFi/MQTT to cloud" },
    { step: "Receive", icon: Database, description: "Get AI classification results" },
    { step: "Actuate", icon: Zap, description: "Control servo motors and LEDs" },
  ]

  const samplePayload = {
    device_id: "intellibin_001",
    timestamp: "2024-01-15T10:30:00Z",
    location: { lat: 28.6139, lng: 77.209 },
    sensors: {
      camera: {
        image_base64: "iVBORw0KGgoAAAANSUhEUgAA...",
        resolution: "640x480",
        format: "JPEG",
      },
      weight_sensor: {
        weight_grams: 245.7,
        calibrated: true,
      },
      ir_sensor: {
        proximity_cm: 12.3,
        object_detected: true,
      },
      environmental: {
        temperature_c: 28.5,
        humidity_percent: 65.2,
      },
    },
    bin_status: {
      organic_fill: 45,
      recyclable_fill: 62,
      hazardous_fill: 23,
    },
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            IoT System Architecture & ESP32 Integration
          </CardTitle>
          <CardDescription>
            Complete firmware design, sensor integration, and communication protocols for IntelliBin
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="firmware" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="firmware">Firmware Flow</TabsTrigger>
          <TabsTrigger value="sensors">Sensor Integration</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="code">Code Samples</TabsTrigger>
        </TabsList>

        <TabsContent value="firmware" className="space-y-6">
          {/* Interactive Firmware Flow */}
          <Card>
            <CardHeader>
              <CardTitle>ESP32 Firmware Execution Flow</CardTitle>
              <CardDescription>Interactive visualization of the complete firmware workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Flow Diagram */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {firmwareFlow.map((step, index) => {
                    const Icon = step.icon
                    const isActive = index === activeFlow
                    const isCompleted = index < activeFlow

                    return (
                      <div key={index} className="flex items-center">
                        <div
                          className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            isActive
                              ? "border-primary bg-primary/10 scale-105"
                              : isCompleted
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-muted bg-card hover:border-primary/50"
                          }`}
                          onClick={() => setActiveFlow(index)}
                        >
                          <Icon
                            className={`h-6 w-6 ${isActive ? "text-primary" : isCompleted ? "text-emerald-600" : "text-muted-foreground"}`}
                          />
                          {isCompleted && (
                            <CheckCircle className="absolute -top-2 -right-2 h-4 w-4 text-emerald-600 bg-white rounded-full" />
                          )}
                        </div>
                        {index < firmwareFlow.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Step Details */}
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        Step {activeFlow + 1}: {firmwareFlow[activeFlow].step}
                      </h3>
                      <p className="text-muted-foreground mb-4">{firmwareFlow[activeFlow].description}</p>
                      <div className="flex justify-center gap-2">
                        <Button
                          onClick={() => setActiveFlow(Math.max(0, activeFlow - 1))}
                          disabled={activeFlow === 0}
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={() => setActiveFlow(Math.min(firmwareFlow.length - 1, activeFlow + 1))}
                          disabled={activeFlow === firmwareFlow.length - 1}
                          size="sm"
                          className="cursor-pointer"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Auto-advance controls */}
                <div className="text-center">
                  <Button
                    onClick={() => {
                      const interval = setInterval(() => {
                        setActiveFlow((prev) => {
                          if (prev >= firmwareFlow.length - 1) {
                            clearInterval(interval)
                            return 0
                          }
                          return prev + 1
                        })
                      }, 1500)
                    }}
                    variant="outline"
                    className="cursor-pointer"
                  >
                    Auto-play Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sensors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Camera Module */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-blue-600" />
                  ESP Camera Module
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Resolution:</span>
                    <Badge variant="secondary">640x480 (VGA)</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Interface:</span>
                    <Badge variant="secondary">I2C + Parallel</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Frame Rate:</span>
                    <Badge variant="secondary">30 FPS</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Power:</span>
                    <Badge variant="secondary">3.3V</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Function:</strong> Captures high-quality images of waste items for AI classification. Supports
                  JPEG compression for efficient data transmission.
                </div>
              </CardContent>
            </Card>

            {/* Weight Sensor */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-emerald-600" />
                  Weight Sensor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Capacity:</span>
                    <Badge variant="secondary">0-50kg</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Resolution:</span>
                    <Badge variant="secondary">24-bit ADC</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Accuracy:</span>
                    <Badge variant="secondary">±0.1g</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Interface:</span>
                    <Badge variant="secondary">Digital (2-wire)</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Function:</strong> Measures waste weight for volume estimation and bin fill level monitoring.
                  Provides data for collection optimization.
                </div>
              </CardContent>
            </Card>

            {/* IR Sensors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  IR Sensors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Detection Range:</span>
                    <Badge variant="secondary">2-30 cm</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Response Time:</span>
                    <Badge variant="secondary">&lt;1ms</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Accuracy:</span>
                    <Badge variant="secondary">±2mm</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Interface:</span>
                    <Badge variant="secondary">Digital/Analog</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Function:</strong> Detects object presence and proximity for waste detection and bin fill
                  level monitoring. Provides accurate distance measurements.
                </div>
              </CardContent>
            </Card>

            {/* Servo Motors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  Servo Motor Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Type:</span>
                    <Badge variant="secondary">SG90 Micro Servo</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Torque:</span>
                    <Badge variant="secondary">1.8 kg⋅cm</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Rotation:</span>
                    <Badge variant="secondary">180° (0-180°)</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Control:</span>
                    <Badge variant="secondary">PWM Signal</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Function:</strong> Controls compartment lids based on AI classification results. Opens
                  appropriate compartment automatically for waste sorting.
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          {/* Communication Protocols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  WiFi Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Protocol:</span>
                    <Badge variant="secondary">IEEE 802.11 b/g/n</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Frequency:</span>
                    <Badge variant="secondary">2.4 GHz</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Range:</span>
                    <Badge variant="secondary">100m (outdoor)</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Security:</span>
                    <Badge variant="secondary">WPA2/WPA3</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  Primary communication method for data transmission to cloud services and receiving classification
                  results.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-emerald-600" />
                  MQTT Protocol
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Version:</span>
                    <Badge variant="secondary">MQTT 3.1.1</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">QoS Level:</span>
                    <Badge variant="secondary">QoS 1 (At least once)</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Keep Alive:</span>
                    <Badge variant="secondary">60 seconds</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">TLS:</span>
                    <Badge variant="secondary">Enabled</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  Lightweight messaging protocol for real-time data transmission and command reception from cloud
                  services.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample JSON Payload */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Data Payload</CardTitle>
              <CardDescription>JSON structure sent from ESP32 to cloud backend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{JSON.stringify(samplePayload, null, 2)}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          {/* Arduino Code Samples */}
          <Card>
            <CardHeader>
              <CardTitle>ESP32 Arduino Code Samples</CardTitle>
              <CardDescription>Key firmware functions and implementation snippets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Setup */}
              <div>
                <h4 className="font-semibold mb-2">Main Setup & Loop</h4>
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{`#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <ESP32Servo.h>

// Pin definitions
#define CAMERA_MODEL_AI_THINKER
#define WEIGHT_SENSOR_DOUT_PIN 4
#define WEIGHT_SENSOR_SCK_PIN 5
#define SERVO_ORGANIC_PIN 12
#define SERVO_RECYCLABLE_PIN 13
#define SERVO_HAZARDOUS_PIN 14
#define IR_SENSOR_PIN A0

// Global objects
WiFiClient espClient;
PubSubClient mqtt(espClient);
Servo servoOrganic, servoRecyclable, servoHazardous;

void setup() {
  Serial.begin(115200);
  
  // Initialize camera
  initCamera();
  
  // Initialize sensors
  pinMode(IR_SENSOR_PIN, INPUT);
  
  // Initialize servos
  servoOrganic.attach(SERVO_ORGANIC_PIN);
  servoRecyclable.attach(SERVO_RECYCLABLE_PIN);
  servoHazardous.attach(SERVO_HAZARDOUS_PIN);
  
  // Connect to WiFi and MQTT
  connectWiFi();
  mqtt.setServer(MQTT_SERVER, 1883);
  mqtt.setCallback(onMqttMessage);
}

void loop() {
  if (!mqtt.connected()) {
    reconnectMQTT();
  }
  mqtt.loop();
  
  // Main sensing and transmission cycle
  if (millis() - lastSensorRead > SENSOR_INTERVAL) {
    collectSensorData();
    transmitData();
    lastSensorRead = millis();
  }
  
  delay(100);
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Sensor Data Collection */}
              <div>
                <h4 className="font-semibold mb-2">Sensor Data Collection</h4>
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{`void collectSensorData() {
  // Capture image from camera
  camera_fb_t * fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Camera capture failed");
    return;
  }
  
  // Encode image to base64
  String imageBase64 = base64::encode(fb->buf, fb->len);
  esp_camera_fb_return(fb);
  
  // Read weight sensor
  float weight = getWeightReading();
  
  // Read IR sensors
  int irReading = digitalRead(IR_SENSOR_PIN);
  float proximity = getProximityDistance();
  
  // Create JSON payload
  DynamicJsonDocument doc(8192);
  doc["device_id"] = DEVICE_ID;
  doc["timestamp"] = getTimestamp();
  
  JsonObject sensors = doc.createNestedObject("sensors");
  sensors["camera"]["image_base64"] = imageBase64;
  sensors["camera"]["resolution"] = "640x480";
  sensors["weight_sensor"]["weight_grams"] = weight;
  sensors["ir_sensor"]["proximity_cm"] = proximity;
  sensors["ir_sensor"]["object_detected"] = (irReading == HIGH);
  
  // Store for transmission
  serializeJson(doc, sensorDataBuffer);
}

void transmitData() {
  if (mqtt.connected()) {
    mqtt.publish("intellibin/sensor_data", sensorDataBuffer);
    Serial.println("Data transmitted successfully");
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* MQTT Callback */}
              <div>
                <h4 className="font-semibold mb-2">MQTT Message Handler</h4>
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{`void onMqttMessage(char* topic, byte* payload, unsigned int length) {
  String message;
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  
  if (String(topic) == "intellibin/classification_result") {
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, message);
    
    String wasteType = doc["classification"];
    float confidence = doc["confidence"];
    
    if (confidence > 0.8) {  // High confidence threshold
      actuateCompartment(wasteType);
      updateLEDIndicators(wasteType);
    }
  }
}

void actuateCompartment(String wasteType) {
  if (wasteType == "organic") {
    servoOrganic.write(90);  // Open lid
    delay(3000);
    servoOrganic.write(0);   // Close lid
  } else if (wasteType == "recyclable") {
    servoRecyclable.write(90);
    delay(3000);
    servoRecyclable.write(0);
  } else if (wasteType == "hazardous") {
    servoHazardous.write(90);
    delay(3000);
    servoHazardous.write(0);
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
