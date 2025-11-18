import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function DonateForm() {
  const [form, setForm] = useState({ type: 'money' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE}/api/donations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('thanks')
        setForm({ type: 'money' })
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
        <input required name="name" placeholder="Full name" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} />
        <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} />
      </div>
      <div>
        <label className="block text-blue-100 text-sm mb-2">Type of help</label>
        <select name="type" value={form.type} onChange={onChange} className="w-full px-4 py-3 rounded bg-white/10 text-white">
          <option value="money">Money</option>
          <option value="food">Food</option>
          <option value="supplies">Supplies</option>
        </select>
      </div>
      {form.type === 'money' && (
        <input type="number" min="1" step="0.01" name="amount" placeholder="Amount (USD)" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} />
      )}
      {form.type !== 'money' && (
        <input name="items" placeholder="List items (e.g., rice, canned goods)" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} />
      )}
      <textarea name="message" placeholder="Message (optional)" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-blue-200/60" onChange={onChange} />
      <button className="px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold" disabled={status==='sending'}>
        {status==='sending' ? 'Processing...' : 'Donate'}
      </button>
      {status==='thanks' && <p className="text-green-300">Thank you for your kindness!</p>}
      {status==='error' && <p className="text-red-300">Something went wrong. Please try again.</p>}
    </form>
  )
}

export default DonateForm
