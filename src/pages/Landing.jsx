import Hero from '../components/Hero'

function Landing() {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Transparent</h3>
            <p className="text-blue-100 text-sm">Efforts are coordinated with local partners and barangays.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Community-first</h3>
            <p className="text-blue-100 text-sm">We prioritize needs of the most affected families.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Fast Response</h3>
            <p className="text-blue-100 text-sm">Mobilize donations and volunteers quickly where needed most.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Landing
