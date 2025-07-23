'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

export default function ExplorePage() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const countries = [
    { name: 'United States', code: 'us', visaTypes: ['Tourist', 'Business', 'Student'] },
    { name: 'Canada', code: 'ca', visaTypes: ['Visitor', 'Work', 'Express Entry'] },
    { name: 'United Kingdom', code: 'gb', visaTypes: ['Standard Visitor', 'Skilled Worker'] },
    { name: 'Australia', code: 'au', visaTypes: ['Visitor', 'Work Holiday'] },
    { name: 'Japan', code: 'jp', visaTypes: ['Tourist', 'Business'] },
    { name: 'Germany', code: 'de', visaTypes: ['Schengen Visa', 'Work'] },
    { name: 'France', code: 'fr', visaTypes: ['Schengen Visa', 'Student'] },
    { name: 'Italy', code: 'it', visaTypes: ['Schengen Visa', 'Tourist'] },
    { name: 'Netherlands', code: 'nl', visaTypes: ['Schengen Visa', 'Startup Visa'] },
    { name: 'South Korea', code: 'kr', visaTypes: ['Tourist', 'Working Holiday'] },
    { name: 'Brazil', code: 'br', visaTypes: ['Tourist', 'Business'] },
    { name: 'Mexico', code: 'mx', visaTypes: ['Tourist', 'Work'] },
    { name: 'India', code: 'in', visaTypes: ['e-Tourist', 'Business', 'Medical'] },
    { name: 'China', code: 'cn', visaTypes: ['Tourist', 'Business', 'Work'] },
    { name: 'South Africa', code: 'za', visaTypes: ['Visitor', 'Work'] },
    { name: 'Schengen Area', code: 'eu', visaTypes: ['Schengen Visa'] },
  ]

  const filteredCountries = useMemo(() => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  const handleSelectCountry = (country: string) => {
    const slug = country.toLowerCase().replace(/\s+/g, '-')
    router.push(`/visa/${slug}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <nav className="w-full bg-white shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-600 cursor-pointer" onClick={() => router.push('/')}>
            Visatile
          </div>
          <button
            onClick={() => router.push('/recommend')}
            className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Recommendation Tool
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-5xl">
            Where would you like to go?
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Select a destination to see visa requirements and begin your application
          </p>
        </div>

        {/* Sticky Search */}
        <div className="sticky top-20 z-20 bg-gray-50 py-4">
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Country Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.map((country) => (
            <motion.div
              key={country.code}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-10 h-7 rounded object-cover border border-gray-200"
                  />
                  <div className="ml-4 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{country.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {country.visaTypes.map((type) => (
                        <span
                          key={type}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => handleSelectCountry(country.name)}
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    View Requirements
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendation Section */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-medium text-gray-900">Not sure where to start?</h3>
          <p className="mt-2 text-sm text-gray-500">
            Take our 2-minute questionnaire to find the best visa options for you
          </p>
          <button
            onClick={() => router.push('/recommend')}
            className="mt-3 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Visa Recommendation Tool
          </button>
        </div>
      </div>
    </div>
  )
}
