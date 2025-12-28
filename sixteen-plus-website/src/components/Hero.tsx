// src/components/Hero.tsx
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900 text-white pt-32 md:pt-40 lg:pt-48">
      {/* Subtle Parallax Background Texture */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'ur[](https://png.pngtree.com/background/20250205/original/pngtree-abstract-background-with-a-textured-dark-blue-design-picture-image_13627429.jpg)' }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl"
        >
          Trusted Genuine Auto Spare Parts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light opacity-90"
        >
          Import & distribution of high-quality parts for passenger cars, commercial vehicles, trucks, and industrial transport across Ethiopia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-red-600/30 transition-all">
            Get Quote Today
          </a>
          <a href="/products" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-full text-lg font-bold transition-all">
            View Products
          </a>
        </motion.div>

        {/* Product Showcase Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          <motion.div whileHover={{ scale: 1.08 }} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="https://www.gmparts.com/content/dam/gmparts/na/us/en/index/parts/brakes/brake-pads-shoes/new-page/gmp-brakepads-3-tier-genuine-parts.jpg?imwidth=1920" alt="Genuine Brake Pads" className="w-full h-60 object-cover" />
            <p className="p-4 font-semibold">Brake Pads</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="https://cdn.z1motorsports.com/images/thumbs/1200x900_OEMQ50HeadlampAssembly.webp" alt="Luxury Headlight Assembly" className="w-full h-60 object-cover" />
            <p className="p-4 font-semibold">Headlights</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="https://i.ebayimg.com/images/g/Ys8AAOSwcJVd0ceN/s-l1200.jpg" alt="Genuine Fuel Filter Element" className="w-full h-60 object-cover" />
            <p className="p-4 font-semibold">Fuel Filters</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="https://s3.amazonaws.com/rp-part-images/assets/3dfe41df76b462c9720386227402ce70.webp" alt="Genuine Clutch Pressure Plate" className="w-full h-60 object-cover" />
            <p className="p-4 font-semibold">Clutch Parts</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Wave Divider */}
      <svg className="absolute bottom-0 w-full h-32 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
}