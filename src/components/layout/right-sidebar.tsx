'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, TrendingUp, Flame } from 'lucide-react'

const sponsoredContent = [
  {
    id: 1,
    title: 'CyberSecurity Bootcamp',
    description: 'Learn ethical hacking from scratch. 50% off limited time!',
    image: '/images/courses/security-course.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Premium VPN Service',
    description: 'Stay anonymous online with military-grade encryption.',
    image: '/images/banners/main-banner.png',
    link: '#',
  },
]

const suggestedPages = [
  { id: 1, name: 'Hacking Tutorials', followers: '125K', avatar: '/images/profiles/male-profile.png' },
  { id: 2, name: 'CTF Challenges', followers: '89K', avatar: '/images/profiles/female-profile.png' },
  { id: 3, name: 'Bug Bounty Tips', followers: '67K', avatar: '/images/profiles/male-profile.png' },
]

const trendingTopics = [
  { id: 1, name: '#SQLInjection', posts: '2.3K' },
  { id: 2, name: '#XSS', posts: '1.8K' },
  { id: 3, name: '#CyberSecurity', posts: '5.2K' },
  { id: 4, name: '#BugBounty', posts: '3.1K' },
  { id: 5, name: '#PenTesting', posts: '1.2K' },
]

const onlineFriends = [
  { id: 1, name: 'Alice Smith', avatar: '/images/profiles/female-profile.png', status: 'online' },
  { id: 2, name: 'Bob Johnson', avatar: '/images/profiles/male-profile.png', status: 'online' },
  { id: 3, name: 'Carol Davis', avatar: '/images/profiles/female-profile.png', status: 'away' },
  { id: 4, name: 'David Wilson', avatar: '/images/profiles/male-profile.png', status: 'online' },
]

export function RightSidebar() {
  return (
    <aside className="hidden lg:flex w-72 flex-col border-l bg-background">
      <ScrollArea className="flex-1 px-4 py-4">
        {/* Sponsored Content */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Sponsored</h3>
          <div className="space-y-4">
            {sponsoredContent.map((ad) => (
              <Card key={ad.id} className="overflow-hidden border-0 shadow-none bg-muted/30">
                <div className="aspect-video relative">
                  <Image
                    src={ad.image}
                    alt={ad.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-sm line-clamp-1">{ad.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {ad.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Suggested Pages */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Suggested for You
          </h3>
          <div className="space-y-2">
            {suggestedPages.map((page) => (
              <div
                key={page.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={page.avatar} />
                    <AvatarFallback>{page.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{page.name}</p>
                    <p className="text-xs text-muted-foreground">{page.followers} followers</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="h-7 text-xs">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
            <Flame className="h-4 w-4 text-orange-500" />
            Trending
          </h3>
          <div className="space-y-2">
            {trendingTopics.map((topic) => (
              <div
                key={topic.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <span className="text-sm font-medium text-primary">{topic.name}</span>
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {topic.posts}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Online Friends */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Online Friends
          </h3>
          <div className="space-y-2">
            {onlineFriends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={friend.avatar} />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background ${
                      friend.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  />
                </div>
                <span className="text-sm">{friend.name}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
