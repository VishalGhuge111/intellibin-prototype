// app/dashboard/page.tsx
import { MunicipalDashboard } from "@/components/municipal-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <MunicipalDashboard />
      </div>
    </div>
  )
}
