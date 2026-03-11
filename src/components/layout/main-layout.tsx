'use client'

import { Navbar } from './navbar'
import { LeftSidebar } from './left-sidebar'
import { RightSidebar } from './right-sidebar'
import { useAppStore } from '@/lib/store'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { currentModule } = useAppStore()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <main className="flex-1 min-h-[calc(100vh-3.5rem)]">
          <div className="container max-w-4xl mx-auto py-6 px-4">
            {children}
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
