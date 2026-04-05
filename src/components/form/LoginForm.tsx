"use client"
import * as React from "react"
import { useAuthStore } from "@/store/auth"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const { setAuth } = useAuthStore()
  const router = useRouter()

  const getErrorMessage = (error: unknown) => {
    return error instanceof Error ? error.message : "Failed to login"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Mock API call
      // const res = await api.post('/auth/login', { email, password })
      // setAuth(res.data.user, res.data.token)
      
      await new Promise(resolve => setTimeout(resolve, 800))
      
      if (email === "admin@platform.com" && password === "password") {
        setAuth(
          { id: "1", name: "System Admin", email: "admin@platform.com", role: "superadmin" },
          "mock-jwt-token"
        )
        router.push("/dashboard")
      } else {
        throw new Error("Invalid credentials. Try admin@platform.com / password")
      }
    } catch (error: unknown) {
      setError(getErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none" htmlFor="email">
          Email
        </label>
        <Input 
          id="email" 
          type="email" 
          placeholder="admin@platform.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none" htmlFor="password">
          Password
        </label>
        <Input 
          id="password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Sign in"}
      </Button>
    </form>
  )
}
