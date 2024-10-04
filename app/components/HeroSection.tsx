import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-tl from-purple-900 via-black to-black min-h-screen text-white relative overflow-hidden">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/IMG_1395-Photoroom.png"
            alt="Searchsquare Logo"
            width={400}
            height={133}
            className="object-contain w-64 md:w-80 lg:w-96"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-lg font-semibold">
              <span>Produkte</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-lg font-semibold">
              <span>Anwendungsfälle</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-lg font-semibold">
              <span>Ressourcen</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <Link href="/pricing" className="text-lg font-semibold">Preise</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login" className="text-lg font-semibold">
            Log in
          </Link>
          <Link
            href="/get-started"
            className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium"
          >
            GET STARTED
          </Link>
          <Link
            href="/demo"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            SEE DEMO
          </Link>
        </div>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
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