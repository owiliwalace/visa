"use client"
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"

export default function VisaApplicationPortal() {
  const [activeTab, setActiveTab] = useState('explore')
  const [selectedCountry, setSelectedCountry] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      

      {/* Animated Navigation */}
      <nav className="bg-white shadow-lg  sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex-shrink-0 flex items-center"
              >
                <Image
                                           src="/assets/logo.png"
                                           alt="Passport Photo"
                                           width={50}
                                           height={50}
                                           className="object-cover"
                                         />
                <span className="ml-2 text-xl font-bold text-gray-900">Visatile</span>
              </motion.div>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {['explore', 'application', 'documents', 'status'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${activeTab === tab ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium capitalize`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <UserProfileDropdown />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {activeTab === 'explore' && (
          <ExploreCountries 
            onSelectCountry={(country) => {
              setSelectedCountry(country)
              setActiveTab('application')
            }} 
          />
        )}

        {activeTab === 'application' && selectedCountry && (
          <VisaApplicationForm 
            country={selectedCountry}
            onBack={() => setActiveTab('explore')}
          />
        )}

        {activeTab === 'documents' && <DocumentUploadCenter />}
        {activeTab === 'status' && <ApplicationTracker />}
      </main>

    
    </div>
  )
}

// Component 1: Explore Visa Options
function ExploreCountries({ onSelectCountry }: { onSelectCountry: (country: string) => void }) {
  const   countries = [
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
      country.name.toLowerCase()
    )
  }, [countries])
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Where would you like to go?
        </h1>
        <p className="mt-3 max-w-xl mx-auto text-xl text-gray-500">
          Select a destination to see visa requirements and begin your application
        </p>
      </div>
       <div className="sticky top-20 z-20  py-4">
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              
              placeholder="Search countries..."
              className="w-full px-4 bg-white py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
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
                                    onClick={() => onSelectCountry(country.name)}

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
        <button className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Visa Recommendation Tool
        </button>
      </div>
    </div>
  )
}

// Component 2: Visa Application Form
function VisaApplicationForm({ country, onBack }: { country: string, onBack: () => void }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    visaType: '',
    personalInfo: {},
    travelDetails: {},
    documents: []
  })

  const handleNext = () => setStep(step + 1)
  const handleBack = () => step > 1 ? setStep(step - 1) : onBack()

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back
          </button>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {country} Visa Application
          </h3>
          <div className="text-sm text-gray-500">
            Step {step} of 4
          </div>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>
      </div>

      <div className="px-4 py-5 sm:p-6">
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-md font-medium text-gray-900">Visa Type Selection</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {['Tourist', 'Business', 'Student', 'Work'].map((type) => (
                <label key={type} className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="visa-type" className="sr-only" />
                  <div className="flex-1 flex">
                    <div className="flex flex-col">
                      <span className="block text-sm font-medium text-gray-900">{type} Visa</span>
                      <span className="mt-1 flex items-center text-sm text-gray-500">
                        {type === 'Tourist' && 'For tourism and visiting'}
                        {type === 'Business' && 'For business meetings'}
                        {type === 'Student' && 'For educational purposes'}
                        {type === 'Work' && 'For employment'}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3 absolute top-4 right-4 h-5 w-5 text-indigo-600" aria-hidden="true">
                    <svg className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h4 className="text-md font-medium text-gray-900">Personal Information</h4>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Nationality
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="date-of-birth" className="block text-sm font-medium text-gray-700">
                  Date of birth
                </label>
                <input
                  type="date"
                  name="date-of-birth"
                  id="date-of-birth"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="passport-number" className="block text-sm font-medium text-gray-700">
                  Passport number
                </label>
                <input
                  type="text"
                  name="passport-number"
                  id="passport-number"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="passport-expiry" className="block text-sm font-medium text-gray-700">
                  Passport expiry
                </label>
                <input
                  type="date"
                  name="passport-expiry"
                  id="passport-expiry"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h4 className="text-md font-medium text-gray-900">Travel Details</h4>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="arrival-date" className="block text-sm font-medium text-gray-700">
                  Intended arrival date
                </label>
                <input
                  type="date"
                  name="arrival-date"
                  id="arrival-date"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700">
                  Intended departure date
                </label>
                <input
                  type="date"
                  name="departure-date"
                  id="departure-date"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                  Purpose of visit
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700">
                  Accommodation details
                </label>
                <input
                  type="text"
                  name="accommodation"
                  id="accommodation"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Hotel name, friend's address, etc."
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h4 className="text-md font-medium text-gray-900">Review & Submit</h4>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Please review all information carefully before submitting. Incorrect information may delay your application.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Application Summary
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Visa Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Tourist Visa
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Full Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      John Doe
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Nationality
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      United States
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Passport Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      123456789
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Travel Dates
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Jul 15, 2025 - Oct 30, 2025
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Purpose of Visit
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Tourism and visiting family members
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms-and-conditions"
                name="terms-and-conditions"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms-and-conditions" className="ml-2 block text-sm text-gray-900">
                I certify that the information provided is accurate and complete
              </label>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back
          </button>
          <button
            onClick={step < 4 ? handleNext : () => alert('Application submitted!')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {step < 4 ? 'Continue' : 'Submit Application'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Component 3: Document Upload Center
function DocumentUploadCenter() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Document Upload Center
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Upload all required documents for your visa application
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="space-y-8">
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Required Documents</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['Passport Copy', 'Photograph', 'Financial Proof', 'Travel Itinerary', 'Hotel Booking', 'Invitation Letter'].map((doc) => (
                <div key={doc} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <DocumentIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{doc}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    {doc === 'Passport Copy' && 'Clear scan of passport bio page'}
                    {doc === 'Photograph' && 'Passport-sized photo, white background'}
                    {doc === 'Financial Proof' && 'Bank statements or sponsor letter'}
                    {doc === 'Travel Itinerary' && 'Flight reservations'}
                    {doc === 'Hotel Booking' && 'Accommodation confirmation'}
                    {doc === 'Invitation Letter' && 'If visiting family/friends'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium text-gray-900 mb-4">Upload Documents</h4>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, JPG, PNG up to 10MB
                </p>
              </div>
            </div>
          </div>

          {uploadedFiles.length > 0 && (
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Uploaded Documents</h4>
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {uploadedFiles.map((file, index) => (
                  <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => removeFile(index)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Documents
          </button>
        </div>
      </div>
    </div>
  )
}

// Component 4: Application Tracker
function ApplicationTracker() {
  const applications = [
    {
      id: 'VS-2025-05678',
      country: 'United States',
      type: 'Tourist Visa',
      status: 'Under Review',
      date: 'May 15, 2025',
      progress: 60
    },
    {
      id: 'VS-2025-04532',
      country: 'Canada',
      type: 'Visitor Visa',
      status: 'Approved',
      date: 'Apr 28, 2025',
      progress: 100
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Your Visa Applications
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Track the status of your current and past applications
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {applications.map((app) => (
            <li key={app.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {app.id}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${app.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {app.status}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <GlobeAltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {app.country} - {app.type}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    Applied on {app.date}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Application Progress</span>
                    <span>{app.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${app.progress === 100 ? 'bg-green-600' : 'bg-indigo-600'}`} 
                      style={{ width: `${app.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Application Status Guide
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <span className="flex h-3 w-3 rounded-full bg-gray-400 mr-2"></span>
                Received
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                We ve received your application and documents
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <span className="flex h-3 w-3 rounded-full bg-yellow-400 mr-2"></span>
                Under Review
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Your application is being processed
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <span className="flex h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                Decision Made
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Final decision has been reached
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function UserProfileDropdown() {
  return (
    <div className="ml-3 relative">
      <div>
        <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}



// Icons (you would import these from your icon library)
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function FlagIcon({ countryCode }: { countryCode: string }) {
  // In a real app, you would use proper flag icons
  return (
    <span className="text-white text-xs font-bold">{countryCode}</span>
  )
}

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function PaperClipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
  )
}

function InformationCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function GlobeAltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}