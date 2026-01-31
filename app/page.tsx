'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Store in localStorage for now
    const emails = JSON.parse(localStorage.getItem('waitlist') || '[]');
    emails.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('waitlist', JSON.stringify(emails));

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dadbercrom-Briefs</h1>
          <a href="#waitlist" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Pre-Distressed Briefs<br />
          <span className="text-blue-600">Already Broken In</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Why waste 10 years breaking in your underwear? Get them already worn-in, just the way you like them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#waitlist" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Join the Waitlist
          </a>
          <a href="#how-it-works" className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition">
            How It Works
          </a>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Behold the Perfection</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/products/product-1.png"
                alt="Dadbercrom-Briefs Product Shot 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/products/product-2.png"
                alt="Dadbercrom-Briefs Product Shot 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/products/product-3.png"
                alt="Dadbercrom-Briefs Product Shot 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">The Problem</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">😫</div>
                <h4 className="text-xl font-bold mb-2">Too Comfortable</h4>
                <p className="text-gray-600">New briefs feel too stiff. You know they'll be perfect in a decade.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">👋</div>
                <h4 className="text-xl font-bold mb-2">The Great Purge</h4>
                <p className="text-gray-600">Your partner mysteriously throws out your favorite pairs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-xl font-bold mb-2">Waiting Game</h4>
                <p className="text-gray-600">It takes years to achieve that perfect level of distress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">The Solution</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/lifestyle/lifestyle-1.png"
                  alt="Dadbercrom-Briefs Lifestyle"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <p className="text-xl text-gray-700 mb-6">
                Dadbercrom-Briefs come pre-distressed to perfection. Each pair has been through our proprietary
                aging process to achieve that ideal 10-year worn-in feel, right out of the package.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Scientifically distressed for maximum comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Skip the 10-year break-in period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Replace them guilt-free when they actually fall apart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Your partner will be horrified (mission accomplished)</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Premium Distressing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-2">Industrial Tumbling</h4>
              <p className="text-gray-600">Our patented tumbling process simulates years of wear</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧪</div>
              <h4 className="text-xl font-bold mb-2">Strategic Fading</h4>
              <p className="text-gray-600">Carefully calibrated color fade, not too much, not too little</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✂️</div>
              <h4 className="text-xl font-bold mb-2">Waistband Softening</h4>
              <p className="text-gray-600">That perfect amount of elastic looseness</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Precision Holes</h4>
              <p className="text-gray-600">Strategically placed (mostly hidden) wear patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Join the Waitlist</h3>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Be the first to know when we launch. Early supporters get 20% off.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h4>
                <p className="text-gray-600">We'll email you when we launch.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">FAQ</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">Are these actually new?</h4>
                <p className="text-gray-600">Yes! They're brand new, just professionally distressed to feel like your favorite 10-year-old pair.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">How distressed are we talking?</h4>
                <p className="text-gray-600">Comfortably worn-in, not falling apart. Think "broken in perfectly" not "condemned by the health department."</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">Will my partner approve?</h4>
                <p className="text-gray-600">Probably not, but that's half the fun. At least you can buy new ones that feel old.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">What about the product cycle?</h4>
                <p className="text-gray-600">Exactly! You'll need replacements sooner, which means you'll always have that perfect broken-in feel. It's a feature, not a bug.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">Is this a joke?</h4>
                <p className="text-gray-600">We're dead serious about comfort. If it makes you laugh along the way, that's just a bonus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Dadbercrom-Briefs</h3>
          <p className="text-gray-400 mb-6">Pre-distressed comfort, delivered fresh.</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2026 Dadbercrom-Briefs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
