export default function DebugPage() {
  const debugInfo = {
    environment: process.env.NODE_ENV,
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    features: {
      auth: true,
      analytics: true,
      logging: true,
      debugMode: true
    },
    database: {
      host: 'db.cysecbook.internal',
      port: 5432,
      name: 'cysecbook_debug',
      pool: 10
    },
    services: {
      redis: 'redis.cysecbook.internal:6379',
      storage: 's3://cysecbook-debug',
      email: 'smtp.debug.cysecbook.com'
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4 text-red-500">⚠️ Debug Mode Enabled</h1>
      <pre className="bg-gray-800 p-4 rounded overflow-auto">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Debug Endpoints</h2>
        <ul className="space-y-2 text-gray-400">
          <li>GET /api/debug/headers - Show request headers</li>
          <li>GET /api/debug/env - Show environment variables</li>
          <li>GET /api/debug/session - Show session data</li>
          <li>GET /api/debug/cookies - Show cookies</li>
          <li>POST /api/debug/eval - Execute code (DANGEROUS)</li>
        </ul>
      </div>
    </div>
  )
}
