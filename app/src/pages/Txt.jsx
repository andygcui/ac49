import { Link } from 'react-router-dom'

function Txt() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-[2rem] font-serif text-gray-900 mb-4">
              .txt
            </h1>
            
            <p className="text-gray-600 hover:text-orange-700">
            <Link to="/txt/jan26" className="block mb-3"> january </Link>
            </p>

            <p className="text-gray-600 hover:text-orange-700">
            <Link to="/txt/2025" className="block mb-3"> 2025 notes</Link>
            </p>

            <p className="text-gray-600 hover:text-orange-700">
            <Link to="/txt/dec25" className="block mb-3"> december </Link>
            </p>

            <p className="text-gray-600 hover:text-orange-700">
            <Link to="/txt/gestalt" className="block mb-3"> on gestalt </Link>
            </p>

        

          </header>
        </div>
      </div>
    </div>
  )
}

export default Txt
