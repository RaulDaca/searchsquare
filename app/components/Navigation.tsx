'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  {
    title: "Products",
    items: ["AI SEO Optimizer", "Keyword Analyzer", "Content Generator"],
  },
  {
    title: "Use Cases",
    items: ["E-commerce", "SaaS", "Local Business"],
  },
  {
    title: "Resources",
    items: ["Blog", "Webinars", "Case Studies"],
  },
]

export default function ResponsiveNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-black text-white py-6 px-4 md:px-8 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-extrabold flex items-center text-white">
          <svg className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          searchSQUARE.ai
        </Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold"
                onClick={() => handleToggle(item.title)}
              >
                <span>{item.title}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {openDropdown === item.title && (
                <div className="absolute left-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-400 hover:text-white transition-colors duration-200"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" className="text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
            Pricing
          </Link>
          <button className="text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
            Log in
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg">
            GET STARTED
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg">
            SEE DEMO
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-black p-4 md:hidden">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold"
                  onClick={() => handleToggle(item.title)}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                {openDropdown === item.title && (
                  <div className="mt-2 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/pricing" className="block py-2 text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
              Pricing
            </Link>
            <button className="block w-full text-left py-2 text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
              Log in
            </button>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg mt-4">
              GET STARTED
            </button>
            <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg mt-4">
              SEE DEMO
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}