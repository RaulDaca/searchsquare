'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navItems = [
  {
    title: "Products",
    items: ["Item 1", "Item 2", "Item 3"],
  },
  {
    title: "Use Cases",
    items: ["Case 1", "Case 2", "Case 3"],
  },
  {
    title: "Resources",
    items: ["Resource 1", "Resource 2", "Resource 3"],
  },
]

export default function UpdatedNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  return (
    <header className="bg-black text-white py-6 px-8 font-sans">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold flex items-center text-purple-500" style={{ fontFamily: "'Russo One', sans-serif" }}>
          <svg className="w-10 h-10 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" fill="currentColor"/>
          </svg>
          searchSQUARE.ai
        </Link>
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors duration-200 text-base font-medium"
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
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" className="text-white hover:text-purple-400 transition-colors duration-200 text-base font-medium">
            Pricing
          </Link>
          <button className="text-white hover:text-purple-400 transition-colors duration-200 text-base font-medium">
            Log in
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 text-base font-medium">
            GET STARTED
          </button>
          <button className="border border-white bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-base font-medium">
            SEE DEMO
          </button>
        </div>
      </nav>
    </header>
  )
}