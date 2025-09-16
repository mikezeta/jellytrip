/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState } from 'react';

/**
 * Home page for the JellyTrip site.
 *
 * This component defines the full landing page, including the hero,
 * how‑it‑works steps, feature highlights, pricing plans, testimonials,
 * a call‑to‑action form, and the footer. Because interactive
 * functionality (like the email subscription form) exists on this
 * page, we declare it as a client component with `'use client'`.
 */
export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application you would send this data to an API.
    // For this static export we simply show an alert and clear the state.
    alert(`Thanks for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-jellyMagenta via-jellyPurple to-jellyBlue text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover JellyTrip</h1>
          <p className="text-lg md:text-2xl mb-8">
            Your next adventure is just a few clicks away.
          </p>
          <a
            href="#how-it-works"
            className="bg-white text-jellyPurple font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition"
          >
            Learn How It Works
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-jellyMagenta text-5xl mb-4">①</div>
              <h3 className="text-xl font-semibold mb-2">Choose a destination</h3>
              <p>
                Browse thousands of destinations from around the world and
                pick your perfect getaway.
              </p>
            </div>
            <div className="text-center">
              <div className="text-jellyPurple text-5xl mb-4">②</div>
              <h3 className="text-xl font-semibold mb-2">Customize your trip</h3>
              <p>
                Adjust dates, add extras, and tailor your trip to your needs
                in just a few clicks.
              </p>
            </div>
            <div className="text-center">
              <div className="text-jellyBlue text-5xl mb-4">③</div>
              <h3 className="text-xl font-semibold mb-2">Book & enjoy</h3>
              <p>
                Secure your booking instantly and get ready for an
                unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Seamless Planning</h3>
              <p>
                Plan and manage every aspect of your trip with ease, from flights
                to accommodations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>
                Our team is here to help you anytime, anywhere, ensuring a
                worry‑free travel experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p>
                Get the best deals and exclusive offers you won’t find anywhere
                else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-4">Free</p>
              <ul className="mb-6 space-y-2 text-center">
                <li>Access to basic features</li>
                <li>Standard support</li>
                <li>Limited trip planning</li>
              </ul>
              <a href="#" className="mt-auto inline-block bg-jellyBlue text-white px-4 py-2 rounded-full">Get Started</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center border-2 border-jellyMagenta">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">$9/mo</p>
              <ul className="mb-6 space-y-2 text-center">
                <li>Everything in Starter</li>
                <li>Priority support</li>
                <li>Unlimited trip planning</li>
              </ul>
              <a href="#" className="mt-auto inline-block bg-jellyMagenta text-white px-4 py-2 rounded-full">Choose Pro</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">$29/mo</p>
              <ul className="mb-6 space-y-2 text-center">
                <li>Everything in Pro</li>
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
              </ul>
              <a href="#" className="mt-auto inline-block bg-jellyPurple text-white px-4 py-2 rounded-full">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="p-6 bg-white rounded-2xl shadow text-center">
              <p className="italic mb-4">
                “JellyTrip made planning my vacation effortless! Highly recommend.”
              </p>
              <footer className="font-semibold">— Alex P.</footer>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-2xl shadow text-center">
              <p className="italic mb-4">
                “Amazing customer support and unbeatable prices. 5 stars!”
              </p>
              <footer className="font-semibold">— Maria L.</footer>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-2xl shadow text-center">
              <p className="italic mb-4">
                “The best travel booking experience I've had. Thank you JellyTrip!”
              </p>
              <footer className="font-semibold">— Kevin R.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id="cta" className="w-full py-20 px-4 bg-gradient-to-r from-jellyPurple to-jellyBlue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="mb-8">
            Join thousands of happy travelers booking their dream trips with JellyTrip.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-jellyMagenta rounded-md font-semibold shadow"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 px-4 bg-gray-900 text-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} JellyTrip. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}