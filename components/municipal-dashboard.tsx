"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  Monitor,
  MapPin,
  AlertTriangle,
  TrendingUp,
  Users,
  Recycle,
  Clock,
  Zap,
  Filter,
  Download,
  RefreshCw,
} from "lucide-react"

export function MunicipalDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")
  const [selectedWard, setSelectedWard] = useState("all")
  const [isLiveMode, setIsLiveMode] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Simulate real-time updates
  useEffect(() => {
    if (isLiveMode) {
      const interval = setInterval(() => {
        setLastUpdated(new Date())
      }, 30000) // Update every 30 seconds
      return () => clearInterval(interval)
    }
  }, [isLiveMode])

  const overviewStats = {
    totalBins: 1247,
    activeBins: 1198,
    fullBins: 89,
    alertBins: 23,
    dailyCollection: 45.2,
    weeklyTrend: 12.5,
    citizenUsers: 15420,
    greenCoinsIssued: 2847650,
  }

  const wasteData = [
    { name: "Mon", organic: 12.5, recyclable: 8.2, hazardous: 1.1, total: 21.8 },
    { name: "Tue", organic: 14.2, recyclable: 9.1, hazardous: 0.9, total: 24.2 },
    { name: "Wed", organic: 13.8, recyclable: 7.8, hazardous: 1.3, total: 22.9 },
    { name: "Thu", organic: 15.1, recyclable: 10.2, hazardous: 1.0, total: 26.3 },
    { name: "Fri", organic: 16.8, recyclable: 11.5, hazardous: 1.4, total: 29.7 },
    { name: "Sat", organic: 18.2, recyclable: 12.8, hazardous: 1.2, total: 32.2 },
    { name: "Sun", organic: 14.5, recyclable: 9.8, hazardous: 0.8, total: 25.1 },
  ]

  const binStatusData = [
    { name: "Empty (0-25%)", value: 456, color: "#10b981" },
    { name: "Low (25-50%)", value: 398, color: "#3b82f6" },
    { name: "Medium (50-75%)", value: 254, color: "#f59e0b" },
    { name: "High (75-90%)", value: 89, color: "#ef4444" },
    { name: "Full (90%+)", value: 50, color: "#7c2d12" },
  ]

  const wardData = [
    { ward: "Ward 1", bins: 156, full: 12, alerts: 3, efficiency: 94 },
    { ward: "Ward 2", bins: 142, full: 8, alerts: 1, efficiency: 97 },
    { ward: "Ward 3", bins: 189, full: 15, alerts: 5, efficiency: 91 },
    { ward: "Ward 4", bins: 134, full: 9, alerts: 2, efficiency: 95 },
    { ward: "Ward 5", bins: 167, full: 11, alerts: 4, efficiency: 93 },
    { ward: "Ward 6", bins: 178, full: 13, alerts: 3, efficiency: 92 },
    { ward: "Ward 7", bins: 145, full: 10, alerts: 2, efficiency: 96 },
    { ward: "Ward 8", bins: 136, full: 11, alerts: 3, efficiency: 94 },
  ]

  const alertsData = [
    { id: 1, type: "Full Bin", location: "MG Road, Ward 3", time: "5 min ago", severity: "high" },
    { id: 2, type: "Hazardous Waste", location: "Park Street, Ward 1", time: "12 min ago", severity: "critical" },
    { id: 3, type: "Sensor Offline", location: "Mall Road, Ward 5", time: "25 min ago", severity: "medium" },
    { id: 4, type: "Overweight", location: "Station Road, Ward 2", time: "1 hour ago", severity: "medium" },
    { id: 5, type: "Gas Alert", location: "Market Square, Ward 4", time: "2 hours ago", severity: "high" },
  ]

  const collectionRoutes = [
    { route: "Route A", wards: ["1", "2"], bins: 298, status: "In Progress", eta: "2:30 PM", efficiency: 94 },
    { route: "Route B", wards: ["3", "4"], bins: 323, status: "Completed", eta: "Completed", efficiency: 97 },
    { route: "Route C", wards: ["5", "6"], bins: 345, status: "Scheduled", eta: "4:00 PM", efficiency: 92 },
    { route: "Route D", wards: ["7", "8"], bins: 281, status: "Scheduled", eta: "5:30 PM", efficiency: 95 },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Scheduled":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-6 w-6 text-primary" />
                Municipal Waste Management Dashboard
              </CardTitle>
              <CardDescription>
                Real-time monitoring and analytics for IntelliBin smart waste management system
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={isLiveMode ? "default" : "outline"} size="sm" onClick={() => setIsLiveMode(!isLiveMode)}>
                <Zap className="h-4 w-4 mr-2" />
                {isLiveMode ? "Live" : "Paused"}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
          
          <TabsTrigger value="routes">Collection Routes</TabsTrigger>
          <TabsTrigger value="alerts">Alerts & Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Smart Bins</p>
                    <p className="text-2xl font-bold">{overviewStats.totalBins.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Recycle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-emerald-600 font-medium">{overviewStats.activeBins}</span>
                  <span className="text-muted-foreground ml-1">active</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Daily Collection</p>
                    <p className="text-2xl font-bold">{overviewStats.dailyCollection} tons</p>
                  </div>
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-emerald-600 font-medium">+{overviewStats.weeklyTrend}%</span>
                  <span className="text-muted-foreground ml-1">vs last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Citizen Users</p>
                    <p className="text-2xl font-bold">{overviewStats.citizenUsers.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-blue-600 font-medium">Active users</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Alerts</p>
                    <p className="text-2xl font-bold text-red-600">{overviewStats.alertBins}</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-red-600 font-medium">Require attention</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Waste Collection Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Waste Collection Trends</CardTitle>
                <CardDescription>Breakdown by waste category (tons)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={wasteData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="organic"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.8}
                    />
                    <Area
                      type="monotone"
                      dataKey="recyclable"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.8}
                    />
                    <Area
                      type="monotone"
                      dataKey="hazardous"
                      stackId="1"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.8}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Bin Status Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bin Fill Level Distribution</CardTitle>
                <CardDescription>Current status across all smart bins</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={binStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {binStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Ward Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ward-wise Performance</CardTitle>
              <CardDescription>Efficiency metrics across municipal wards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Ward</th>
                      <th className="text-left p-2">Total Bins</th>
                      <th className="text-left p-2">Full Bins</th>
                      <th className="text-left p-2">Alerts</th>
                      <th className="text-left p-2">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wardData.map((ward, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2 font-medium">{ward.ward}</td>
                        <td className="p-2">{ward.bins}</td>
                        <td className="p-2">
                          <Badge variant={ward.full > 12 ? "destructive" : "secondary"}>{ward.full}</Badge>
                        </td>
                        <td className="p-2">
                          <Badge variant={ward.alerts > 3 ? "destructive" : "outline"}>{ward.alerts}</Badge>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <Progress value={ward.efficiency} className="w-16 h-2" />
                            <span className="text-sm font-medium">{ward.efficiency}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          {/* Live Status Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Last updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Bins Online</p>
                    <p className="text-2xl font-bold text-emerald-900">{overviewStats.activeBins}</p>
                  </div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-800">Needs Collection</p>
                    <p className="text-2xl font-bold text-orange-900">{overviewStats.fullBins}</p>
                  </div>
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-800">Critical Alerts</p>
                    <p className="text-2xl font-bold text-red-900">{overviewStats.alertBins}</p>
                  </div>
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Live Bin Status Map
              </CardTitle>
              <CardDescription>Real-time visualization of all smart bins across the city</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Interactive Map View</h3>
                  <p className="text-gray-500 mb-4">Real-time bin locations with status indicators</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>Normal (0-75%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Full (75-90%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Critical (90%+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Live feed of bin status changes and system events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "2 min ago", event: "Bin IB-1247 reached 85% capacity", type: "warning" },
                  { time: "5 min ago", event: "Collection completed for Route B", type: "success" },
                  { time: "8 min ago", event: "Hazardous waste detected at IB-0892", type: "alert" },
                  { time: "12 min ago", event: "New user registered: Priya Sharma", type: "info" },
                  { time: "15 min ago", event: "Bin IB-0445 sensor offline", type: "warning" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "success"
                          ? "bg-emerald-500"
                          : activity.type === "warning"
                            ? "bg-orange-500"
                            : activity.type === "alert"
                              ? "bg-red-500"
                              : "bg-blue-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.event}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Time Range Selector */}
          <div className="flex gap-2">
            {["24h", "7d", "30d", "90d"].map((range) => (
              <Button
                key={range}
                variant={selectedTimeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Collection Efficiency */}
            <Card>
              <CardHeader>
                <CardTitle>Collection Efficiency Trends</CardTitle>
                <CardDescription>Percentage of bins collected on schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={wasteData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981" }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Waste Category Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Waste Category Distribution</CardTitle>
                <CardDescription>Weekly breakdown by waste type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={wasteData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="organic" fill="#10b981" />
                    <Bar dataKey="recyclable" fill="#3b82f6" />
                    <Bar dataKey="hazardous" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Operational Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600 mb-2">94%</div>
                <p className="text-sm text-muted-foreground mb-4">Collection efficiency rate</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Route optimization:</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bin utilization:</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response time:</span>
                    <span className="font-medium">15 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">847kg</div>
                <p className="text-sm text-muted-foreground mb-4">CO₂ emissions reduced</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Recycling rate:</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Waste diverted:</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy saved:</span>
                    <span className="font-medium">1.2 MWh</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Citizen Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <p className="text-sm text-muted-foreground mb-4">User satisfaction rate</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Active users:</span>
                    <span className="font-medium">15,420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily disposals:</span>
                    <span className="font-medium">3,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>App rating:</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="routes" className="space-y-6">
          {/* Collection Routes Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {collectionRoutes.map((route, index) => (
              <Card
                key={index}
                className={`${
                  route.status === "In Progress"
                    ? "border-blue-200 bg-blue-50"
                    : route.status === "Completed"
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-gray-200"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{route.route}</h3>
                    <Badge className={getStatusColor(route.status)}>{route.status}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Wards:</span>
                      <span className="font-medium">{route.wards.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bins:</span>
                      <span className="font-medium">{route.bins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ETA:</span>
                      <span className="font-medium">{route.eta}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Efficiency:</span>
                      <span className="font-medium">{route.efficiency}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Route Optimization */}
          <Card>
            <CardHeader>
              <CardTitle>Route Optimization</CardTitle>
              <CardDescription>AI-powered route planning for maximum efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Optimization Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fuel Efficiency</span>
                        <span>94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Time Optimization</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Coverage Rate</span>
                        <span>98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Today's Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Distance:</span>
                      <span className="font-medium">247 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Fuel Saved:</span>
                      <span className="font-medium text-emerald-600">23 liters</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Time Saved:</span>
                      <span className="font-medium text-emerald-600">2.5 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Bins Collected:</span>
                      <span className="font-medium">621/645</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Tracking</CardTitle>
              <CardDescription>Real-time location and status of collection vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Vehicle Tracking Map</h3>
                  <p className="text-gray-500">Real-time GPS tracking of all collection vehicles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-800">5</div>
                  <p className="text-sm text-red-600">Critical Alerts</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-800">12</div>
                  <p className="text-sm text-orange-600">High Priority</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-800">8</div>
                  <p className="text-sm text-yellow-600">Medium Priority</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">25</div>
                  <p className="text-sm text-gray-600">Total Active</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
              <CardDescription>Current system alerts requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertsData.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                        <span className="font-medium">{alert.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.location}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm">Resolve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generate Reports</CardTitle>
              <CardDescription>Download comprehensive system reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Daily Report
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Weekly Report
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Monthly Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
