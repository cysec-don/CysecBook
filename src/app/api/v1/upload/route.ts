import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file')
  const content = formData.get('content')
  
  // Simulated file upload vulnerability
  return NextResponse.json({
    message: 'File uploaded (simulated)',
    filename: file ? (file as File).name : 'no file',
    content: content || 'no content',
    vulnerable: true,
    warning: 'This endpoint accepts any file type - potential security risk!'
  })
}
