'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { 
  Search, Plus, MapPin, DollarSign, Clock, Phone, Mail,
  Heart, MessageCircle, Share2, Filter, Grid, List,
  Tag, Camera, ChevronRight, User, Home, Car, Briefcase,
  Laptop, Sofa, Package
} from 'lucide-react'

export default function ClassifiedsModule() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Listings', icon: Grid, count: 456 },
    { id: 'electronics', label: 'Electronics', icon: Laptop, count: 123 },
    { id: 'vehicles', label: 'Vehicles', icon: Car, count: 67 },
    { id: 'furniture', label: 'Furniture', icon: Sofa, count: 89 },
    { id: 'jobs', label: 'Jobs', icon: Briefcase, count: 156 },
    { id: 'housing', label: 'Housing', icon: Home, count: 45 },
    { id: 'services', label: 'Services', icon: Package, count: 78 }
  ]

  const listings = [
    {
      id: 1,
      title: 'Vintage Bicycle - Great Condition',
      description: 'Classic 10-speed bicycle, well maintained. Perfect for city commuting. Recently serviced with new tires and brakes.',
      price: 250,
      image: '/images/listings/bicycle.png',
      category: 'vehicles',
      location: 'Downtown, SF',
      postedBy: { name: 'Mike Johnson', avatar: '/images/profiles/male-profile.png' },
      time: '2 hours ago',
      featured: true
    },
    {
      id: 2,
      title: 'MacBook Pro 16" - M2 Max',
      description: 'Like new MacBook Pro with M2 Max chip, 32GB RAM, 1TB SSD. Includes original charger and box. Minor scratch on bottom.',
      price: 2200,
      image: '/images/listings/laptop.png',
      category: 'electronics',
      location: 'Mission District, SF',
      postedBy: { name: 'Sarah Chen', avatar: '/images/profiles/female-profile.png' },
      time: '4 hours ago',
      featured: true
    },
    {
      id: 3,
      title: 'Senior Security Engineer Position',
      description: 'We are hiring a Senior Security Engineer to join our growing team. Remote-friendly, competitive salary, great benefits.',
      price: null,
      image: '/images/courses/security-course.png',
      category: 'jobs',
      location: 'Remote',
      postedBy: { name: 'TechCorp HR', avatar: '/images/profiles/female-profile.png' },
      time: '1 day ago',
      featured: false
    },
    {
      id: 4,
      title: 'Modern Leather Sofa Set',
      description: '3-seater leather sofa with matching armchair. Brown leather, excellent condition. Pet-free, smoke-free home.',
      price: 800,
      image: '/images/banners/store-banner.png',
      category: 'furniture',
      location: 'Oakland, CA',
      postedBy: { name: 'David Park', avatar: '/images/profiles/male-profile.png' },
      time: '2 days ago',
      featured: false
    },
    {
      id: 5,
      title: 'Network Security Consultant',
      description: 'Professional network security consulting services. Penetration testing, vulnerability assessments, security audits.',
      price: 150,
      image: '/images/courses/security-course.png',
      category: 'services',
      location: 'Bay Area, CA',
      postedBy: { name: 'Alex Security', avatar: '/images/profiles/male-profile.png' },
      time: '3 days ago',
      featured: false
    },
    {
      id: 6,
      title: '2BR Apartment Near Downtown',
      description: 'Spacious 2-bedroom apartment, recently renovated. In-unit laundry, parking included. Available Feb 1st.',
      price: 2800,
      image: '/images/banners/main-banner.png',
      category: 'housing',
      location: 'SoMa, SF',
      postedBy: { name: 'City Properties', avatar: '/images/profiles/female-profile.png' },
      time: '5 hours ago',
      featured: true
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/classifieds-banner.png" 
          alt="Classifieds Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CysecBook Classifieds</h1>
            <p className="text-white/80">Buy, sell, and find opportunities in our community</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Categories Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 p-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'secondary' : 'ghost'}
                  className="w-full justify-between"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="flex items-center gap-2">
                    <cat.icon className="h-4 w-4" /> {cat.label}
                  </span>
                  <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Search and Controls */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/classifieds/search" method="GET" className="w-full">
                <Input name="q" type="text" placeholder="Search listings..." className="pl-10" />
              </form>
            </div>
            <div className="flex border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Post Listing
            </Button>
          </div>

          {/* Featured Listings */}
          <div>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary" /> Featured Listings
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {listings.filter(l => l.featured).map((listing) => (
                <Card key={listing.id} className="card-hover overflow-hidden">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2">Featured</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base leading-tight">{listing.title}</CardTitle>
                      {listing.price && (
                        <span className="text-lg font-bold text-primary">${listing.price}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {listing.location}
                      <span>•</span>
                      <Clock className="h-3 w-3" /> {listing.time}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground line-clamp-2">{listing.description}</p>
                  </CardContent>
                  <Separator />
                  <CardFooter className="py-2 flex justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={listing.postedBy.avatar} />
                        <AvatarFallback>{listing.postedBy.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{listing.postedBy.name}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* All Listings */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Recent Listings</h2>
            <div className={viewMode === 'grid' ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
              {listings.map((listing) => (
                <Card key={listing.id} className="card-hover overflow-hidden">
                  {viewMode === 'grid' ? (
                    <>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={listing.image} 
                          alt={listing.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base leading-tight">{listing.title}</CardTitle>
                          {listing.price && (
                            <span className="text-lg font-bold text-primary">${listing.price}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" /> {listing.location}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-2">{listing.description}</p>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img 
                          src={listing.image} 
                          alt={listing.title}
                          className="w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{listing.title}</h3>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" /> {listing.location}
                                <span>•</span>
                                <Clock className="h-3 w-3" /> {listing.time}
                              </div>
                            </div>
                            {listing.price && (
                              <span className="text-xl font-bold text-primary">${listing.price}</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-1">{listing.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Create Listing Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Listing
              </CardTitle>
              <CardDescription>Post your item or service for sale</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="/api/classifieds/create" method="POST" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="listingTitle">Title</Label>
                  <Input id="listingTitle" name="title" placeholder="What are you selling?" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="listingCategory">Category</Label>
                    <select name="category" id="listingCategory" className="w-full border rounded-md p-2">
                      {categories.filter(c => c.id !== 'all').map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="listingPrice">Price (leave empty for jobs/services)</Label>
                    <Input id="listingPrice" name="price" type="number" placeholder="$0.00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="listingLocation">Location</Label>
                  <Input id="listingLocation" name="location" placeholder="City, State" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="listingDescription">Description</Label>
                  <Textarea 
                    id="listingDescription" 
                    name="description" 
                    placeholder="Describe your item or service..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="listingContact">Contact Email</Label>
                  <Input id="listingContact" name="contactEmail" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="listingPhone">Phone Number (optional)</Label>
                  <Input id="listingPhone" name="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Plus className="h-4 w-4" /> Post Listing
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Seller</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="/api/classifieds/contact" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Your Name</Label>
                    <Input id="contactName" name="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Your Email</Label>
                    <Input id="contactEmail" name="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactMessage">Message</Label>
                  <Textarea 
                    id="contactMessage" 
                    name="message" 
                    placeholder="I'm interested in this listing..."
                    className="min-h-[80px]"
                  />
                </div>
                <input type="hidden" name="listingId" value="1" />
                <Button type="submit" className="gap-2">
                  <Mail className="h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
