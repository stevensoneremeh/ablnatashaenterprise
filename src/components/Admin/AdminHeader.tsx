"use client"

import { useAuth } from "@/components/Auth/AuthProvider"
import { useState } from "react"

const AdminHeader = () => {
  const { user, profile, signOut } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-card shadow-sm border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your luxury marketplace</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 text-muted-foreground hover:text-foreground focus:outline-none transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-medium text-sm">
                  {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || "A"}
                </span>
              </div>
              <span className="font-medium">{profile?.full_name || user?.email}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg border border-border py-1 z-50">
                <button
                  onClick={() => {
                    signOut()
                    setDropdownOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
