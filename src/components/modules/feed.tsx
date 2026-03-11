'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  ThumbsUp, Share2, MessageCircle, Send, Image as ImageIcon, 
  Video, Smile, MapPin, Tag, MoreHorizontal, Globe, Clock
} from 'lucide-react'

export default function FeedModule() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: 'Alice Johnson', avatar: '/images/profiles/female-profile.png', username: '@alicej' },
      content: 'Just finished my cybersecurity certification! 🎉 The course covered penetration testing, network security, and incident response. Excited to apply these skills in real-world scenarios!',
      image: '/images/blog/tech-post.png',
      likes: 245,
      comments: 32,
      shares: 18,
      time: '2 hours ago',
      tags: ['cybersecurity', 'certification', 'learning']
    },
    {
      id: 2,
      author: { name: 'Bob Smith', avatar: '/images/profiles/male-profile.png', username: '@bobsmith' },
      content: 'Working on a new web application with Next.js and TypeScript. The developer experience is incredible! Here\'s a sneak peek at the architecture.',
      likes: 189,
      comments: 45,
      shares: 12,
      time: '4 hours ago',
      tags: ['webdev', 'nextjs', 'typescript']
    },
    {
      id: 3,
      author: { name: 'Carol Davis', avatar: '/images/profiles/female-profile.png', username: '@carold' },
      content: 'Amazing sunset at the beach today! Sometimes you need to take a break from coding and enjoy nature. 🌅',
      image: '/images/blog/travel-post.png',
      likes: 567,
      comments: 89,
      shares: 34,
      time: '6 hours ago',
      tags: ['travel', 'photography', 'relaxation']
    },
    {
      id: 4,
      author: { name: 'David Wilson', avatar: '/images/profiles/male-profile.png', username: '@davidw' },
      content: 'Just launched my new e-commerce store! It\'s a multi-vendor marketplace built with modern technologies. Check it out in the Store section!',
      image: '/images/banners/store-banner.png',
      likes: 312,
      comments: 67,
      shares: 45,
      time: '8 hours ago',
      tags: ['ecommerce', 'startup', 'launch']
    }
  ])

  const [newPost, setNewPost] = useState('')

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: { name: 'John Doe', avatar: '/images/profiles/male-profile.png', username: '@johndoe' },
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        time: 'Just now',
        tags: []
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Create Post */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/images/profiles/male-profile.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <form action="/api/posts/create" method="POST">
                <Textarea
                  name="content"
                  placeholder="What's on your mind, John?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[60px] resize-none border-0 bg-muted/50 focus-visible:ring-1"
                />
                <input type="hidden" name="userId" value="1" />
                <input type="hidden" name="token" value="vulnerable_token_123" />
              </form>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="gap-2 text-green-600">
                <ImageIcon className="h-4 w-4" /> Photo
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-blue-600">
                <Video className="h-4 w-4" /> Video
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-yellow-600">
                <Smile className="h-4 w-4" /> Feeling
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-red-600">
                <MapPin className="h-4 w-4" /> Location
              </Button>
            </div>
            <Button onClick={handlePost} size="sm" className="gap-2">
              <Send className="h-4 w-4" /> Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feed Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.time}
                    <span className="mx-1">•</span>
                    <Globe className="h-3 w-3" />
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-sm leading-relaxed mb-3">{post.content}</p>
            {post.tags.length > 0 && (
              <div className="flex gap-1 flex-wrap mb-3">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
            {post.image && (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Post image" 
                  className="w-full object-cover max-h-96"
                />
              </div>
            )}
          </CardContent>
          <Separator />
          <CardContent className="py-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments • {post.shares} shares</span>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="py-2">
            <div className="flex items-center justify-around w-full">
              <form action="/api/posts/like" method="POST" className="flex-1">
                <input type="hidden" name="postId" value={post.id} />
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  <ThumbsUp className="h-4 w-4" /> Like
                </Button>
              </form>
              <form action="/api/posts/comment" method="POST" className="flex-1">
                <input type="hidden" name="postId" value={post.id} />
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  <MessageCircle className="h-4 w-4" /> Comment
                </Button>
              </form>
              <Button variant="ghost" size="sm" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}

      {/* Load More */}
      <div className="text-center py-4">
        <Button variant="outline" className="gap-2">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
