export default function StagingPage() {
  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <div className="flex items-center">
            <div className="text-yellow-500 text-2xl mr-3">⚠️</div>
            <div>
              <p className="font-bold text-yellow-700">Staging Environment</p>
              <p className="text-yellow-600">This is a staging environment. Do not use production credentials.</p>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">CysecBook Staging</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Environment Configuration</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`STAGING_ENV=true
API_URL=https://staging-api.cysecbook.com
DATABASE_URL=postgresql://staging:staging123@staging-db.cysecbook.com:5432/cysecbook_staging
REDIS_URL=redis://staging-redis.cysecbook.com:6379
JWT_SECRET=staging_jwt_secret_key_not_for_production
DEBUG_MODE=true`}
          </pre>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Test Users</h3>
            <ul className="text-sm space-y-1">
              <li>admin@test.com / admin123</li>
              <li>user@test.com / user123</li>
              <li>moderator@test.com / mod123</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Debug Endpoints</h3>
            <ul className="text-sm space-y-1 text-blue-600">
              <li>/api/v1/debug</li>
              <li>/api/v1/config</li>
              <li>/api/v1/secrets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
