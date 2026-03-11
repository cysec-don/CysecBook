'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Home, Users, ShoppingBag, Image, BookOpen, Gamepad2, Heart, 
  Newspaper, Search, Bell, MessageCircle, Settings, Menu, Moon, Sun,
  ThumbsUp, Share2, Send, Plus, TrendingUp, Clock, Star,
  ChevronRight, MapPin, DollarSign, Calendar, User, Lock, Eye, EyeOff,
  Upload, Camera, Play, Trophy, Award, Target, Zap, Gift, MoreHorizontal,
  MessageSquare, Download, FileArchive
} from 'lucide-react'
import BlogModule from '@/components/modules/blog'
import StoreModule from '@/components/modules/store'
import PhotosModule from '@/components/modules/photos'
import SchoolModule from '@/components/modules/school'
import GamesModule from '@/components/modules/games'
import DatingModule from '@/components/modules/dating'
import ClassifiedsModule from '@/components/modules/classifieds'
import FeedModule from '@/components/modules/feed'

export default function CysecBook() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'blog', label: 'Blog', icon: Newspaper },
    { id: 'store', label: 'Store', icon: ShoppingBag },
    { id: 'photos', label: 'Photos', icon: Image },
    { id: 'school', label: 'School', icon: BookOpen },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'dating', label: 'Dating', icon: Heart },
    { id: 'classifieds', label: 'Classifieds', icon: Users },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 glass border-b">
        <div className="max-w-[1920px] mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/cysecbook-logo.png" 
                alt="CysecBook" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold gradient-text hidden sm:block">CysecBook</span>
            </div>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/search" method="GET">
                <Input
                  name="q"
                  type="text"
                  placeholder="Search CysecBook..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-muted/50"
                />
              </form>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className="gap-2"
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden xl:inline">{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">5</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="/images/profiles/male-profile.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-[280px] shrink-0 border-r min-h-[calc(100vh-3.5rem)] p-4 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-hide">
          {/* User Profile Card */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/images/profiles/male-profile.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">@johndoe</p>
                </div>
              </div>
              <Separator className="my-3" />
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="font-bold">1.2K</p>
                  <p className="text-muted-foreground text-xs">Posts</p>
                </div>
                <div>
                  <p className="font-bold">5.6K</p>
                  <p className="text-muted-foreground text-xs">Friends</p>
                </div>
                <div>
                  <p className="font-bold">892</p>
                  <p className="text-muted-foreground text-xs">Groups</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'secondary' : 'ghost'}
                className="w-full justify-start gap-3"
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </nav>

          <Separator className="my-4" />

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-muted-foreground px-3">QUICK LINKS</h4>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" /> Settings
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Lock className="h-4 w-4" /> Privacy
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-destructive">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-[calc(100vh-3.5rem)] p-4">
          {activeTab === 'home' && <FeedModule />}
          {activeTab === 'blog' && <BlogModule />}
          {activeTab === 'store' && <StoreModule />}
          {activeTab === 'photos' && <PhotosModule />}
          {activeTab === 'school' && <SchoolModule />}
          {activeTab === 'games' && <GamesModule />}
          {activeTab === 'dating' && <DatingModule />}
          {activeTab === 'classifieds' && <ClassifiedsModule />}
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-[300px] shrink-0 border-l min-h-[calc(100vh-3.5rem)] p-4 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-hide">
          {/* Trending Topics */}
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {['#CyberSecurity', '#WebDevelopment', '#CloudComputing', '#MachineLearning', '#DevOps'].map((tag, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm hover:text-primary cursor-pointer">{tag}</span>
                  <Badge variant="secondary" className="text-xs">{Math.floor(Math.random() * 50) + 10}K</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Friend Suggestions */}
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">People You May Know</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/images/profiles/${i % 2 === 0 ? 'female' : 'male'}-profile.png`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">User {i}</p>
                    <p className="text-xs text-muted-foreground">12 mutual friends</p>
                  </div>
                  <Button size="sm" variant="outline">Add</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: 'CyberSec Conference', date: 'Jan 15', type: 'Conference' },
                { title: 'Hackathon 2024', date: 'Jan 20', type: 'Competition' },
                { title: 'Web Dev Workshop', date: 'Jan 25', type: 'Workshop' },
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date} • {event.type}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Download Section */}
          <Card className="border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <FileArchive className="h-4 w-4 text-primary" />
                Download CysecBook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Get the complete vulnerable website package for offline security testing.
              </p>
              <a href="/download.zip" download="cysecbook.zip">
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" /> Download ZIP (3.2 MB)
                </Button>
              </a>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass border-t z-50">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'default' : 'ghost'}
              size="sm"
              className="flex-col h-auto py-1 gap-1"
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px]">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="fixed top-14 right-4 w-80 glass rounded-lg shadow-xl z-50 animate-fade-in">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <ScrollArea className="h-96">
            <div className="p-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/images/profiles/${i % 2 === 0 ? 'female' : 'male'}-profile.png`} />
                  </Avatar>
                  <div>
                    <p className="text-sm">User {i} liked your post</p>
                    <p className="text-xs text-muted-foreground">{i}h ago</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  )
}

function LogOut({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
}
