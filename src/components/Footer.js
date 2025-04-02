const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Foody Express</h2>
          <p className="text-gray-400 text-sm mt-3">
            Satisfy your cravings with delicious meals delivered hot and fresh
            to your doorstep!
          </p>
        </div>

        {/* Quick Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">
            Why Choose Us?
          </h3>
          <p className="text-gray-400 text-sm">✔ Fast Delivery</p>
          <p className="text-gray-400 text-sm">✔ Best Quality Ingredients</p>
          <p className="text-gray-400 text-sm">✔ 24/7 Customer Support</p>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">
            Customer Support
          </h3>
          <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-300 text-sm">✉️ support@foodyexpress.com</p>
          <p className="text-gray-300 text-sm">🕒 Available 24/7</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">
            Stay Connected
          </h3>
          <p className="text-gray-400 text-sm">
            Follow us for exclusive deals & latest updates!
          </p>
          <div className="flex space-x-4 mt-3">
            <span className="bg-gray-800 p-2 rounded-full">📘</span>
            <span className="bg-gray-800 p-2 rounded-full">📷</span>
            <span className="bg-gray-800 p-2 rounded-full">🐦</span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Foodie Express. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
