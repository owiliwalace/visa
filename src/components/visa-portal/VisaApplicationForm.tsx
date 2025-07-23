'use client'
import { useState } from 'react'
import Head from 'next/head'
import {
  NavBar,
  ExploreCountries,
  VisaApplicationForm,
  DocumentUploadCenter,
  ApplicationTracker,
  Footer
} from '@/components/visa-porta'

export default function VisaApplicationPortal() {
  const [activeTab, setActiveTab] = useState('explore')
  const [selectedCountry, setSelectedCountry] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Global Visa Portal | Seamless Visa Applications</title>
        <meta name="description" content="Apply for visas worldwide with our modern platform" />
      </Head>

      <NavBar activeTab={activeTab} />

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

      <Footer />
    </div>
  )
}