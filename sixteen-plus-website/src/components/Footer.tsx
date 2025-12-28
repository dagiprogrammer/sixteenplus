// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} <strong>Sixteen Plus General Trading P.L.C.</strong> All rights reserved.
        </p>
        <p className="mt-4 text-yellow-300">
          Reliable Quality • Competitive Prices • Nationwide Delivery
        </p>
      </div>
    </footer>
  );
}