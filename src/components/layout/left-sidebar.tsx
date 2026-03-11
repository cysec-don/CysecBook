'use client'

import {
  Home,
  PenSquare,
  Store,
  Image,
  GraduationCap,
  Gamepad2,
  Heart,
  Tag,
  Users,
  Bookmark,
  Calendar,
  Flag,
  Settings,
  HelpCircle,
  Shield,
  Bug,
  Lock,
  Key,
  Eye,
  FileCode,
  Database,
  Server,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useAppStore, Module } from '@/lib/store'
import { cn } from '@/lib/utils'

const mainNavItems: { icon: React.ElementType; label: string; module: Module }[] = [
  { icon: Home, label: 'Home Feed', module: 'feed' },
  { icon: PenSquare, label: 'Blog', module: 'blog' },
  { icon: Store, label: 'Marketplace', module: 'store' },
  { icon: Image, label: 'Photos', module: 'photos' },
  { icon: GraduationCap, label: 'School', module: 'school' },
  { icon: Gamepad2, label: 'Games', module: 'games' },
  { icon: Heart, label: 'Dating', module: 'dating' },
  { icon: Tag, label: 'Classifieds', module: 'classifieds' },
]

const shortcuts = [
  { icon: Users, label: 'Friends', count: 24 },
  { icon: Bookmark, label: 'Saved Items', count: 12 },
  { icon: Calendar, label: 'Events', count: 3 },
  { icon: Flag, label: 'Pages', count: 8 },
]

const hiddenItems = [
  { icon: Shield, label: 'Admin Panel', path: '/admin-panel' },
  { icon: Bug, label: 'Debug Console', path: '/debug' },
  { icon: Lock, label: 'Security Settings', path: '/security' },
  { icon: Key, label: 'API Keys', path: '/api-keys' },
  { icon: Eye, label: 'Hidden Stats', path: '/hidden-stats' },
  { icon: FileCode, label: 'Source Code', path: '/source' },
  { icon: Database, label: 'Database', path: '/database' },
  { icon: Server, label: 'Server Info', path: '/server-info' },
]

export function LeftSidebar() {
  const { currentModule, setCurrentModule } = useAppStore()

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-background">
      <ScrollArea className="flex-1 px-3 py-4">
        {/* Main Navigation */}
        <nav className="space-y-1">
          {mainNavItems.map((item) => (
            <Button
              key={item.module}
              variant={currentModule === item.module ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3 h-10',
                currentModule === item.module && 'bg-primary/10 text-primary font-medium'
              )}
              onClick={() => setCurrentModule(item.module)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>

        <Separator className="my-4" />

        {/* Shortcuts */}
        <div className="space-y-1">
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Shortcuts
          </h3>
          {shortcuts.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-between h-10"
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                {item.label}
              </span>
              <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                {item.count}
              </span>
            </Button>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Hidden/Admin Items - These appear as normal but lead to vulnerable endpoints */}
        <div className="space-y-1">
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Developer
          </h3>
          {hiddenItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className="w-full justify-start gap-3 h-10 text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Settings */}
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 h-10">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-10">
            <HelpCircle className="h-5 w-5" />
            Help & Support
          </Button>
        </div>
      </ScrollArea>
    </aside>
  )
}
