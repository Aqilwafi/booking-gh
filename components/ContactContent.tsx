export default function ContactContent() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 text-black">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need help? Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>

            <div>
              <p className="font-medium text-gray-700">📍 Address:</p>
              <p className="text-gray-600">123 Guesthouse Street, Cape Town, South Africa</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">📞 Phone:</p>
              <p className="text-gray-600">+27 123 456 789</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">📧 Email:</p>
              <p className="text-gray-600">support@dguesthl.com</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">⏰ Business Hours:</p>
              <p className="text-gray-600">Mon – Fri: 09:00 – 17:00</p>
              <p className="text-gray-600">Sat – Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Send us a Message</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:outline-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 focus:outline-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  className="w-full border rounded px-3 py-2 h-28 focus:outline-blue-500"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
