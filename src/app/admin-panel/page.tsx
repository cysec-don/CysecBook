export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">CysecBook Admin Panel</h1>
      <p className="text-gray-400">Unauthorized access is prohibited.</p>
      <form className="mt-8 space-y-4 max-w-md">
        <input
          type="text"
          name="username"
          placeholder="Admin Username"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  )
}
