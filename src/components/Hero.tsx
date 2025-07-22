'use client'
import { VisaCard } from "./VisaCard"
import { countries, CountryVisa } from "@/lib/countries"
import { CountrySelector } from "./CountrySelector"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"


export function Hero() {
  const [selected, setSelected] = useState<CountryVisa>(countries[0])
  const router = useRouter()
  const [planePositions, setPlanePositions] = useState([
    { id: 1, x: -100, y: 20, speed: 1 },
    { id: 2, x: -200, y: 40, speed: 1.5 },
    { id: 3, x: -300, y: 60, speed: 0.8 }
  ])

  useEffect(() => {
    const fly = () => {
      setPlanePositions(prev => 
        prev.map(plane => {
          let newX = plane.x + plane.speed
          if (newX > window.innerWidth + 100) {
            newX = -100
          }
          return { ...plane, x: newX }
        })
      )
    }
    
    const interval = setInterval(fly, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                           src="/assets/logo.png"
                           alt="Passport Photo"
                           width={80}
                           height={80}
                           className="object-cover"
                         />
                <span className="ml-2 text-xl font-bold text-gray-900">Visatile</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Countries
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Requirements
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact
              </a>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/apply')}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-90"></div>
        {planePositions.map((plane) => (
          <motion.div 
            key={plane.id}
            className="absolute"
            style={{ 
              left: plane.x,
              top: `${plane.y}%`,
              rotate: 90
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 + plane.id, 
              ease: "easeInOut" 
            }}
          >
            <PlaneIcon className="h-12 w-12 text-blue-400 opacity-70" />
          </motion.div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-row items-center justify-between p-6 z-10 max-w-7xl mx-auto">
        {/* Left Side - Hero Content */}
        <div className="w-1/2 pr-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-purple-400 mb-4 text-left"
          >
            Visatile
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 text-left"
          >
            Check requirements for your destination country before starting your application.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <button 
              onClick={() => document.getElementById('visa-preview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-lg transform hover:scale-105 transition-transform"
            >
              Apply Now
            </button>
            <button 
              onClick={() => router.push('/requirements')}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 shadow-lg transform hover:scale-105 transition-transform"
            >
              Check Requirements
            </button>
          </motion.div>
        </div>

        {/* Right Side - Visa Preview */}
        <motion.div 
          id="visa-preview"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2"
        >
          <div className="relative w-[500px] h-[350px]">
            <div className="absolute inset-0  " />
            <VisaCard country={""}  />
          </div>
          <div className="mt-6">
            <CountrySelector selected={selected} setSelected={setSelected} />
          </div>
        </motion.div>
      </section>
    </div>
  )
}

// Icons
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  )
}