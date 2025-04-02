const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-3">
          We'd love to hear from you! Reach out to us for any queries or
          feedback.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-yellow-500">Get in Touch</h2>
        <p className="text-gray-600 mt-3">📞 +91 98765 43210</p>
        <p className="text-gray-600">✉️ support@foodyexpress.com</p>
        <p className="text-gray-600">🏢 123 Food Street, Gourmet City, India</p>
      </div>
    </div>
  );
};

export default Contact;
