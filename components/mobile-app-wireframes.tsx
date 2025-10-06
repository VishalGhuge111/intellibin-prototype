"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Smartphone,
  User,
  Home,
  History,
  Trophy,
  Bell,
  Settings,
  Shield,
  Coins,
  MapPin,
  Camera,
  CheckCircle,
  Star,
  Gift,
  Globe,
} from "lucide-react"

export function MobileAppWireframes() {
  const [selectedScreen, setSelectedScreen] = useState("login")
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  const screens = [
    { id: "login", name: "Login/OTP", icon: Shield },
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "disposal", name: "Disposal History", icon: History },
    { id: "rewards", name: "Incentives", icon: Coins },
    { id: "leaderboard", name: "Leaderboard", icon: Trophy },
    { id: "profile", name: "Profile", icon: User },
  ]

  const languages = [
    { id: "english", name: "English", flag: "🇺🇸" },
    { id: "hindi", name: "हिंदी", flag: "🇮🇳" },
    { id: "marathi", name: "मराठी", flag: "🇮🇳" },
  ]

  const userStats = {
    totalDisposals: 247,
    greenCoins: 1850,
    rank: 12,
    streakDays: 15,
    co2Saved: 45.2,
  }

  const recentDisposals = [
    { type: "Organic", weight: "0.8 kg", coins: 15, time: "2 hours ago", location: "Home" },
    { type: "Recyclable", weight: "0.3 kg", coins: 8, time: "1 day ago", location: "Office" },
    { type: "Hazardous", weight: "0.1 kg", coins: 25, time: "3 days ago", location: "Home" },
  ]

  const leaderboardData = [
    { rank: 1, name: "Vishal Ghuge", coins: 2450, avatar: "VG" },
    { rank: 2, name: "Harsh Pandhe", coins: 2380, avatar: "HP" },
    { rank: 3, name: "Namancris Stephen", coins: 2250, avatar: "NS" },
    { rank: 12, name: "You", coins: 1850, avatar: "YU", isCurrentUser: true },
  ]

  const rewards = [
    { name: "Light Bill Voucher", coins: 500, available: true },
    { name: "Plant Sapling", coins: 300, available: true },
    { name: "Eco Bag", coins: 200, available: true },
    { name: "Solar Charger", coins: 1500, available: false },
  ]

  const renderMobileScreen = () => {
    switch (selectedScreen) {
      case "login":
        return (
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-8 text-xs text-gray-600">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">IntelliBin</h1>
              <p className="text-gray-600 mt-2">Smart Waste Management</p>
            </div>

            {/* Language Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Language</label>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`p-2 rounded-lg border text-sm ${
                      selectedLanguage === lang.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    <div>{lang.flag}</div>
                    <div className="text-xs mt-1">{lang.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Aadhaar Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <input
                type="text"
                placeholder="XXXX XXXX XXXX"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Login Button */}
            <button className="w-full bg-primary text-white py-3 rounded-lg font-medium mb-4">Send OTP</button>

            {/* Features */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Secure Aadhaar Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-primary" />
                <span>Earn Incentives for Recycling</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span>Compete with Friends</span>
              </div>
            </div>
          </div>
        )

      case "dashboard":
        return (
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Good Morning!</h1>
                <p className="text-gray-600">Vishal Ghuge</p>
              </div>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-600">Coins</span>
                </div>
                <div className="text-2xl font-bold text-primary">{userStats.greenCoins}</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">Rank</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600">#{userStats.rank}</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Camera className="h-5 w-5 text-gray-600" />
                  <span className="text-sm">See Waste</span>
                </button>
                <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-sm">Find Bin</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Recent Disposals</h3>
              <div className="space-y-3">
                {recentDisposals.slice(0, 2).map((disposal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          disposal.type === "Organic"
                            ? "bg-emerald-500"
                            : disposal.type === "Recyclable"
                              ? "bg-blue-500"
                              : "bg-red-500"
                        }`}
                      ></div>
                      <div>
                        <div className="text-sm font-medium">{disposal.type}</div>
                        <div className="text-xs text-gray-600">{disposal.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">+{disposal.coins}</div>
                      <div className="text-xs text-gray-600">{disposal.weight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-around pt-4 border-t border-gray-200">
              <button className="flex flex-col items-center gap-1 text-primary">
                <Home className="h-5 w-5" />
                <span className="text-xs">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-400">
                <History className="h-5 w-5" />
                <span className="text-xs">History</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-400">
                <Trophy className="h-5 w-5" />
                <span className="text-xs">Rewards</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-400">
                <User className="h-5 w-5" />
                <span className="text-xs">Profile</span>
              </button>
            </div>
          </div>
        )

      case "disposal":
        return (
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-gray-900">Disposal History</h1>
              <div className="text-sm text-gray-600">{userStats.totalDisposals} total</div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              <button className="px-4 py-2 bg-primary text-white rounded-full text-sm">All</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">Organic</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">Recyclable</button>
            </div>

            {/* Disposal List */}
            <div className="space-y-4 mb-6">
              {recentDisposals.map((disposal, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          disposal.type === "Organic"
                            ? "bg-emerald-500"
                            : disposal.type === "Recyclable"
                              ? "bg-blue-500"
                              : "bg-red-500"
                        }`}
                      ></div>
                      <span className="font-medium">{disposal.type} Waste</span>
                    </div>
                    <Badge variant="secondary">+{disposal.coins} coins</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <div className="font-medium">Weight</div>
                      <div>{disposal.weight}</div>
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div>{disposal.location}</div>
                    </div>
                    <div>
                      <div className="font-medium">Time</div>
                      <div>{disposal.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs text-emerald-600">Verified & Processed</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Monthly Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-3">This Month</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-600">12.5kg</div>
                  <div className="text-xs text-gray-600">Organic</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">8.2kg</div>
                  <div className="text-xs text-gray-600">Recyclable</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">1.1kg</div>
                  <div className="text-xs text-gray-600">Hazardous</div>
                </div>
              </div>
            </div>
          </div>
        )

      case "rewards":
        return (
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coins className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{userStats.greenCoins}</h1>
              <p className="text-gray-600">Coins Available</p>
            </div>

            {/* Streak */}
            <div className="bg-gradient-to-r from-emerald-500 to-primary p-4 rounded-xl mb-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-90">Current Streak</div>
                  <div className="text-2xl font-bold">{userStats.streakDays} days</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">CO₂ Saved</div>
                  <div className="text-xl font-bold">{userStats.co2Saved}kg</div>
                </div>
              </div>
            </div>

            {/* Rewards Store */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Redeem Rewards</h3>
              <div className="space-y-3">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      reward.available ? "border-gray-200 bg-white" : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Gift className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className={`font-medium ${!reward.available ? "text-gray-400" : ""}`}>{reward.name}</div>
                        <div className="text-sm text-gray-600">{reward.coins} coins</div>
                      </div>
                    </div>
                    <button
                      disabled={!reward.available}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        reward.available ? "bg-primary text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {reward.available ? "Redeem" : "Locked"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Earning Tips */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Earn More Coins</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Dispose waste daily for streak bonus</li>
                <li>• Refer friends for 100 bonus coins</li>
                <li>• Complete weekly challenges</li>
              </ul>
            </div>
          </div>
        )

      case "leaderboard":
        return (
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-gray-900">Leaderboard</h1>
              <p className="text-gray-600">This Month's Top Recyclers</p>
            </div>

            {/* Top 3 */}
            <div className="flex justify-center items-end gap-4 mb-8">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-gray-700">RK</span>
                </div>
                <div className="text-xs text-gray-600">Harsh Pandhe</div>
                <div className="text-sm font-bold">2380</div>
                <div className="w-8 h-16 bg-gray-300 rounded-t-lg mt-2"></div>
              </div>

              {/* 1st Place */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2 relative">
                  <span className="font-bold text-white">PS</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">👑</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600">Vishal Ghuge</div>
                <div className="text-sm font-bold text-primary">2450</div>
                <div className="w-8 h-20 bg-primary rounded-t-lg mt-2"></div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-orange-700">AP</span>
                </div>
                <div className="text-xs text-gray-600">Namancris Stephen</div>
                <div className="text-sm font-bold">2250</div>
                <div className="w-8 h-12 bg-orange-300 rounded-t-lg mt-2"></div>
              </div>
            </div>

            {/* Full Leaderboard */}
            <div className="space-y-3">
              {leaderboardData.map((user, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    user.isCurrentUser ? "bg-primary/10 border border-primary/20" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{user.avatar}</span>
                    </div>
                    <div>
                      <div className={`font-medium ${user.isCurrentUser ? "text-primary" : ""}`}>{user.name}</div>
                      <div className="text-sm text-gray-600">{user.coins} coins</div>
                    </div>
                  </div>
                  {user.rank <= 3 && (
                    <div className="flex">
                      {[...Array(3 - user.rank + 1)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl text-white">
              <h4 className="font-semibold mb-1">Weekly Challenge</h4>
              <p className="text-sm opacity-90 mb-2">Dispose 5kg waste this week</p>
              <div className="flex items-center gap-2">
                <Progress value={60} className="flex-1 h-2" />
                <span className="text-sm">3/5kg</span>
              </div>
            </div>
          </div>
        )

      case "profile":
        return (
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-white">VG</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Vishal Ghuge</h1>
              <p className="text-gray-600">Eco Warrior since Sept 2025</p>
            </div>

            {/* Aadhaar Verification */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="font-medium text-emerald-800">Aadhaar Verified</span>
              </div>
              <p className="text-sm text-emerald-700">XXXX XXXX 1234</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{userStats.totalDisposals}</div>
                <div className="text-sm text-gray-600">Total Disposals</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{userStats.co2Saved}kg</div>
                <div className="text-sm text-gray-600">CO₂ Saved</div>
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-3 mb-6">
              <button className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span>Notifications</span>
                </div>
                <div className="w-5 h-3 bg-primary rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-0"></div>
                </div>
              </button>

              <button className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-600" />
                  <span>Language</span>
                </div>
                <span className="text-gray-600">English</span>
              </button>

              <button className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <span>Privacy Settings</span>
                </div>
                <span className="text-gray-400">›</span>
              </button>

              <button className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span>App Settings</span>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl text-white">
              <h4 className="font-semibold mb-2">Latest Achievement</h4>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span className="text-sm">Eco Champion - 15 day streak!</span>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" />
            Mobile Application Wireframes
          </CardTitle>
          <CardDescription>
            React Native app with Aadhaar authentication, Incentives rewards, and multilingual support
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="wireframes" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="wireframes">Interactive Wireframes</TabsTrigger>
          <TabsTrigger value="features">App Features</TabsTrigger>
          <TabsTrigger value="technical">Technical Specs</TabsTrigger>
        </TabsList>

        <TabsContent value="wireframes" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Screen Navigation */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">App Screens</h3>
              {screens.map((screen) => {
                const Icon = screen.icon
                return (
                  <button
                    key={screen.id}
                    onClick={() => setSelectedScreen(screen.id)}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition-all ${
                      selectedScreen === screen.id
                        ? "bg-primary text-white"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{screen.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile Screen Preview */}
            <div className="lg:col-span-3">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-80 h-[600px] bg-black rounded-3xl p-2">
                    <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden">{renderMobileScreen()}</div>
                  </div>
                  {/* Screen Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <Badge variant="outline">{screens.find((s) => s.id === selectedScreen)?.name}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Authentication */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Aadhaar Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">OTP Verification:</span>
                    <Badge variant="secondary">UIDAI API</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Security:</span>
                    <Badge variant="secondary">256-bit Encryption</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Compliance:</span>
                    <Badge variant="secondary">GDPR Ready</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Features:</strong> Secure login, identity verification, privacy protection, and seamless user
                  onboarding with government-grade authentication.
                </div>
              </CardContent>
            </Card>

            {/* GreenCoins System */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-emerald-600" />
                  Incentives Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Organic Waste:</span>
                    <Badge variant="secondary">15 coins/kg</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Recyclable:</span>
                    <Badge variant="secondary">10 coins/kg</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Hazardous:</span>
                    <Badge variant="secondary">25 coins/kg</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Rewards:</strong> Redeem coins for eco-friendly products, vouchers, plant saplings, and
                  sustainable merchandise from partner stores.
                </div>
              </CardContent>
            </Card>

            {/* Multilingual Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  Multilingual Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">English:</span>
                    <Badge variant="secondary">Primary</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Hindi (हिंदी):</span>
                    <Badge variant="secondary">Supported</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Marathi (मराठी):</span>
                    <Badge variant="secondary">Supported</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Localization:</strong> Complete UI translation, voice commands, and cultural adaptation for
                  better user adoption across diverse demographics.
                </div>
              </CardContent>
            </Card>

            {/* Push Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-600" />
                  Smart Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Disposal Reminders:</span>
                    <Badge variant="secondary">Daily</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Bin Full Alerts:</span>
                    <Badge variant="secondary">Real-time</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Reward Updates:</span>
                    <Badge variant="secondary">Instant</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Intelligence:</strong> AI-powered personalized notifications based on user behavior, location,
                  and waste disposal patterns.
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          {/* Development Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Development Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Primary:</span>
                    <Badge variant="secondary">React Native</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Alternative:</span>
                    <Badge variant="secondary">Flutter</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">State Management:</span>
                    <Badge variant="secondary">Provider/Redux</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Database:</span>
                    <Badge variant="secondary">SQLite + Cloud Sync</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Rationale:</strong> React Native chosen for single codebase, native performance, and excellent UI
                  consistency across platforms.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integration APIs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Aadhaar OTP:</span>
                    <Badge variant="secondary">UIDAI API</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Maps:</span>
                    <Badge variant="secondary">Google Maps API</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Push Notifications:</span>
                    <Badge variant="secondary">Firebase FCM</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Analytics:</span>
                    <Badge variant="secondary">Firebase Analytics</Badge>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>Security:</strong> All API communications encrypted with TLS 1.3, JWT tokens for
                  authentication, and OWASP compliance.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API Endpoints */}
          <Card>
            <CardHeader>
              <CardTitle>Mobile API Endpoints</CardTitle>
              <CardDescription>RESTful API integration for mobile app functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// Authentication
POST /api/auth/send-otp
POST /api/auth/verify-otp
POST /api/auth/refresh-token

// User Management
GET /api/user/profile
PUT /api/user/profile
GET /api/user/stats
GET /api/user/disposal-history

// Waste Management
POST /api/waste/dispose
GET /api/waste/nearby-bins
GET /api/waste/classification-history

// Rewards System
GET /api/rewards/balance
POST /api/rewards/redeem
GET /api/rewards/available
GET /api/rewards/transaction-history

// Leaderboard
GET /api/leaderboard/monthly
GET /api/leaderboard/weekly
GET /api/leaderboard/friends

// Notifications
POST /api/notifications/register-device
GET /api/notifications/preferences
PUT /api/notifications/preferences`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Less than 3 seconds</div>
                  <div className="text-sm text-gray-600">App Launch Time</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Less than 50MB</div>
                  <div className="text-sm text-gray-600">App Size</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.5%</div>
                  <div className="text-sm text-gray-600">Uptime Target</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Less than 2 seconds</div>
                  <div className="text-sm text-gray-600">API Response</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
