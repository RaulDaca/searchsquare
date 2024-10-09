'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Paperclip, ChevronLeft, ChevronRight, BarChart2, GitBranch, FileText, Cpu, Link2, User, Plus } from 'lucide-react'
import NextLink from 'next/link'

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(64)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const sidebarItems = [
    { icon: Plus, label: 'Neuer Chat' },
    { icon: BarChart2, label: 'Marktanalyse' },
    { icon: GitBranch, label: 'Struktur Analyse' },
    { icon: FileText, label: 'Content Analyse' },
    { icon: Cpu, label: 'Technik Analyse' },
    { icon: Link2, label: 'Backlinks Analyse' },
  ]

  useEffect(() => {
    if (isSidebarOpen && sidebarRef.current) {
      const maxWidth = Math.max(...Array.from(sidebarRef.current.children).map(child => child.scrollWidth))
      setSidebarWidth(maxWidth + 32) // Add some padding
    } else {
      setSidebarWidth(64)
    }
  }, [isSidebarOpen])

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed left-0 top-0 bottom-0 transition-all duration-300 ease-in-out flex flex-col items-start py-4 border-r border-white border-opacity-10 overflow-hidden`}
        style={{
          width: `${sidebarWidth}px`,
          background: 'linear-gradient(to bottom, #000000 50%, #1a237e, #4a148c)'
        }}
      >
        <div className={`mb-8 w-full flex ${isSidebarOpen ? 'justify-center' : 'justify-end pr-3'}`}>
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {sidebarItems.map((item, index) => (
          <button 
            key={index} 
            className={`w-full h-10 flex items-center justify-start px-4 mb-4 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 ${isSidebarOpen ? 'text-left' : 'justify-center'}`}
            title={item.label}
          >
            <item.icon size={20} />
            {isSidebarOpen && (
              <span className="ml-3 text-sm whitespace-nowrap">{item.label}</span>
            )}
          </button>
        ))}
        <button 
          className="mt-auto w-full h-10 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className={`flex-grow flex flex-col min-h-screen transition-all duration-300 ease-in-out`} style={{ marginLeft: `${sidebarWidth}px` }}>
        <header className="p-4 flex justify-between items-center">
          <NextLink href="/" className="text-2xl font-bold">
            searchSQUARE
          </NextLink>
          <div className="flex items-center space-x-2">
            <span className="text-sm mr-2">Dave</span>
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <User size={20} className="text-white" />
            </button>
          </div>
        </header>
        
        <main className="flex-grow flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Sollen wir dich wieder einranken?
          </h1>
          <p className="text-gray-400 mb-8 text-center">
            generate SEO strategies, ask questions, debug, execute Content Power, and much more.
          </p>
          
          <div className="w-full max-w-2xl">
            <div className="bg-gray-900 rounded-lg p-4 flex items-center mb-4">
              <Paperclip className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Ask searchSQUARE a question..."
                className="bg-transparent flex-grow outline-none"
              />
              <button className="text-gray-400 ml-2 flex items-center">
                <Plus className="mr-1" /> Project
              </button>
              <button className="bg-white text-black rounded-full p-2 ml-2">
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                "Generate a multi-step onboarding flow",
                "How can I schedule cron jobs?",
                "Write code to implement a min heap",
              ].map((query, index) => (
                <button key={index} className="text-gray-400 hover:text-white transition-colors flex items-center">
                  {query} <ArrowRight size={14} className="ml-1" />
                </button>
              ))}
            </div>
          </div>
        </main>
        
        <footer className="p-4 text-center text-sm text-gray-500">
          {['FAQ', 'Pricing', 'Terms', 'AI Policy', 'Privacy'].map((item, index) => (
            <NextLink key={index} href="#" className="mx-2 hover:text-white transition-colors">
              {item}
            </NextLink>
          ))}
          <NextLink href="https://vercel.com" className="mx-2 hover:text-white transition-colors">
            Vercel ↗
          </NextLink>
        </footer>
      </div>
    </div>
  )
}