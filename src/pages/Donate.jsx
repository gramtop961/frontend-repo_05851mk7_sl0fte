import DonateForm from '../components/DonateForm'

function Donate() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Donate</h1>
      <p className="text-blue-100 mb-8">Send help in the form of money, food, or supplies.</p>
      <DonateForm />
    </div>
  )
}

export default Donate
