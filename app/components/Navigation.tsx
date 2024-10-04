import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Navigation() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/IMG_1395-Photoroom.png"
            alt="Searchsquare Logo"
            width={400}
            height={133}
            className="object-contain w-64 md:w-80 lg:w-96"
          />
        </Link>
        <div className="flex items-center justify-between flex-grow ml-8">
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
        </div>
      </div>
    </div>
  )
}