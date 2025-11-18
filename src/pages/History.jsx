import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function History() {
  const [donations, setDonations] = useState([])
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const d = await fetch(`${API_BASE}/api/donations`).then(r=>r.json())
        const v = await fetch(`${API_BASE}/api/volunteers`).then(r=>r.json())
        setDonations(d)
        setVolunteers(v)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">History</h1>
      <p className="text-blue-100 mb-8">Recent donations and volunteer sign-ups.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Donations</h2>
          <div className="space-y-3">
            {donations.length === 0 && <p className="text-blue-200">No donations yet.</p>}
            {donations.map((d) => (
              <div key={d.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-medium">{d.name} • <span className="capitalize">{d.type}</span></p>
                {d.amount && <p className="text-blue-200 text-sm">Amount: ${d.amount}</p>}
                {d.items && <p className="text-blue-200 text-sm">Items: {d.items}</p>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Volunteers</h2>
          <div className="space-y-3">
            {volunteers.length === 0 && <p className="text-blue-200">No volunteers yet.</p>}
            {volunteers.map((v) => (
              <div key={v.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-medium">{v.name} • {v.location || 'N/A'}</p>
                {v.skills && v.skills.length > 0 && (
                  <p className="text-blue-200 text-sm">Skills: {v.skills.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default History
