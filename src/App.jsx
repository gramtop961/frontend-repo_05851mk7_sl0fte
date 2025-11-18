import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DisasterFeed from './components/DisasterFeed'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 pb-20">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Disasters</h2>
          <DisasterFeed />
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Donate Money</h3>
            <p className="text-blue-100 text-sm">Support trusted local partners on the ground.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Donate Food</h3>
            <p className="text-blue-100 text-sm">Rice, canned goods, water, baby supplies.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Donate Supplies</h3>
            <p className="text-blue-100 text-sm">Blankets, hygiene kits, power banks, clothing.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
