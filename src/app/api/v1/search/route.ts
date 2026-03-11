import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  
  // Simulated SQL injection vulnerability
  const sqlQuery = `SELECT * FROM posts WHERE title LIKE '%${query}%' OR content LIKE '%${query}%'`
  
  const posts = [
    { id: 1, title: 'SQL Injection Basics', content: 'Learn about SQL injection...' },
    { id: 2, title: 'XSS Prevention', content: 'Cross-site scripting prevention...' },
    { id: 3, title: 'CSRF Attacks', content: 'Understanding CSRF attacks...' },
  ]
  
  if (query && (query.includes("'") || query.includes("OR") || query.includes("UNION"))) {
    return NextResponse.json({
      message: 'Potential SQL Injection detected!',
      query: sqlQuery,
      posts: posts,
      vulnerable: true
    })
  }
  
  return NextResponse.json({
    query: sqlQuery,
    results: query ? posts.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.content.toLowerCase().includes(query.toLowerCase())
    ) : posts
  })
}
