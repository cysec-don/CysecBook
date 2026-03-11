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
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Heart, MessageCircle, Search, MapPin, Star, User,
  Send, ThumbsUp, Camera, Gift, Sparkles, Clock,
  ChevronRight, Filter, Sliders, Eye
} from 'lucide-react'

export default function DatingModule() {
  const [activeTab, setActiveTab] = useState('discover')

  const profiles = [
    {
      id: 1,
      name: 'Sarah',
      age: 28,
      location: 'San Francisco, CA',
      avatar: '/images/profiles/female-profile.png',
      bio: 'Cybersecurity enthusiast | Coffee lover | Dog mom',
      interests: ['Security', 'Coding', 'Hiking', 'Coffee'],
      match: 95,
      online: true
    },
    {
      id: 2,
      name: 'Emily',
      age: 26,
      location: 'New York, NY',
      avatar: '/images/profiles/female-profile.png',
      bio: 'Full-stack developer | Travel addict | Bookworm',
      interests: ['Web Dev', 'Travel', 'Books', 'Yoga'],
      match: 88,
      online: false
    },
    {
      id: 3,
      name: 'Michael',
      age: 30,
      location: 'Austin, TX',
      avatar: '/images/profiles/male-profile.png',
      bio: 'Penetration tester | Gamer | Music producer',
      interests: ['Pentesting', 'Gaming', 'Music', 'Fitness'],
      match: 82,
      online: true
    },
    {
      id: 4,
      name: 'Jessica',
      age: 27,
      location: 'Seattle, WA',
      avatar: '/images/profiles/female-profile.png',
      bio: 'Cloud architect | Cat person | Photography hobbyist',
      interests: ['Cloud', 'Photography', 'Cats', 'Art'],
      match: 79,
      online: false
    }
  ]

  const matches = [
    { id: 1, name: 'Sarah', avatar: '/images/profiles/female-profile.png', lastMessage: 'Hey! How are you?', time: '2m ago', unread: true },
    { id: 2, name: 'Michael', avatar: '/images/profiles/male-profile.png', lastMessage: 'Great meeting you!', time: '1h ago', unread: false },
    { id: 3, name: 'Emily', avatar: '/images/profiles/female-profile.png', lastMessage: 'See you soon!', time: '3h ago', unread: false }
  ]

  const chatMessages = [
    { id: 1, sender: 'Sarah', text: 'Hey! I saw we have a 95% match!', time: '10:30 AM', isMe: false },
    { id: 2, sender: 'Me', text: 'Hi Sarah! Yes, we have a lot in common. How are you?', time: '10:32 AM', isMe: true },
    { id: 3, sender: 'Sarah', text: 'I\'m great! I noticed you\'re into cybersecurity too. What\'s your favorite area?', time: '10:33 AM', isMe: false },
    { id: 4, sender: 'Me', text: 'I love penetration testing and web application security. How about you?', time: '10:35 AM', isMe: true },
    { id: 5, sender: 'Sarah', text: 'Same! I\'m actually studying for my OSCP certification right now 🎯', time: '10:36 AM', isMe: false }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/dating-banner.png" 
          alt="Dating Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CysecBook Dating</h1>
            <p className="text-white/80">Find your perfect match in the security community</p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="discover" className="gap-2">
            <Sparkles className="h-4 w-4" /> Discover
          </TabsTrigger>
          <TabsTrigger value="matches" className="gap-2">
            <Heart className="h-4 w-4" /> Matches
          </TabsTrigger>
          <TabsTrigger value="messages" className="gap-2">
            <MessageCircle className="h-4 w-4" /> Messages
          </TabsTrigger>
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" /> My Profile
          </TabsTrigger>
        </TabsList>

        {/* Discover Tab */}
        <TabsContent value="discover" className="mt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/dating/search" method="GET">
                <Input name="q" type="text" placeholder="Search by name, interests..." className="pl-10" />
              </form>
            </div>
            <Button variant="outline" className="gap-2">
              <Sliders className="h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {profiles.map((profile) => (
              <Card key={profile.id} className="card-hover overflow-hidden">
                <div className="flex">
                  <div className="w-40 h-48 relative">
                    <img 
                      src={profile.avatar} 
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                    {profile.online && (
                      <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                    <Badge className="absolute top-2 left-2 bg-pink-500">
                      {profile.match}% Match
                    </Badge>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {profile.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm mb-3">{profile.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {profile.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{interest}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <form action="/api/dating/like" method="POST">
                        <input type="hidden" name="profileId" value={profile.id} />
                        <Button size="sm" className="gap-1">
                          <Heart className="h-4 w-4" /> Like
                        </Button>
                      </form>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Eye className="h-4 w-4" /> View
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Matches Tab */}
        <TabsContent value="matches" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Matches</CardTitle>
              <CardDescription>People who liked you back</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {profiles.filter(p => p.match > 80).map((profile) => (
                  <div key={profile.id} className="text-center p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <Avatar className="h-20 w-20 mx-auto mb-2">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback>{profile.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-xs text-muted-foreground">{profile.match}% Match</p>
                    <Button size="sm" className="mt-2 gap-1">
                      <MessageCircle className="h-3 w-3" /> Chat
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages" className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Conversations List */}
            <Card className="md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Conversations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  {matches.map((match) => (
                    <div 
                      key={match.id} 
                      className={`flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer border-b ${match.unread ? 'bg-primary/5' : ''}`}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={match.avatar} />
                        <AvatarFallback>{match.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{match.name}</p>
                          <span className="text-xs text-muted-foreground">{match.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{match.lastMessage}</p>
                      </div>
                      {match.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      )}
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Chat Window */}
            <Card className="md:col-span-2">
              <CardHeader className="pb-2 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/profiles/female-profile.png" />
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah</p>
                    <p className="text-xs text-green-500">Online</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[300px] p-4">
                  <div className="space-y-4">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] rounded-lg p-3 ${
                          msg.isMe ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <p className="text-sm">{msg.text}</p>
                          <p className={`text-xs mt-1 ${msg.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="border-t p-3">
                <form action="/api/dating/message" method="POST" className="flex gap-2 w-full">
                  <input type="hidden" name="recipientId" value="1" />
                  <Input name="message" placeholder="Type a message..." className="flex-1" />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Profile Form */}
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your dating profile</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="/api/dating/profile" method="POST" className="space-y-4">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/images/profiles/male-profile.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profileName">Name</Label>
                      <Input id="profileName" name="name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profileAge">Age</Label>
                      <Input id="profileAge" name="age" type="number" defaultValue="28" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profileLocation">Location</Label>
                    <Input id="profileLocation" name="location" defaultValue="San Francisco, CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profileBio">Bio</Label>
                    <Textarea 
                      id="profileBio" 
                      name="bio" 
                      defaultValue="Security researcher | Coffee enthusiast | Always learning"
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profileInterests">Interests (comma separated)</Label>
                    <Input id="profileInterests" name="interests" defaultValue="Security, Coding, Gaming, Coffee" />
                  </div>
                  <div className="space-y-2">
                    <Label>Looking for</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Relationship</Button>
                      <Button variant="outline" size="sm">Friendship</Button>
                      <Button variant="outline" size="sm">Networking</Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">Save Profile</Button>
                </form>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Match Preferences</CardTitle>
                <CardDescription>Set your ideal match criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="/api/dating/preferences" method="POST" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prefMinAge">Min Age</Label>
                      <Input id="prefMinAge" name="minAge" type="number" defaultValue="22" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prefMaxAge">Max Age</Label>
                      <Input id="prefMaxAge" name="maxAge" type="number" defaultValue="35" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prefDistance">Max Distance (miles)</Label>
                    <Input id="prefDistance" name="maxDistance" type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prefInterests">Preferred Interests</Label>
                    <Input id="prefInterests" name="interests" defaultValue="Security, Tech, Gaming" />
                  </div>
                  <Button type="submit" className="w-full">Save Preferences</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
