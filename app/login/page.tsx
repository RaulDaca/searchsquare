'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col items-center justify-start pt-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 180% 100% at 50% 0%, #000000 0%, #000000 55%, transparent 72%),
              radial-gradient(circle at 0% 30%, #0000ff 0%, transparent 50%),
              radial-gradient(circle at 100% 30%, #800080 0%, transparent 50%),
              linear-gradient(to right, #0000ff, #800080)
            `,
            backgroundBlendMode: 'normal, screen, screen, normal',
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, #ffffff 100%)',
          }}
        />
        <div className="bg-white p-8 rounded-lg shadow-xl w-96 z-10">
          <h1 className={`text-2xl font-bold mb-6 text-center text-black ${inter.className}`}>
            Login
          </h1>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ${inter.className}`}
            >
              Anmelden
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            <span className="text-gray-600">Du hast noch kein Konto?</span>{' '}
            <Link href="/register" className="text-green-500 hover:underline">
              Registrieren
            </Link>
          </p>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ODER</span>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Mit Google fortsetzen
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
              </svg>
              Mit Microsoft-Konto fortsetzen
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 456.008 560.035" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"
                  fill="#000000"
                />
              </svg>
              Mit Apple fortsetzen
            </button>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500">
            <Link href="/terms" className="hover:underline">
              Nutzungsbedingungen
            </Link>
            {' | '}
            <Link href="/privacy" className="hover:underline">
              Datenschutzrichtlinie
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}