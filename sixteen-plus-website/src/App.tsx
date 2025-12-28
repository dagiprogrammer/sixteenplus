import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import HomePage from './pages/Home'
// import AboutPage from './pages/AboutPage'
// import ProductsPage from './pages/ProductsPage'
// import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App