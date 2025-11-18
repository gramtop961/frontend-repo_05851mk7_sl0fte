import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.25),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-6">
          Unite for Relief. Act with Compassion.
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
          See current disasters and rally help through food, supplies, or monetary support. Join Bayanihan as a good samaritan and make a real impact.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/donate" className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow">
            Give Support
          </Link>
          <Link to="/help" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold">
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
