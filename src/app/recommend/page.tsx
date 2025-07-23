'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NavBar } from '@/components/visa-portal'

export default function RecommendationTool() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  
  const questions = [
    {
      id: 'purpose',
      question: "What is the main purpose of your travel?",
      options: [
        { value: 'tourism', label: 'Tourism/Vacation' },
        { value: 'business', label: 'Business/Work' },
        { value: 'study', label: 'Study/Education' },
        { value: 'family', label: 'Visit Family/Friends' }
      ]
    },
    // Add more questions...
  ]

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = () => {
    // Process answers and recommend visas
    router.push('/visa/recommended')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Visa Recommendation Tool</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          {questions.map((q, index) => (
            <div key={q.id} className="mb-8">
              <h3 className="text-lg font-medium mb-4">
                {index + 1}. {q.question}
              </h3>
              <div className="space-y-3">
                {q.options.map(option => (
                  <label key={option.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={q.id}
                      checked={answers[q.id] === option.value}
                      onChange={() => handleAnswer(q.id, option.value)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700"
          >
            Get My Visa Recommendations
          </button>
        </div>
      </div>
    </div>
  )
}