// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Get in Touch</h3>
            <div className="space-y-5 text-lg">
              <p><strong>Address:</strong><br />Tikur Anbesa, Shop No. 019/03<br />Addis Ababa, Ethiopia</p>
              <p><strong>Phone:</strong><br />+251 91 26 36 390<br />+251 92 25 15 982</p>
              <p><strong>Email:</strong><br />leultadesse16plus@gmail.com</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" required />
              <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" required />
              <textarea placeholder="Your Message" rows={6} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" required></textarea>
              <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-red-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export const metadata = {
  title: 'Contact Us | Sixteen Plus General Trading P.L.C.',
  description: 'Get in touch – Tikur Anbesa, Addis Ababa. Phone: +251 91 26 36 390',
};