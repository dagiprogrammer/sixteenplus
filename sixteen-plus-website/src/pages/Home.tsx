// src/pages/HomePage.tsx
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/About';
import ProductsPreview from '../components/Products';
import ServicesPreview from '../components/Services';
import CallToAction from '../components/CallToAction';

// React 19 native metadata – Vercel & browsers support this perfectly
export const metadata = {
  title: 'Sixteen Plus General Trading P.L.C. | Reliable Auto Spare Parts',
  description: 'Your trusted partner for high-quality, genuine automotive spare parts in Ethiopia – engine, brake, suspension and more for all vehicle types.',
  keywords: 'auto spare parts Ethiopia, genuine car parts Addis Ababa, automotive import, brake pads, engine filters, truck parts',
  openGraph: {
    title: 'Sixteen Plus General Trading P.L.C.',
    description: 'High-quality automotive spare parts – reliable, affordable, delivered nationwide.',
    image: '/og-home.jpg', // Put this image in public/ folder
    url: 'https://yourdomain.com/',
  },
};

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex-grow"
    >
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <ServicesPreview />
      <CallToAction />
    </motion.main>
  );
}