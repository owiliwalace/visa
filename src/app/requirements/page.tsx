'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

type Requirement = {
  country: string;
  code: string;
  visaTypes: {
    type: string;
    requirements: string[];
  }[];
};

const visaRequirements: Requirement[] = [
  {
    country: 'United States',
    code: 'US',
    visaTypes: [
      {
        type: 'Tourist Visa',
        requirements: [
          'Valid passport',
          'DS-160 Form confirmation',
          'Visa appointment confirmation',
          'Bank statements',
          'Passport photo',
        ],
      },
      {
        type: 'Business Visa',
        requirements: [
          'Invitation letter',
          'Letter from employer',
          'Proof of business activities',
        ],
      },
    ],
  },
  {
    country: 'Canada',
    code: 'CA',
    visaTypes: [
      {
        type: 'Visitor Visa',
        requirements: [
          'Valid passport',
          'Proof of funds',
          'Travel itinerary',
          'Letter of invitation (optional)',
        ],
      },
    ],
  },
  {
    country: 'United Kingdom',
    code: 'UK',
    visaTypes: [
      {
        type: 'Standard Visitor Visa',
        requirements: [
          'Valid passport',
          'Travel history',
          'Financial evidence',
          'Accommodation details',
        ],
      },
    ],
  },
  {
    country: 'Kenya',
    code: 'KE',
    visaTypes: [
      {
        type: 'eVisa',
        requirements: [
          'Passport copy',
          'Photo',
          'Travel itinerary',
          'Proof of accommodation',
        ],
      },
    ],
  },
  {
    country: 'Germany',
    code: 'DE',
    visaTypes: [
      {
        type: 'Schengen Visa',
        requirements: [
          'Application form',
          'Travel insurance',
          'Proof of accommodation',
          'Return flight ticket',
        ],
      },
    ],
  },
];

export default function VisaRequirementsPage() {
  const [search, setSearch] = useState('');

  const filtered = visaRequirements.filter((item) =>
    item.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-indigo-600">Visa Requirements</h1>
          <Input
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-80"
          />
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="transition-transform"
            >
              <Card className="hover:shadow-lg hover:border-indigo-400 transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-lg">{country.country}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0">
                  {country.visaTypes.map((visa, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-indigo-600">{visa.type}</p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {visa.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-10"
          >
            No countries found.
          </motion.p>
        )}
      </main>
    </div>
  );
}
