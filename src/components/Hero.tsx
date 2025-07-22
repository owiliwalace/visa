'use client'
import { VisaCard } from "./VisaCard"
import { countries, CountryVisa } from "@/lib/countries"
import { CountrySelector } from "./CountrySelector"
import { useState } from "react"
//import Image from "next/image"

export function Hero() {
  const [selected, setSelected] = useState<CountryVisa>(countries[0])

  return (
    <section className="min-h-screen flex flex-row items-center justify-center bg-slate-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-4">How Your Visa Will Look</h1>
      <CountrySelector selected={selected} setSelected={setSelected} />

      <div className="relative mt-10 w-[500px] h-[350px]">
        <div className="absolute inset-0 rounded-xl bg-white shadow-lg" />
        <VisaCard country={""}   />
      </div>
    </section>
  )
}
