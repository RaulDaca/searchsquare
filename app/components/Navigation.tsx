'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Users, Globe, Database, Mail, CheckCircle, ShieldCheck, UserCheck } from 'lucide-react'

interface NavItem {
  title: string;
  items: Array<{
    name: string;
    icon: React.ElementType;
    color: string;
  }>;
}

const navItems: NavItem[] = [
  {
    title: "Products",
    items: [
      { name: "Outreach", icon: Users, color: "text-blue-500" },
      { name: "Website Visitors", icon: Globe, color: "text-red-500" },
      { name: "Lead Database", icon: Database, color: "text-green-500" },
      { name: "Email Accounts", icon: Mail, color: "text-blue-500" },
      { name: "Deliverability", icon: CheckCircle, color: "text-red-500" },
      { name: "Verification", icon: ShieldCheck, color: "text-green-500" },
      { name: "CRM", icon: UserCheck, color: "text-purple-500" },
    ],
  },
  { title: "Use Cases", items: [] },
  { title: "Resources", items: [] },
]

export default function ZIndexFixedNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback((title: string) => {
    setOpenDropdown(prevDropdown => prevDropdown === title ? null : title)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prevState => !prevState)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const renderNavItems = navItems.map((item) => (
    <div key={item.title} className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold"
        onClick={() => handleToggle(item.title)}
        aria-expanded={openDropdown === item.title}
        aria-haspopup="true"
      >
        <span>{item.title}</span>
        <ChevronDown className="w-5 h-5" aria-hidden="true" />
      </button>
      {openDropdown === item.title && item.items.length > 0 && (
        <div 
          className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby={`${item.title}-menu`}>
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                href="#"
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                role="menuitem"
              >
                <subItem.icon className={`w-5 h-5 mr-3 ${subItem.color}`} />
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  ))

  return (
    <header className="bg-black text-white py-6 px-4 md:px-8 font-sans relative z-40" style={{ fontFamily: "'Inter', sans-serif" }}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-extrabold flex items-center text-white">
          <svg className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>searchSQUARE.ai</span>
        </Link>
        
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {renderNavItems}
          <Link href="/pricing" className="text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
            Pricing
          </Link>
          <button className="text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
            Log in
          </button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg">
            GET STARTED
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg">
            SEE DEMO
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-black p-4 md:hidden z-50">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold"
                  onClick={() => handleToggle(item.title)}
                  aria-expanded={openDropdown === item.title}
                  aria-haspopup="true"
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </button>
                {openDropdown === item.title && item.items.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200"
                      >
                        <subItem.icon className={`w-5 h-5 mr-3 ${subItem.color}`} />
                        {subItem.name}
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
            <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg mt-4">
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