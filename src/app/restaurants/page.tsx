"use client"
import { useEffect } from "react"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { DataTable } from "@/components/table/DataTable"
import { useAdminStore } from "@/store/admin"
import { useAuthStore } from "@/store/auth"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Restaurant } from "@/types"
import { Check, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RestaurantsPage() {
  const { isAuthenticated } = useAuthStore()
  const router = useRouter()
  const { restaurants, isLoading, fetchRestaurants, updateRestaurantStatus } = useAdminStore()

  useEffect(() => {
    if (!isAuthenticated) router.push('/login')
  }, [isAuthenticated, router])

  useEffect(() => {
    if (isAuthenticated) {
      fetchRestaurants()
    }
  }, [isAuthenticated, fetchRestaurants])

  if (!isAuthenticated) return null

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      cell: (item: Restaurant) => <span className="font-medium">{item.name}</span>
    },
    {
      header: "Owner",
      accessorKey: "ownerName",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Applied On",
      accessorKey: "createdAt",
      cell: (item: Restaurant) => new Date(item.createdAt).toLocaleDateString()
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (item: Restaurant) => {
        const variants = {
          pending: "warning",
          approved: "success",
          rejected: "destructive",
        } as const
        
        return (
          <Badge variant={variants[item.status]}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Badge>
        )
      }
    },
    {
      header: "Actions",
      accessorKey: "id",
      cell: (item: Restaurant) => (
        <div className="flex items-center gap-2">
          {item.status === 'pending' ? (
            <>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800"
                onClick={() => updateRestaurantStatus(item.id, 'approved')}
                disabled={isLoading}
              >
                <Check className="mr-1 h-3 w-3" /> Approve
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 border-red-200 bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800"
                onClick={() => updateRestaurantStatus(item.id, 'rejected')}
                disabled={isLoading}
              >
                <X className="mr-1 h-3 w-3" /> Reject
              </Button>
            </>
          ) : (
            <Button size="sm" variant="ghost" className="h-8">View Details</Button>
          )}
        </div>
      )
    }
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Restaurants</h2>
            <p className="text-slate-500">Manage platform restaurant applications and status.</p>
          </div>
          <Button>Add Restaurant</Button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white">
          <DataTable 
            data={restaurants} 
            columns={columns} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </DashboardLayout>
  )
}
