"use client"
import { LoginForm } from "@/components/form/LoginForm"
import { useAuthStore } from "@/store/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Store } from "lucide-react"

export default function LoginPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
    }
  }, [isAuthenticated, router])

  if (isAuthenticated) return null

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="flex w-full max-w-md flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
            <Store className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Portal</h1>
          <p className="text-sm text-slate-500">Enter your credentials to manage the platform</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
