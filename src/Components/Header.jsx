import { useContext, useState } from "react";
import { Logo_CDN } from "../Utils/URL";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btn = "Login";

  const [btnName, setBtnName] = useState(btn);

  const { loggedUser } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.item);

  return (
    <div className="flex justify-between h-23 shadow-xl/5">
      <div className="logo-img">
        <img
          src={Logo_CDN}
          alt="image_logo"
          className="w-25 h-20 pl-2 mt-1 ml-5"
        />
      </div>
      <div className="flex items-centre ">
        <ul className="flex m-4 p-1 text-xl">
          <Link
            to="/"
            className="p-2.5  hover:cursor-pointer font-headers font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="p-2.5 hover:cursor-pointer font-headers font-semibold "
          >
            About Us
          </Link>
          <Link
            to="/grocery"
            className="p-2.5 hover:cursor-pointer font-headers font-semibold"
          >
            Grocery
          </Link>
          <Link
            to="/cart"
            className="p-2.5 hover:cursor-pointer font-headers font-semibold"
          >
            Cart ({cartItem.length} items)
          </Link>
          <button
            className="bg-gray-300 w-20 h-10 rounded-lg m-2 p-1 text-xl border hover:cursor-pointer font-headers font-semibold"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
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
