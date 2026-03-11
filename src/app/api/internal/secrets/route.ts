import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    users: [
      { id: 1, name: 'John Doe', email: 'john@cysecbook.com', role: 'admin', apiKey: 'cb_user_1_xxx' },
      { id: 2, name: 'Jane Smith', email: 'jane@cysecbook.com', role: 'user', apiKey: 'cb_user_2_yyy' },
      { id: 3, name: 'Bob Wilson', email: 'bob@cysecbook.com', role: 'user', apiKey: 'cb_user_3_zzz' },
    ],
    tokens: [
      { userId: 1, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiJ9.xxx', expires: '2024-12-31' },
      { userId: 2, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGUiOiJ1c2VyIn9.yyy', expires: '2024-12-31' },
    ],
    secrets: {
      stripeKey: 'sk_live_FAKE_STRIPE_KEY_FOR_SECURITY_TESTING',
      sendgridKey: 'SG.xxxxxxxxxxxxxxxxxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      awsKey: 'AKIAIOSFODNN7EXAMPLE',
      awsSecret: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
    }
  })
}
