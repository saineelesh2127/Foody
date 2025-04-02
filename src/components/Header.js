import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="bg-red-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-40" src={LOGO_URL} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <span className="px-3 font-semibold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </span>
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-700">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-gray-700">
            Cart
          </Link>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
          <span className="font-semibold">{loggedInUser}</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
