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
import { 
  Gamepad2, Play, Trophy, Medal, Star, Users, Clock,
  ChevronRight, Search, Target, Zap, Gift, Crown,
  Swords, Puzzle, Car, Plane, Joystick
} from 'lucide-react'

export default function GamesModule() {
  const [activeTab, setActiveTab] = useState('games')

  const games = [
    {
      id: 1,
      title: 'Cyber Defender',
      description: 'Protect your network from cyber attacks in this tower defense game',
      image: '/images/games/arcade-game.png',
      category: 'Strategy',
      players: '2.5K playing',
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      title: 'Code Breaker',
      description: 'Solve puzzles by writing code snippets in this educational game',
      image: '/images/games/puzzle-game.png',
      category: 'Puzzle',
      players: '1.8K playing',
      rating: 4.7,
      isNew: false
    },
    {
      id: 3,
      title: 'Hacker Quest',
      description: 'Navigate through security systems and find vulnerabilities',
      image: '/images/games/arcade-game.png',
      category: 'Adventure',
      players: '3.2K playing',
      rating: 4.9,
      isNew: true
    },
    {
      id: 4,
      title: 'Network Defender',
      description: 'Build and protect your own virtual network infrastructure',
      image: '/images/games/puzzle-game.png',
      category: 'Simulation',
      players: '1.2K playing',
      rating: 4.6,
      isNew: false
    }
  ]

  const leaderboard = [
    { rank: 1, name: 'CyberNinja', score: 98500, avatar: '/images/profiles/male-profile.png', badge: 'Champion' },
    { rank: 2, name: 'HackerQueen', score: 94200, avatar: '/images/profiles/female-profile.png', badge: 'Elite' },
    { rank: 3, name: 'CodeMaster', score: 89900, avatar: '/images/profiles/male-profile.png', badge: 'Expert' },
    { rank: 4, name: 'SecurityPro', score: 85400, avatar: '/images/profiles/female-profile.png', badge: 'Pro' },
    { rank: 5, name: 'NetDefender', score: 81200, avatar: '/images/profiles/male-profile.png', badge: 'Advanced' },
    { rank: 6, name: 'BugHunter', score: 78900, avatar: '/images/profiles/female-profile.png', badge: 'Skilled' },
    { rank: 7, name: 'CryptoKing', score: 75600, avatar: '/images/profiles/male-profile.png', badge: 'Intermediate' },
    { rank: 8, name: 'PwnMaster', score: 72100, avatar: '/images/profiles/female-profile.png', badge: 'Rising Star' }
  ]

  const achievements = [
    { id: 1, name: 'First Blood', description: 'Complete your first CTF challenge', icon: Trophy, unlocked: true },
    { id: 2, name: 'Pentester', description: 'Find 10 vulnerabilities', icon: Target, unlocked: true },
    { id: 3, name: 'Code Wizard', description: 'Solve 50 coding puzzles', icon: Zap, unlocked: false },
    { id: 4, name: 'Team Player', description: 'Play 100 multiplayer games', icon: Users, unlocked: false },
    { id: 5, name: 'Speed Runner', description: 'Complete a game in under 5 minutes', icon: Clock, unlocked: true },
    { id: 6, name: 'Collector', description: 'Unlock all achievements', icon: Gift, unlocked: false }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/games-banner.png" 
          alt="Games Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CysecBook Games</h1>
            <p className="text-white/80">Learn cybersecurity through gamification</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Games Played', value: '1,234', icon: Gamepad2 },
          { label: 'High Score', value: '98,500', icon: Trophy },
          { label: 'Achievements', value: '12/50', icon: Medal },
          { label: 'Rank', value: '#42', icon: Crown }
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="games" className="gap-2">
            <Joystick className="h-4 w-4" /> Games
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="gap-2">
            <Trophy className="h-4 w-4" /> Leaderboard
          </TabsTrigger>
          <TabsTrigger value="achievements" className="gap-2">
            <Medal className="h-4 w-4" /> Achievements
          </TabsTrigger>
        </TabsList>

        {/* Games Tab */}
        <TabsContent value="games" className="mt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/games/search" method="GET">
                <Input name="q" type="text" placeholder="Search games..." className="pl-10" />
              </form>
            </div>
            <div className="flex gap-2">
              {['All', 'Strategy', 'Puzzle', 'Adventure', 'Simulation'].map((cat) => (
                <Button key={cat} variant="outline" size="sm">{cat}</Button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <Card key={game.id} className="card-hover overflow-hidden group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {game.isNew && (
                    <Badge className="absolute top-2 left-2">New</Badge>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <form action="/api/games/play" method="POST">
                      <input type="hidden" name="gameId" value={game.id} />
                      <Button size="lg" className="gap-2">
                        <Play className="h-5 w-5" /> Play Now
                      </Button>
                    </form>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{game.title}</CardTitle>
                    <Badge variant="outline">{game.category}</Badge>
                  </div>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> {game.players}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {game.rating}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Global Leaderboard
              </CardTitle>
              <CardDescription>Top players this season</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank} 
                    className={`flex items-center gap-4 p-3 rounded-lg ${player.rank <= 3 ? 'bg-primary/5' : 'hover:bg-muted/50'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      player.rank === 1 ? 'bg-yellow-500 text-white' :
                      player.rank === 2 ? 'bg-gray-400 text-white' :
                      player.rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {player.rank}
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{player.name}</p>
                      <Badge variant="outline" className="text-xs">{player.badge}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{player.score.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={achievement.unlocked ? 'border-primary' : 'opacity-60'}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{achievement.name}</p>
                        {achievement.unlocked && (
                          <Badge variant="secondary" className="text-xs">Unlocked</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Submit Score Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Submit Game Score</CardTitle>
          <CardDescription>Record your game achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/api/games/score" method="POST" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="scoreGame">Game</Label>
                <select name="gameId" id="scoreGame" className="w-full border rounded-md p-2">
                  {games.map((g) => (
                    <option key={g.id} value={g.id}>{g.title}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="scoreValue">Score</Label>
                <Input id="scoreValue" name="score" type="number" placeholder="Your score" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="scoreScreenshot">Screenshot URL (optional)</Label>
              <Input id="scoreScreenshot" name="screenshot" type="url" placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="scoreNotes">Notes</Label>
              <Input id="scoreNotes" name="notes" placeholder="Any additional notes" />
            </div>
            <Button type="submit" className="gap-2">
              <Trophy className="h-4 w-4" /> Submit Score
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
