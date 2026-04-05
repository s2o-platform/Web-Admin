"use client"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { useAuthStore } from "@/store/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AIConfigPage() {
  const { isAuthenticated } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) router.push('/login')
  }, [isAuthenticated, router])

  if (!isAuthenticated) return null

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Settings</h2>
          <p className="text-slate-500">Configure recommendation rules and chatbot settings.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">
          AI configuration coming soon...
        </div>
      </div>
    </DashboardLayout>
  )
}
