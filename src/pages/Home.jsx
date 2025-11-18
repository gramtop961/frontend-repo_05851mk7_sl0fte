import DisasterFeed from '../components/DisasterFeed'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <p className="text-blue-100 mb-8">Latest updates on disasters and relief efforts.</p>
      <DisasterFeed />
    </div>
  )
}

export default Home
