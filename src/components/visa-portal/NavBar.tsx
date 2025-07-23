'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function NavBar({ activeTab }: { activeTab?: string }) {
  const router = useRouter()
  
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <span className="ml-2 text-xl font-bold text-indigo-600">GlobalVisa</span>
          </motion.div>
        </div>

        <div className="hidden md:ml-6 md:flex md:space-x-8">
          {['explore', 'application', 'documents', 'status'].map((tab) => (
            <button
              key={tab}
              onClick={() => router.push(`/${tab === 'explore' ? '' : tab}`)}
              className={`${activeTab === tab ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium capitalize`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/recommend')}
            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Recommendation Tool
          </button>
          <UserProfileDropdown />
        </div>
      </div>
    </nav>
  )
}