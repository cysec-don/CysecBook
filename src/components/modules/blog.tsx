'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Newspaper, Plus, Search, ThumbsUp, MessageCircle, Share2,
  Clock, User, Tag, Bookmark, TrendingUp, Flame
} from 'lucide-react'

export default function BlogModule() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Posts', count: 156 },
    { id: 'security', label: 'Cybersecurity', count: 45 },
    { id: 'webdev', label: 'Web Development', count: 38 },
    { id: 'cloud', label: 'Cloud Computing', count: 29 },
    { id: 'ai', label: 'AI & ML', count: 44 },
  ]

  const posts = [
    {
      id: 1,
      title: 'Understanding SQL Injection: A Comprehensive Guide',
      excerpt: 'Learn how SQL injection attacks work and how to prevent them in your applications. This guide covers everything from basic concepts to advanced techniques...',
      author: { name: 'Alice Johnson', avatar: '/images/profiles/female-profile.png' },
      category: 'security',
      image: '/images/blog/tech-post.png',
      date: 'Jan 10, 2024',
      readTime: '8 min',
      likes: 234,
      comments: 56,
      tags: ['SQL Injection', 'Security', 'Web Development']
    },
    {
      id: 2,
      title: 'Building Modern Web Apps with Next.js 15',
      excerpt: 'Explore the latest features in Next.js 15 including server components, streaming, and the new app router. A complete guide for developers...',
      author: { name: 'Bob Smith', avatar: '/images/profiles/male-profile.png' },
      category: 'webdev',
      image: '/images/courses/coding-course.png',
      date: 'Jan 8, 2024',
      readTime: '12 min',
      likes: 189,
      comments: 42,
      tags: ['Next.js', 'React', 'JavaScript']
    },
    {
      id: 3,
      title: 'Cross-Site Scripting (XSS) Prevention Strategies',
      excerpt: 'Protect your web applications from XSS attacks with these proven strategies. Learn about different types of XSS and how to implement proper sanitization...',
      author: { name: 'Carol Davis', avatar: '/images/profiles/female-profile.png' },
      category: 'security',
      image: '/images/courses/security-course.png',
      date: 'Jan 5, 2024',
      readTime: '10 min',
      likes: 312,
      comments: 78,
      tags: ['XSS', 'Security', 'Frontend']
    },
    {
      id: 4,
      title: 'Machine Learning for Cybersecurity',
      excerpt: 'How ML algorithms are revolutionizing threat detection and response. A deep dive into AI-powered security solutions...',
      author: { name: 'David Wilson', avatar: '/images/profiles/male-profile.png' },
      category: 'ai',
      image: '/images/blog/tech-post.png',
      date: 'Jan 3, 2024',
      readTime: '15 min',
      likes: 456,
      comments: 89,
      tags: ['Machine Learning', 'AI', 'Security']
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/blog-banner.png" 
          alt="Blog Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CysecBook Blog</h1>
            <p className="text-white/80">Explore articles on cybersecurity, development, and technology</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/blog/search" method="GET">
                <Input
                  name="q"
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </form>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Write Post
            </Button>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                  {cat.label}
                  <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    {post.tags.slice(0, 2).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-muted-foreground text-xs">{post.date} • {post.readTime} read</p>
                    </div>
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="py-2">
                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" /> {post.comments}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Comment Form (Vulnerable to XSS) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Leave a Comment</CardTitle>
              <CardDescription>Share your thoughts on our blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="/api/blog/comment" method="POST" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="commentName">Name</Label>
                  <Input id="commentName" name="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commentEmail">Email</Label>
                  <Input id="commentEmail" name="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commentContent">Comment</Label>
                  <Textarea 
                    id="commentContent" 
                    name="content" 
                    placeholder="Write your comment here..."
                    className="min-h-[100px]"
                  />
                </div>
                <input type="hidden" name="postId" value="1" />
                <Button type="submit">Post Comment</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-80 space-y-4">
          {/* Popular Posts */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                Popular Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {posts.slice(0, 3).map((post, i) => (
                <div key={i} className="flex gap-3 items-start cursor-pointer hover:bg-muted/50 p-2 rounded-lg -mx-2">
                  <span className="text-2xl font-bold text-muted-foreground">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium line-clamp-2">{post.title}</p>
                    <p className="text-xs text-muted-foreground">{post.likes} likes</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tags Cloud */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Popular Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['SQL Injection', 'XSS', 'CSRF', 'Next.js', 'React', 'Python', 'Security', 'Cloud', 'DevOps', 'AI'].map((tag, i) => (
                  <Badge key={i} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Newsletter</CardTitle>
              <CardDescription>Get the latest posts in your inbox</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="/api/blog/newsletter" method="POST" className="space-y-3">
                <Input name="email" type="email" placeholder="your@email.com" />
                <Button className="w-full">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
