import { useState } from "react";
import { Logo_CDN } from "../Utils/URL";
import { Link } from "react-router-dom";

const Header = () => {
  let btn = "login";

  const [btnName, setBtnName] = useState(btn);

  return (
    <div className="header flex justify-between border-2 border-black m-1.5">
      <div className="logo-img">
        <img src={Logo_CDN} alt="image_logo" className="logo w-40 pl-2 " />
      </div>
      <div className="nav-items ">
        <ul className="flex mt-7 text-2xl">
          <Link to="/" className="p-2.5 m-2.5 ">
            Home
          </Link>
          <Link to="/about" className="p-2.5 m-2.5">
            About Us
          </Link>
          <Link to="/contact" className="p-2.5 m-2.5">
            Contact Us
          </Link>
          <Link to="/cart" className="p-2.5 m-2.5">
            Cart
          </Link>
          <button
            className="bg-gray-400 w-20 h-10 rounded-sm m-4 p-1 text-xl border cursor-pointer"
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
