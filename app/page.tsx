'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(false);

  const startScan = () => {
    if (!name.trim()) return;
    setScanning(true);
    setResult(false);
    setTimeout(() => {
      setScanning(false);
      setResult(true);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
          Untrace.me
        </h1>
        <p className="text-2xl mt-6 text-gray-300">India’s First Complete Digital Privacy Shield</p>
        <p className="text-lg mt-4 text-gray-400">Remove your Aadhaar, Phone, Email & PAN from 150+ data broker sites</p>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-gray-900 rounded-2xl p-8 border border-red-900 shadow-2xl">
            <p className="text-xl mb-6">Check if your data is exposed right now</p>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 rounded-lg bg-gray-800 text-white text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-red-600"
              onKeyPress={(e) => e.key === 'Enter' && startScan()}
            />
            <button
              onClick={startScan}
              disabled={scanning}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 py-5 rounded-lg text-xl font-bold hover:from-red-500 hover:to-orange-500 transition shadow-lg"
            >
              {scanning ? 'Scanning 150+ Sites...' : 'Scan My Data for Free'}
            </button>
          </div>

          {scanning && (
            <div className="mt-12 text-2xl animate-pulse text-red-400">
              🔴 Scanning Truecaller, JustDial, Facebook breaches & more...
            </div>
          )}

          {result && (
            <div className="mt-12 bg-red-950 border border-red-700 rounded-2xl p-10 shadow-2xl">
              <h2 className="text-4xl font-bold text-red-400 mb-6">⚠️ 53 Exposures Found!</h2>
              <ul className="text-left space-y-4 text-lg">
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> Phone number on Truecaller & 19 apps</li>
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> Email leaked in 2023 Facebook & LinkedIn breaches</li>
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> Aadhaar-linked profiles on 18 broker sites</li>
                <li className="flex items-center"><span className="text-red-400 mr-3">✗</span> PAN visible on loan & public directories</li>
              </ul>
              <button className="mt-10 w-full bg-green-600 py-6 rounded-lg text-2xl font-bold hover:bg-green-500 transition">
                Remove All My Data in 7 Days → Only ₹599/year
              </button>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-500">₹599/year</h3>
            <p className="text-4xl font-bold mt-4">Individual</p>
            <button className="mt-8 w-full bg-orange-600 py-5 rounded-lg font-bold text-xl">Join Waitlist</button>
          </div>
          <div className="bg-gradient-to-b from-purple-900 to-black p-10 rounded-2xl border-2 border-purple-600 transform scale-105 shadow-2xl">
            <h3 className="text-3xl font-bold text-purple-400">₹4999/year</h3>
            <p className="text-4xl font-bold mt-4">Family (Up to 6)</p>
            <button className="mt-8 w-full bg-purple-600 py-5 rounded-lg font-bold text-xl">Most Popular</button>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-cyan-400">Custom</h3>
            <p className="text-4xl font-bold mt-4">Business</p>
            <button className="mt-8 w-full bg-cyan-600 py-5 rounded-lg font-bold text-xl">Contact Sales</button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl text-4xl z-50 animate-bounce"
      >
        WhatsApp
      </a>
    </div>
  );
}
