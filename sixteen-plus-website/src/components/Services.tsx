// src/components/ServicesPreview.tsx
import { motion } from 'framer-motion';

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Choose Sixteen Plus?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Genuine Quality</h3>
            <p>Sourced from reputable global manufacturers with full certification.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Competitive Pricing</h3>
            <p>Best value without compromising on reliability or durability.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Nationwide Delivery</h3>
            <p>Fast, accurate, and dependable service across Ethiopia.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <img src="http://emeraldtransportationsolutions.com/wp-content/uploads/2022/06/K5wTQdaSVlAAHi1YpPiiTm0NfKmQfUvv1656449216.jpg" alt="Delivery Truck" className="mx-auto rounded-2xl shadow-2xl max-w-4xl" />
        </motion.div>
      </div>
    </section>
  );
}