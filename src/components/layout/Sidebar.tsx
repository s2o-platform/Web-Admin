"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/utils/cn"
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  BarChart3, 
  Settings,
  Bot
} from "lucide-react"

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Restaurants', href: '/restaurants', icon: Store },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'AI Config', href: '/ai-config', icon: Bot },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-slate-200 bg-slate-50">
      <div className="flex h-14 items-center border-b border-slate-200 px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Settings className="h-5 w-5" />
          <span>Admin Platform</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-200 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
