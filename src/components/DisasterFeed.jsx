import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function DisasterFeed() {
  const [disasters, setDisasters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/disasters`)
        if (res.ok) {
          const data = await res.json()
          setDisasters(data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="text-blue-100">Loading current situations...</p>

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {disasters.length === 0 && (
        <div className="col-span-full text-center text-blue-100">
          No active reports yet. Be the first to add one from the Help page.
        </div>
      )}
      {disasters.map((d) => (
        <article key={d.id} className="bg-white/5 border border-white/10 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{d.title}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-200 capitalize">{d.severity}</span>
          </div>
          <p className="text-blue-100 text-sm mb-3">{d.description}</p>
          <p className="text-blue-200 text-sm">Location: {d.location}</p>
          <p className="text-blue-200 text-xs mt-2">Status: <span className="capitalize">{d.status}</span></p>
        </article>
      ))}
    </div>
  )
}

export default DisasterFeed
