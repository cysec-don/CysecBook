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
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { 
  BookOpen, Play, Clock, Users, Star, Award, CheckCircle,
  ChevronRight, Search, Filter, Download, Calendar,
  Target, Trophy, Zap, FileText, Video, Headphones
} from 'lucide-react'

export default function SchoolModule() {
  const [activeTab, setActiveTab] = useState('courses')

  const courses = [
    {
      id: 1,
      title: 'Complete Cybersecurity Bootcamp',
      instructor: { name: 'Dr. Alice Johnson', avatar: '/images/profiles/female-profile.png' },
      image: '/images/courses/security-course.png',
      rating: 4.9,
      students: 12500,
      duration: '42 hours',
      lessons: 156,
      price: 89.99,
      category: 'Security',
      level: 'Intermediate',
      progress: 65
    },
    {
      id: 2,
      title: 'Web Development Masterclass',
      instructor: { name: 'Bob Smith', avatar: '/images/profiles/male-profile.png' },
      image: '/images/courses/coding-course.png',
      rating: 4.8,
      students: 18200,
      duration: '56 hours',
      lessons: 210,
      price: 79.99,
      category: 'Development',
      level: 'Beginner',
      progress: 30
    },
    {
      id: 3,
      title: 'Penetration Testing Fundamentals',
      instructor: { name: 'Carol Davis', avatar: '/images/profiles/female-profile.png' },
      image: '/images/courses/security-course.png',
      rating: 4.7,
      students: 8900,
      duration: '28 hours',
      lessons: 98,
      price: 69.99,
      category: 'Security',
      level: 'Advanced',
      progress: 0
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: { name: 'David Wilson', avatar: '/images/profiles/male-profile.png' },
      image: '/images/courses/coding-course.png',
      rating: 4.9,
      students: 22000,
      duration: '48 hours',
      lessons: 180,
      price: 94.99,
      category: 'Data Science',
      level: 'Intermediate',
      progress: 0
    }
  ]

  const quizzes = [
    { id: 1, title: 'SQL Injection Basics', questions: 20, duration: '30 min', difficulty: 'Easy' },
    { id: 2, title: 'XSS Attack Vectors', questions: 25, duration: '40 min', difficulty: 'Medium' },
    { id: 3, title: 'Network Security', questions: 30, duration: '45 min', difficulty: 'Hard' },
    { id: 4, title: 'Web App Security', questions: 35, duration: '50 min', difficulty: 'Expert' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src="/images/banners/school-banner.png" 
          alt="School Banner" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CysecBook Academy</h1>
            <p className="text-white/80">Learn cybersecurity and development from industry experts</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Courses', value: '150+', icon: BookOpen },
          { label: 'Students', value: '45K+', icon: Users },
          { label: 'Instructors', value: '120+', icon: Award },
          { label: 'Certificates', value: '12K+', icon: Trophy }
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
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="courses" className="gap-2">
              <BookOpen className="h-4 w-4" /> Courses
            </TabsTrigger>
            <TabsTrigger value="my-learning" className="gap-2">
              <Target className="h-4 w-4" /> My Learning
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="gap-2">
              <FileText className="h-4 w-4" /> Quizzes
            </TabsTrigger>
            <TabsTrigger value="certificates" className="gap-2">
              <Award className="h-4 w-4" /> Certificates
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <form action="/api/school/search" method="GET">
                <Input name="q" type="text" placeholder="Search courses..." className="pl-10 w-64" />
              </form>
            </div>
          </div>
        </div>

        {/* Courses Tab */}
        <TabsContent value="courses" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge>{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="gap-2">
                      <Play className="h-5 w-5" /> Preview
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg leading-tight hover:text-primary cursor-pointer">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={course.instructor.avatar} />
                      <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{course.instructor.name}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {course.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> {course.students.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {course.duration}
                    </span>
                  </div>
                  {course.progress > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  )}
                </CardContent>
                <Separator />
                <CardFooter className="py-3 flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">${course.price}</span>
                  <form action="/api/school/enroll" method="POST">
                    <input type="hidden" name="courseId" value={course.id} />
                    <Button type="submit">
                      {course.progress > 0 ? 'Continue' : 'Enroll Now'}
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Learning Tab */}
        <TabsContent value="my-learning" className="mt-6">
          <div className="space-y-4">
            {courses.filter(c => c.progress > 0).map((course) => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-40 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {course.instructor.name}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{course.progress}% complete</span>
                          <span>{Math.round(course.lessons * (1 - course.progress / 100))} lessons left</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                    </div>
                    <Button>Continue Learning</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Quizzes Tab */}
        <TabsContent value="quizzes" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {quizzes.map((quiz) => (
              <Card key={quiz.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <CardDescription>{quiz.questions} questions • {quiz.duration}</CardDescription>
                    </div>
                    <Badge variant={quiz.difficulty === 'Easy' ? 'default' : quiz.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                      {quiz.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <form action="/api/school/quiz/start" method="POST">
                    <input type="hidden" name="quizId" value={quiz.id} />
                    <Button className="w-full gap-2">
                      <Play className="h-4 w-4" /> Start Quiz
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Certificates Tab */}
        <TabsContent value="certificates" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {courses.slice(0, 2).map((course) => (
              <Card key={course.id}>
                <CardContent className="p-6 text-center">
                  <Award className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Completed on Jan 15, 2024</p>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Course Feedback Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Course Feedback</CardTitle>
          <CardDescription>Share your thoughts about your learning experience</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/api/school/feedback" method="POST" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="feedbackName">Name</Label>
                <Input id="feedbackName" name="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedbackCourse">Course</Label>
                <select name="courseId" id="feedbackCourse" className="w-full border rounded-md p-2">
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedbackRating">Rating</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Button key={i} type="button" variant="outline" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedbackComment">Your Feedback</Label>
              <Textarea 
                id="feedbackComment" 
                name="comment" 
                placeholder="Share your experience..."
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit">Submit Feedback</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
