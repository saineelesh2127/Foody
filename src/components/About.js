import { LOGO_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500">
          About Foody Express
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Delivering joy, one meal at a time!
        </p>
      </div>

      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div>
          <img
            src={LOGO_URL}
            alt="Food Delivery"
            className="w-auto rounded-lg shadow-lg "
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Foody Express was founded with a simple mission – to bring the best
            food from your favorite restaurants right to your doorstep. We
            believe in fast, fresh, and flavorful meals that make every bite
            special.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            With a network of top restaurants and dedicated riders, we ensure
            that your food is delivered hot and on time, every time. Whether
            you're craving street food, gourmet meals, or healthy bites, we’ve
            got you covered!
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-500">Our Mission</h2>
        <p className="text-gray-600 text-lg mt-3 max-w-3xl mx-auto">
          To revolutionize food delivery by offering convenience, quality, and a
          seamless experience for all food lovers. We strive to make every meal
          special, whether it's a quick snack or a family feast.
        </p>
      </div>
    </div>
  );
};

export default About;
