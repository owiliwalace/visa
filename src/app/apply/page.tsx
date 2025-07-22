'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ExplorePage() {
  const router = useRouter()

  const handleSelectCountry = (country: string) => {
    // Convert to slug or use country code if needed
    const slug = country.toLowerCase().replace(/\s+/g, '-')
    router.push(`/visa/${slug}`)
  }

  const countries = [
    { name: 'United States', code: 'US', visaTypes: ['Tourist', 'Business', 'Student'] },
    { name: 'Canada', code: 'CA', visaTypes: ['Visitor', 'Work', 'Express Entry'] },
    { name: 'United Kingdom', code: 'UK', visaTypes: ['Standard Visitor', 'Skilled Worker'] },
    { name: 'Australia', code: 'AU', visaTypes: ['Visitor', 'Work Holiday'] },
    { name: 'Japan', code: 'JP', visaTypes: ['Tourist', 'Business'] },
    { name: 'Schengen Area', code: 'EU', visaTypes: ['Schengen Visa'] },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          Where would you like to go?
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Select a destination to see visa requirements and begin your application
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <motion.div
            key={country.code}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-white overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3 text-white font-bold">
                  {country.code}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{country.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {country.visaTypes.map((type) => (
                      <span key={type} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
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

      <div className="mt-16 text-center">
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
  )
}
