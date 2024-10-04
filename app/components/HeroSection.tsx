import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-tl from-purple-900 via-black to-black min-h-screen text-white relative overflow-hidden">
      {/* Navigation wurde hier entfernt */}
      <main className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Rank, Boost & Traffic 
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            AI driven SEO.
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          KI gesteuerte Suchmaschinenoptimierung für maximale Performance. Entdecken Sie die Zukunft des SEO mit Searchsquare. 
        </p>
        <Link
          href="/start-free"
          className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium inline-block mb-8"
        >
          START FOR FREE
        </Link>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Free leads included</span>
          </div>
        </div>
      </main>
      <div className="absolute bottom-0 left-1/5 transform -translate-x-1/4">
        <Image
          src="/images/IMG_1437-Photoroom.png"
          alt="Alien-like creature"
          width={500}
          height={333}
          className="object-contain"
        />
      </div>
    </div>
  )
}