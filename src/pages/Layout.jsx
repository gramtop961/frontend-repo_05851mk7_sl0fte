import Navbar from '../components/Navbar'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
