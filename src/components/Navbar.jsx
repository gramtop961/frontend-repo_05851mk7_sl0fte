import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-blue-100 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="logo" className="w-7 h-7" />
            <span className="text-white font-semibold">Bayanihan Relief</span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/home" className={linkClass}>Home</NavLink>
            <NavLink to="/help" className={linkClass}>Help</NavLink>
            <NavLink to="/donate" className={linkClass}>Donate</NavLink>
            <NavLink to="/history" className={linkClass}>History</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
