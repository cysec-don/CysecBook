export default function PhpMyAdmin() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="bg-blue-900 text-white p-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">phpMyAdmin</span>
            <span className="text-sm opacity-75">Demo / Simulation</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>Dashboard</span>
            <span>Databases</span>
            <span>SQL</span>
            <span>Status</span>
            <span>User accounts</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-4 flex gap-4">
        <div className="w-64 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Databases</h3>
          <ul className="text-sm space-y-1">
            <li className="text-blue-600 cursor-pointer">📁 cysecbook_production</li>
            <li className="text-blue-600 cursor-pointer">📁 cysecbook_staging</li>
            <li className="text-blue-600 cursor-pointer">📁 users</li>
            <li className="text-blue-600 cursor-pointer">📁 sessions</li>
            <li className="text-blue-600 cursor-pointer">📁 logs</li>
          </ul>
        </div>
        
        <div className="flex-1 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-4">Login</h3>
          <form action="/api/database/login" method="POST" className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input type="text" name="username" className="w-full border rounded p-2" defaultValue="root" />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input type="password" name="password" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Server</label>
              <input type="text" name="server" className="w-full border rounded p-2" defaultValue="localhost" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Go</button>
          </form>
        </div>
      </div>
    </div>
  )
}
