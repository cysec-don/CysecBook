import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  
  // VULNERABLE: Simulated SQL Injection
  const mockQuery = `SELECT * FROM users WHERE id = ${id}`
  
  const users = [
    { id: 1, username: 'admin', email: 'admin@cysecbook.com', role: 'admin', password_hash: '$2a$10$...' },
    { id: 2, username: 'john', email: 'john@cysecbook.com', role: 'user', password_hash: '$2a$10$...' },
    { id: 3, username: 'jane', email: 'jane@cysecbook.com', role: 'user', password_hash: '$2a$10$...' },
  ]
  
  if (id && (id.includes('OR') || id.includes('UNION') || id.includes("'"))) {
    return NextResponse.json({
      success: true,
      message: 'SQL Injection successful! (This is a demo)',
      query: mockQuery,
      data: users
    })
  }
  
  return NextResponse.json({
    success: true,
    query: mockQuery,
    data: id ? users.filter(u => u.id === parseInt(id)) : users
  })
}
