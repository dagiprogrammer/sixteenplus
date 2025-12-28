// src/components/MissionVision.tsx
export default function MissionVision() {
  return (
    <section id="mission" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-red-600 mb-6">Vision</h3>
            <p className="text-lg text-gray-700">
              To become the leading auto spare parts importer and distributor in Ethiopia, recognized for quality, reliability, and excellent customer service.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-red-600 mb-6">Mission</h3>
            <ul className="text-lg text-gray-700 space-y-3 list-disc list-inside">
              <li>To import and distribute genuine and high-quality auto spare parts</li>
              <li>To build long-term partnerships with global manufacturers and local customers</li>
              <li>To ensure competitive pricing and timely delivery</li>
              <li>To contribute to the growth of the automotive aftermarket through professionalism and integrity</li>
            </ul>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Quality First', 'Integrity', 'Customer Focus', 'Efficiency', 'Partnership'].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition">
              <h4 className="text-2xl font-bold text-red-600 mb-4">{value}</h4>
              <p className="text-gray-600">
                {value === 'Quality First' && 'Supplying reliable and durable products'}
                {value === 'Integrity' && 'Honest and transparent business practices'}
                {value === 'Customer Focus' && 'Understanding and meeting customer needs'}
                {value === 'Efficiency' && 'Fast, accurate, and dependable service'}
                {value === 'Partnership' && 'Strong relationships with suppliers and clients'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}