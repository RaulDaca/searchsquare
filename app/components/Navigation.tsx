'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

export default function UpdatedDropdownNavigationWithImage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleToggle = useCallback((title: string) => {
    setOpenDropdown(prevDropdown => prevDropdown === title ? null : title)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prevState => !prevState)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown] && !dropdownRefs.current[openDropdown]?.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const handleMouseEnter = useCallback((title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(title)
  }, [])

  const handleMouseLeave = useCallback((title: string) => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 100)
  }, [])

  const renderNavItems = navItems.map((item) => (
    <div 
      key={item.title} 
      className="relative" 
      ref={(el: HTMLDivElement | null) => {
        if (el) dropdownRefs.current[item.title] = el;
      }}
      onMouseEnter={() => handleMouseEnter(item.title)}
      onMouseLeave={() => handleMouseLeave(item.title)}
    >
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
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 flex"
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={() => handleMouseLeave(item.title)}
        >
          <div className="w-1/2 py-4" role="menu" aria-orientation="vertical" aria-labelledby={`${item.title}-menu`}>
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                href="#"
                className="flex items-center px-6 py-4 text-base text-gray-700 hover:bg-gray-100 transition-colors duration-200 font-bold"
                role="menuitem"
              >
                <subItem.icon className={`w-8 h-8 mr-4 ${subItem.color}`} />
                {subItem.name}
              </Link>
            ))}
          </div>
          <div className="w-1/2 bg-gray-50 p-6 rounded-r-md flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-2 text-black">Find & Close Your Ideal Clients</h3>
                <p className="text-gray-600 mb-4">
                  Instantly turns leads into clients with Automated Outreach, Deliverability Network, Lead Database & CRM
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-200 text-base font-semibold shadow-md hover:shadow-lg">
                  BOOK A DEMO
                </button>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/IMG_1366-Photoroom.png"
                  alt="Product illustration"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
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
          <span>searchSQUARE</span>
        </Link>
        
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <div className="hidden md:flex items-center justify-between flex-grow ml-8">
          <div className="flex items-center space-x-8 mx-auto">
            {renderNavItems}
            <Link href="/pricing" className="text-white hover:text-purple-400 transition-colors duration-200 text-lg font-semibold">
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
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
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#1c1c1c] p-4 md:hidden z-50">
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