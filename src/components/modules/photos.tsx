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
  Image as ImageIcon, Upload, Camera, Heart, MessageCircle, 
  Share2, Folder, Grid, Plus, Search, Filter, Download,
  Eye, Trash2, MoreHorizontal, Clock, MapPin, Tag
} from 'lucide-react'

export default function PhotosModule() {
  const [activeTab, setActiveTab] = useState('explore')
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null)

  const albums = [
    { id: 1, name: 'Travel Adventures', count: 45, cover: '/images/blog/travel-post.png' },
    { id: 2, name: 'Tech & Gadgets', count: 32, cover: '/images/blog/tech-post.png' },
    { id: 3, name: 'Nature Photography', count: 67, cover: '/images/banners/main-banner.png' },
    { id: 4, name: 'Portraits', count: 28, cover: '/images/profiles/female-profile.png' },
  ]

  const photos = [
    {
      id: 1,
      title: 'Sunset at the Beach',
      image: '/images/blog/travel-post.png',
      author: { name: 'Alice Johnson', avatar: '/images/profiles/female-profile.png' },
      likes: 245,
      comments: 32,
      date: '2 hours ago',
      location: 'Malibu, CA'
    },
    {
      id: 2,
      title: 'Tech Conference 2024',
      image: '/images/blog/tech-post.png',
      author: { name: 'Bob Smith', avatar: '/images/profiles/male-profile.png' },
      likes: 189,
      comments: 45,
      date: '4 hours ago',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      title: 'Cybersecurity Workshop',
      image: '/images/courses/security-course.png',
      author: { name: 'Carol Davis', avatar: '/images/profiles/female-profile.png' },
      likes: 312,
      comments: 67,
      date: '6 hours ago',
      location: 'New York, NY'
    },
    {
      id: 4,
      title: 'Coding Bootcamp',
      image: '/images/courses/coding-course.png',
      author: { name: 'David Wilson', avatar: '/images/profiles/male-profile.png' },
      likes: 156,
      comments: 23,
      date: '1 day ago',
      location: 'Austin, TX'
    },
    {
      id: 5,
      title: 'Game Development',
      image: '/images/games/arcade-game.png',
      author: { name: 'Eva Martinez', avatar: '/images/profiles/female-profile.png' },
      likes: 278,
      comments: 41,
      date: '2 days ago',
      location: 'Seattle, WA'
    },
    {
      id: 6,
      title: 'Product Launch',
      image: '/images/products/headphones.png',
      author: { name: 'Frank Brown', avatar: '/images/profiles/male-profile.png' },
      likes: 423,
      comments: 89,
      date: '3 days ago',
      location: 'Los Angeles, CA'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/photos-banner.png" 
          alt="Photos Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Photo Gallery</h1>
            <p className="text-white/80">Share and discover amazing photos</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="explore" className="gap-2">
              <Grid className="h-4 w-4" /> Explore
            </TabsTrigger>
            <TabsTrigger value="albums" className="gap-2">
              <Folder className="h-4 w-4" /> Albums
            </TabsTrigger>
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="h-4 w-4" /> Upload
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/photos/search" method="GET">
                <Input name="q" type="text" placeholder="Search photos..." className="pl-10 w-64" />
              </form>
            </div>
          </div>
        </div>

        {/* Explore Tab */}
        <TabsContent value="explore" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <Card key={photo.id} className="card-hover overflow-hidden group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{photo.title}</p>
                      <div className="flex items-center gap-2 text-white/80 text-xs">
                        <MapPin className="h-3 w-3" /> {photo.location}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="bg-background/80">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={photo.author.avatar} />
                        <AvatarFallback>{photo.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{photo.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {photo.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {photo.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Albums Tab */}
        <TabsContent value="albums" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {albums.map((album) => (
              <Card key={album.id} className="card-hover overflow-hidden cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={album.cover} 
                    alt={album.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{album.name}</p>
                      <p className="text-xs text-muted-foreground">{album.count} photos</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Folder className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Create New Album */}
            <Card className="card-hover border-dashed cursor-pointer flex items-center justify-center min-h-[200px]">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Plus className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="font-medium">Create New Album</p>
                <p className="text-xs text-muted-foreground">Organize your photos</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Upload Tab */}
        <TabsContent value="upload" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Upload Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Photos
                </CardTitle>
                <CardDescription>Share your photos with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="/api/photos/upload" method="POST" encType="multipart/form-data" className="space-y-4">
                  {/* File Drop Zone */}
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Camera className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <p className="font-medium mb-1">Drag and drop your photos here</p>
                    <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                    <Input name="photos" type="file" accept="image/*" multiple className="hidden" id="photo-upload" />
                    <Label htmlFor="photo-upload" className="cursor-pointer">
                      <Button variant="outline" asChild>
                        <span>Browse Files</span>
                      </Button>
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photoTitle">Title</Label>
                    <Input id="photoTitle" name="title" placeholder="Enter photo title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photoDescription">Description</Label>
                    <Textarea 
                      id="photoDescription" 
                      name="description" 
                      placeholder="Describe your photo..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="photoAlbum">Album</Label>
                      <select name="albumId" id="photoAlbum" className="w-full border rounded-md p-2">
                        <option value="">No Album</option>
                        {albums.map((album) => (
                          <option key={album.id} value={album.id}>{album.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="photoLocation">Location</Label>
                      <Input id="photoLocation" name="location" placeholder="Location" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photoTags">Tags (comma separated)</Label>
                    <Input id="photoTags" name="tags" placeholder="nature, travel, sunset" />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Upload className="h-4 w-4" /> Upload Photos
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recent Uploads */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Uploads</CardTitle>
                <CardDescription>Your latest photos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {photos.slice(0, 6).map((photo) => (
                    <div key={photo.id} className="aspect-square overflow-hidden rounded-lg relative group">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Comment Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Add Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="/api/photos/comment" method="POST" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="commenterName">Name</Label>
                <Input id="commenterName" name="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="commenterEmail">Email</Label>
                <Input id="commenterEmail" name="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="photoComment">Comment</Label>
              <Textarea 
                id="photoComment" 
                name="comment" 
                placeholder="Write your comment..."
                className="min-h-[80px]"
              />
            </div>
            <input type="hidden" name="photoId" value="1" />
            <Button type="submit">Post Comment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
