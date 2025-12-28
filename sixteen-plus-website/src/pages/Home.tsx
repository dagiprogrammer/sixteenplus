import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/About';
import ProductsPreview from '../components/Products';
import ServicesPreview from '../components/Services';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      {/* React 19 native metadata – automatically hoisted to <head> */}
      <title>Sixteen Plus General Trading P.L.C. | Reliable Auto Spare Parts</title>
      <meta name="description" content="Your trusted partner for high-quality, genuine automotive spare parts in Ethiopia – engine, brake, suspension and more for all vehicle types." />
      <meta name="keywords" content="auto spare parts Ethiopia, genuine car parts Addis Ababa, automotive import, brake pads, engine filters, truck parts" />
      <meta property="og:title" content="Sixteen Plus General Trading P.L.C." />
      <meta property="og:description" content="High-quality automotive spare parts – reliable, affordable, delivered nationwide." />
      <meta property="og:image" content="/og-home.jpg" /> {/* Place a preview image in public/ folder */}
      <meta property="og:url" content="https://your-vercel-url.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow"
      >
        <Hero />
        <AboutPreview />
        <ProductsPreview />
        <ServicesPreview />
        <CallToAction />
      </motion.main>
    </>
  );
}