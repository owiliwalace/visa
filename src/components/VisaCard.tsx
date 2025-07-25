'use client'

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

export function VisaCard({ country }: { country: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      const { width, height, left, top } = el.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      const rotateY = ((x / width) - 1) * 10
      const rotateX = ((y / height) - 1) * -10
      gsap.to(el, { rotateX, rotateY, duration: 0.4 })
    }

    const reset = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5 })
    }

    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", reset)

    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", reset)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className="w-full h-full select-none rounded-lg shadow-2xl overflow-hidden relative font-sans border-[0.3px] border-blue-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "linear-gradient(135deg, #f0f8ff 0%, #d0e4ff 100%)",
      }}
    >
      {/* ✨ Light Ray Glare */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
          className="w-[100%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-12"
          style={{
            mixBlendMode: 'overlay',
            filter: 'blur(6px)',
          }}
        />
      </div>

      {/* ✴️ Optional Dust Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.025] bg-[url('/assets/dust.png')] bg-repeat mix-blend-overlay" />

      {/* 🔵 Background Watermark */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='40' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='%23005bab'%3EUSA%3C/text%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23005bab' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px, 100px 100px",
        backgroundPosition: "center center, 0 0",
        backgroundRepeat: "no-repeat, repeat"
      }} />

      {/* Holographic Watermark */}
      {/* Visa Watermark with SVG State Shape */}
{/* Visa Holographic Watermark with SVG Path */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-50 opacity-20 pointer-events-none">
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M10,30 L20,25 L30,35 L40,30 L50,40 L60,35 L70,45 L80,40 L90,50 L85,60 L75,55 L65,65 L55,60 L45,70 L35,65 L25,75 L15,70 L5,80 L10,60 L15,50 L5,40 Z"
      fill="rgba(0,91,171,0.3)"
      stroke="rgba(0,91,171,0.5)"
      strokeWidth="0.5"
    />
  </svg>
</div>



      {/* Microprint */}
      <div className="absolute bottom-8 left-0 right-0 h-4 overflow-hidden">
        <div className="text-[4px] text-blue-900 opacity-20 whitespace-nowrap">
          UNITEDSTATESOFAMERICAUNITEDSTATESOFAMERICAUNITEDSTATESOFAMERICAUNITEDSTATESOFAMERICA
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-blue-900 text-white z-10 flex items-center justify-between px-4">
        <div className="font-bold text-xl tracking-widest">VISA</div>
        <div className="text-xl font-friz font-bold uppercase tracking-wide text-red-800">
  UNITED STATES OF AMERICA
</div>

      </div>

      {/* Issuing Post */}
      <div className="absolute top-12 left-0 right-0 h-8 bg-blue-800 text-white text-xs flex items-center px-4">
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row px-4 py-6 gap-4 mt-8">
        <div className="w-[120px] h-[140px]  overflow-hidden relative shadow-sm mt-8">
          <Image
            src="/assets/bg.png"
            alt="Passport Photo"
            width={130}
            height={140}
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-[11px] leading-tight text-black w-full font-mono relative">
          <div className="absolute z-50 -left-4 -top-4 text-[40px] font-bold text-blue-200 opacity-20">VISA</div>

          <div className="grid grid-cols-3 gap-x-3 gap-y-1 relative z-10 mt-8">
           <div>
            <p><strong className="text-blue-900">Issuing Post Name</strong> NEW YORK</p>
            <p><strong className="text-blue-900">Surname</strong> TRAVELER</p>
            <p><strong className="text-blue-900">Given Name</strong> HAPPY</p>
            </div> 
                        <p><strong className="text-blue-900">Control Number</strong> 202221666638944</p>

            <p><strong className="text-blue-900">Passport Number </strong> P632627</p>
            
            <p><strong className="text-blue-900">Date of Birth </strong> 01JAN1975</p>
            <p><strong className="text-blue-900">Nationality </strong> MOROCCAN</p>
            <p><strong className="text-blue-900">Visa Type/Class </strong> R B1/B2</p>
            <p><strong className="text-blue-900">Issue Date</strong>  15 MAY 2022</p>
            <p><strong className="text-blue-900">Expiration</strong> 15 MAY 2026</p>
            <p><strong className="text-blue-900">Entries </strong> M</p>
                        <p><strong className="text-blue-900">Sex </strong> M</p>

            <p><strong className="text-blue-900">Annotation </strong> BUSINESS/TOURISM</p>
          </div>
        </div>
      </div>

      {/* Barcode */}
      <div className="absolute bottom-12 left-0 right-0 h-16 bg-white border-t border-b border-gray-300 flex items-center justify-center">
        <div className="w-full h-10 bg-white flex items-center justify-center text-gray-500 text-xs relative">
          {/* Barcode lines (shortened for brevity) */}
          <div className="absolute inset-0 flex items-center z-20 ml-2 -mt-0">
            {[...Array(200)].map((_, i) => (
              <div key={i} className={`h-full ${i % 3 === 0 ? 'w-[2px]' : 'w-[1px]'} bg-black mr-[1px]`} />
            ))}
          </div>
        </div>
          <div className="text-[8px] absolute bottom-0 mt-7">202221666638944</div>
      </div>

      {/* MRZ */}
      <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono tracking-wider leading-tight text-black z-10">
        <div className="px-2 py-1 ">
          <div>VISATRAVELER{"<<<<<<<<<<<<<<<"}HAPPY{"<<<<<<<<<<<<<<<"}</div>
          <div>P63262{"<<<<<<<<<<<<<<<"}5MAR7501012F3205156B3C9809018{"<<<<<<<<<<<<<<<"}02</div>
        </div>
      </div>

      {/* Specimen Stamp */}
      <div className="absolute z-40 bottom-2 right-4 text-red-700 font-bold text-[14px] rotate-[-5deg] opacity-80 border-2 border-red-700 px-2 rounded bg-white/90">
        SPECIMEN
      </div>
    </motion.div>
  )
}
