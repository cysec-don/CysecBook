import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    users: [
      { id: 1, username: 'admin', role: 'admin', email: 'admin@cysecbook.com' },
      { id: 2, username: 'user1', role: 'user', email: 'user1@cysecbook.com' },
      { id: 3, username: 'user2', role: 'user', email: 'user2@cysecbook.com' },
    ]
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({
    message: 'User created (simulated)',
    data: body
  })
}
