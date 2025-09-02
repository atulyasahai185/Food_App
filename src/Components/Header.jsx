import { useState } from "react";
import { Logo_CDN } from "../Utils/URL";
import { Link } from "react-router-dom";

const Header = () => {
  let btn = "login";

  const [btnName, setBtnName] = useState(btn);

  return (
    <div className="header flex justify-between h-25 shadow-xl/5">
      <div className="logo-img">
        <img
          src={Logo_CDN}
          alt="image_logo"
          className="logo w-25 h-20 pl-2 left-10"
        />
      </div>
      <div className="nav-items ">
        <ul className="flex m-5 text-2xl">
          <Link to="/" className="p-2.5 cursor-pointer ">
            Home
          </Link>
          <Link to="/about" className="p-2.5 cursor-pointer ">
            About Us
          </Link>
          <Link to="/contact" className="p-2.5 cursor-pointer">
            Contact Us
          </Link>
          <Link to="/grocery" className="p-2.5 cursor-pointer">
            Grocery
          </Link>
          <Link to="/cart" className="p-2.5 cursor-pointer ">
            Cart
          </Link>
          <button
            className="bg-gray-400 w-20 h-10 rounded-sm m-2 p-1 text-xl border cursor-pointer"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
