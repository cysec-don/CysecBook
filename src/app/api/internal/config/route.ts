import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE_URL: 'postgresql://user:password@db.cysecbook.internal:5432/cysecbook',
      REDIS_URL: 'redis://:password@redis.cysecbook.internal:6379',
      JWT_SECRET: 'super_secret_jwt_key_do_not_share',
      API_KEY: 'sk_live_FAKE_API_KEY_FOR_SECURITY_TESTING'
    }
  })
}
