// src/components/CallToAction.tsx
export default function CallToAction() {
  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">Contact us today for quotes, availability, or partnership opportunities.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/contact" className="bg-white text-red-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-xl">
            Contact Us Now
          </a>
          <a href="tel:+251912636390" className="border-2 border-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition">
            Call +251 91 26 36 390
          </a>
        </div>
      </div>
    </section>
  );
}