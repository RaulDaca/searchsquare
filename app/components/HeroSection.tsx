import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-tl from-purple-900 via-black to-black text-white relative overflow-hidden h-[90vh]">
      <main className="container mx-auto px-4 pt-12 pb-28 md:pt-20 md:pb-36 lg:pt-24 lg:pb-44 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
            Rank, Boost & Traffic 
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              AI driven SEO.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 lg:mb-8 max-w-3xl mx-auto">
            KI gesteuerte Suchmaschinenoptimierung für maximale Performance. Entdecken Sie die Zukunft des SEO mit Searchsquare. 
          </p>
          <Link
            href="/start-free"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-medium inline-block mb-6 lg:mb-8 hover:bg-blue-700 transition-colors"
          >
            START FOR FREE
          </Link>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-blue-500"
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
              <span className="text-lg">No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-blue-500"
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
              <span className="text-lg">Free leads included</span>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 w-1/2 max-w-lg">
        <Image
          src="/images/IMG_1437-Photoroom.png"
          alt="Alien-like creature"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  )
}