'use client';

import { useState } from 'react';

export default function EVisaForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [visaType, setVisaType] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`From: ${from}\nTo: ${to}\nVisa Type: ${visaType}\nDuration: ${duration}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
 <div className='flex flex-row w-full justify-between'>
      <div>
        <label className="block text-sm font-medium text-gray-700">Where am I from?</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="e.g., Kenya"
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Where am I going?</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="e.g., United States"
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
</div>

 <div className='flex flex-row w-full justify-between'>
      <div className='w-[40%]'>
        <select
          value={visaType}
          onChange={(e) => setVisaType(e.target.value)}
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="" disabled>Select visa type</option>
          <option value="Tourist">Tourist</option>
          <option value="Business">Business</option>
          <option value="Student">Student</option>
          <option value="Transit">Transit</option>
        </select>
      </div>

      <div className='w-[40%]'>
         <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="" disabled>Select duration</option>
          <option value="30 days">30 days</option>
          <option value="90 days">90 days</option>
          <option value="6 months">6 months</option>
          <option value="1 year">1 year</option>
        </select>
      </div>
</div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Get E-Visa
      </button>
    </form>
  );
}
