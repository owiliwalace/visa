'use client'

import { GlobeAltIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function ApplicationTracker() {
  const applications = [
    {
      id: 'VS-2023-05678',
      country: 'United States',
      type: 'Tourist Visa',
      status: 'Under Review',
      date: 'May 15, 2023',
      progress: 60
    },
    {
      id: 'VS-2023-04532',
      country: 'Canada',
      type: 'Visitor Visa',
      status: 'Approved',
      date: 'Apr 28, 2023',
      progress: 100
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Your Visa Applications
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Track the status of your current and past applications.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {applications.map((app) => (
            <li key={app.id} className="px-6 py-5">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-indigo-600 truncate">{app.id}</p>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full 
                  ${app.status === 'Approved' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'}`}>
                  {app.status}
                </span>
              </div>

              <div className="mt-2 sm:flex sm:justify-between">
                <p className="flex items-center text-sm text-gray-500">
                  <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-1.5" />
                  {app.country} - {app.type}
                </p>
                <p className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-1.5" />
                  Applied on {app.date}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Application Progress</span>
                  <span>{app.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full 
                      ${app.progress === 100 ? 'bg-green-600' : 'bg-indigo-600'}`}
                    style={{ width: `${app.progress}%` }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Status Legend */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Application Status Guide</h3>
        </div>
        <div className="px-6 py-6 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="flex items-center text-sm font-medium text-gray-600">
              <span className="h-3 w-3 bg-gray-400 rounded-full mr-2" />
              Received
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              We’ve received your application and documents.
            </dd>
          </div>
          <div>
            <dt className="flex items-center text-sm font-medium text-gray-600">
              <span className="h-3 w-3 bg-yellow-400 rounded-full mr-2" />
              Under Review
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              Your application is being processed.
            </dd>
          </div>
          <div>
            <dt className="flex items-center text-sm font-medium text-gray-600">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2" />
              Decision Made
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              Final decision has been reached.
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
