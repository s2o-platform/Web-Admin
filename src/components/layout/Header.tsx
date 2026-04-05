"use client"
import { useAuthStore } from "@/store/auth"
import { Button } from "@/components/ui/Button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-slate-900">Admin Area</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">
          {user?.email || 'admin@platform.com'}
        </span>
        <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  )
}
