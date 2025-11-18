import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function VolunteerForm() {
  const [form, setForm] = useState({})
  const [status, setStatus] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const payload = { ...form, skills: form.skills ? form.skills.split(',').map(s => s.trim()) : undefined }
      const res = await fetch(`${API_BASE}/api/volunteers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('thanks')
        setForm({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required name="name" placeholder="Full name" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} value={form.name||''} />
        <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} value={form.email||''} />
      </div>
      <input name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} value={form.phone||''} />
      <input name="skills" placeholder="Skills (comma separated)" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} value={form.skills||''} />
      <input name="availability" placeholder="Availability" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} value={form.availability||''} />
      <input name="location" placeholder="Preferred location" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} value={form.location||''} />
      <button className="px-6 py-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-semibold" disabled={status==='sending'}>
        {status==='sending' ? 'Submitting...' : 'Join Bayanihan'}
      </button>
      {status==='thanks' && <p className="text-green-300">Salamat! We'll reach out with next steps.</p>}
      {status==='error' && <p className="text-red-300">Something went wrong. Please try again.</p>}
    </form>
  )
}

export default VolunteerForm
