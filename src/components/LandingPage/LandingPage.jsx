import React from 'react';

export default function DreamPartnerPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-orange-50 px-6 py-16 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug">
              How to attract your <br /> dream partner
            </h1>
            <p className="mt-4 text-sm max-w-md">
              Overcome the beliefs that block your ability to connect with high quality men and learn the real reason why smart, successful women are still single after 30.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow hover:bg-red-600">
              Download Your Guide Now
            </button>
          </div>
          <div className="flex-1">
            <img src="/path-to-your-hero-image.png" alt="Guide Cover" className="rounded-xl w-full max-w-sm mx-auto md:mx-0" />
          </div>
        </div>
      </section>

      {/* What You'll Achieve */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">What you’ll achieve:</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <img src="/img1.png" alt="" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <p>Why you don’t need to settle for unhappiness in this ONE area of your life</p>
          </div>
          <div>
            <img src="/img2.png" alt="" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <p>Why you CAN have it all (and how to stop attracting the wrong guys)</p>
          </div>
          <div>
            <img src="/img3.png" alt="" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <p>How to break down the walls and show your authentic self</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 py-16 bg-rose-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src="/founder.png" alt="Founder" className="rounded-xl w-full md:w-1/3" />
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Meet our founder, <span className="text-rose-600">Marni</span></h2>
            <p className="mt-4 text-sm max-w-xl">
              Having been married for 17 years, divorced, and successfully dated again in today’s complex social environment, Marni understands what it feels like to be lonely and sick of wasting time going on dates with unavailable men.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow hover:bg-red-600">
              Discover Marni’s Proven Process
            </button>
          </div>
        </div>
      </section>

      {/* Belief Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Let go of limiting beliefs</h3>
          <p className="text-sm mb-6">
            If you don’t think you deserve a great man, you’re grappling with a story that needs rewriting.
          </p>
          <h3 className="text-xl font-bold mb-4">Break down barriers</h3>
          <p className="text-sm mb-6">
            Let go of what’s holding you back.
          </p>
          <h3 className="text-xl font-bold mb-4">Fall in love with your true self</h3>
          <p className="text-sm">
            Embrace the real you — it’s the best gift you have to offer.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic">“Once Marni held me accountable, it was easier for me to finally recognize when Mr. Right came along.”</p>
            <p className="mt-2 font-semibold text-right">— Janice</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic">“I am now much more grounded and confident and I feel like I’m living the life that I wanted to live now.”</p>
            <p className="mt-2 font-semibold text-right">— Jill</p>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="px-6 py-16 bg-rose-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">What’s on the agenda</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold">1. Understand Why</h4>
              <p className="text-sm">You're not alone. Let’s uncover the hidden reasons behind your relationship struggles.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">2. Learn 4 Characteristics that Attract Men</h4>
              <p className="text-sm">Understand the key traits that bring quality men closer.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">3. Reprogram Your Dating GPS</h4>
              <p className="text-sm">Break patterns and discover how to navigate love differently.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">4. Learn what “Feminine” means now</h4>
              <p className="text-sm">Redefine femininity for your empowered self.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">5. Remove Limiting Beliefs</h4>
              <p className="text-sm">Identify the blocks holding you back and eliminate them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6 bg-white">
        Copyright © 2025 Dating with Dignity. All Rights Reserved. | <a href="#" className="underline">Terms of Service</a> | <a href="#" className="underline">Privacy Policy</a>
      </footer>
    </div>
  );
}
