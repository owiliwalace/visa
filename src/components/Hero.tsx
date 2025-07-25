'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

import { VisaCard } from "./VisaCard"
import { countries, CountryVisa } from "@/lib/countries"
import { CountrySelector } from "./CountrySelector"
import EVisaForm from "./EVisaForm"

export function Hero() {
  const router = useRouter()
  const [selected, setSelected] = useState<CountryVisa>(countries[0])
  const [planePositions, setPlanePositions] = useState([
    { id: 1, x: -100, y: 20, speed: 1 },
    { id: 2, x: -200, y: 40, speed: 1.5 },
    { id: 3, x: -300, y: 60, speed: 0.8 },
  ])

  useEffect(() => {
    const fly = () => {
      setPlanePositions(prev =>
        prev.map(plane => {
          let newX = plane.x + plane.speed
          if (newX > window.innerWidth + 100) {
            newX = -150 - Math.random() * 100
          }
          return { ...plane, x: newX }
        })
      )
    }

    const interval = setInterval(fly, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 overflow-x-hidden relative">
      {/* Navbar */}
      <nav className="z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="object-cover"
              />
              <span className="ml-2 text-xl font-bold text-purple-500">Visatile</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {[
                { label: "Apply Now", href: "/application-form" },
                { label: "Check Requirements", href: "/requirements" },
                { label: "Sign In", href: "/apply" }
              ].map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => router.push(btn.href)}
                  className="px-4 py-2 text-sm font-medium rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700 transition"
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 blur-sm scale-110" />
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse" />
        <div className="absolute w-80 h-80 bg-blue-300 rounded-full blur-2xl opacity-20 top-1/2 left-2/3 animate-pulse" />

        {/* Flying planes */}
        {planePositions.map(plane => (
          <motion.div
            key={plane.id}
            className="absolute"
            style={{
              left: plane.x,
              top: `${plane.y}%`,
              transform: `rotateZ(90deg) translateZ(${plane.id * 50}px)`,
              rotate:90
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + plane.id,
              ease: "easeInOut"
            }}
          >
            <PlaneIcon className="h-12 w-12 text-blue-400 opacity-70 drop-shadow-xl" />
          </motion.div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Main Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 min-h-[calc(100vh-4rem)]">
        {/* Left Side */}
        <div className="w-[90%] md:w-1/2 pr-0 md:pr-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-purple-600 leading-tight"
          >
            Visatile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg text-gray-700 mt-1"
          >
            Hassle-free visa applications with instant document generation. No more paperwork stress.
          </motion.p>
          <div className="mt-1 mb-4">
            <EVisaForm />
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <motion.div
            className="relative md:w-[500px] h-[350px]"
            initial={{ rotateY: 15, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <VisaCard country={""}  />
          </motion.div>

          
        </motion.div>
      </section>
    </div>
  )
}

// Plane Icon SVG
function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-airplane" viewBox="0 0 24 24" {...props}>
      <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"/>
    </svg>
  )
}
