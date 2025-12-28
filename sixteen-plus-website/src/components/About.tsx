// src/components/AboutPreview.tsx
import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Sixteen Plus</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Professionally managed importer and distributor of high-quality genuine automotive spare parts in Ethiopia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-700"
          >
            <p>We meet the growing demand for reliable, durable, and affordable parts for passenger vehicles, commercial fleets, trucks, buses, and industrial transport.</p>
            <p>With strict quality assurance, efficient logistics, and outstanding customer service, we are your trusted partner nationwide.</p>
            <a href="/about" className="inline-block text-red-600 font-bold hover:text-red-700">Learn More →</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/022/962/315/non_2x/group-of-employees-in-an-auto-parts-warehouse-examine-auto-parts-that-are-ready-to-be-shipped-to-the-automobile-assembly-factory-photo.jpg" alt="Professional Team" className="rounded-2xl shadow-xl object-cover h-64" />
            <img src="https://data.still.de/assets/products/Solution_Competence/References/Use_Cases/BMW_Imperial_Logistics/STILL_4K_5_Praesentation_FM-X_BMW_IMPERIAL_2017.jpg?w=1920&fit=max&fm=webp" alt="Modern Warehouse" className="rounded-2xl shadow-xl object-cover h-64 mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export const metadata = {
  title: 'About Us | Sixteen Plus General Trading P.L.C.',
  description: 'Learn about our mission, vision, and commitment to quality automotive spare parts in Ethiopia.',
};