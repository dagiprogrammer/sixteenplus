// src/components/ProductsPreview.tsx
import { motion } from 'framer-motion';

export default function ProductsPreview() {
  const categories = [
    'Engine Parts', 'Brake Systems', 'Suspension & Steering',
    'Electrical Components', 'Transmission', 'Body & Accessories', 'Lubricants'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-12"
        >
          Our Product Range
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {categories.map((cat, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-blue-900">{cat}</h3>
            </div>
          ))}
        </motion.div>

        <a href="/products" className="mt-12 inline-block text-red-600 font-bold text-xl hover:text-red-700">
          Explore All Products →
        </a>
      </div>
    </section>
  );
}
export const metadata = {
  title: 'Products | Sixteen Plus General Trading P.L.C.',
  description: 'Explore our wide range of genuine engine parts, brakes, suspension, transmission, and more.',
};