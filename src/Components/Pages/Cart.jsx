import { useDispatch, useSelector } from "react-redux";
import { imageAPI } from "../../Utils/URL";
import { removeItem } from "../Details/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  const navigate = useNavigate();

  const addItem = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-title text-center my-10 font-extrabold">
        Your Food Cart
      </h1>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-7/12 w- border rounded-2xl bg-white">
          {cartItems.map((items) => (
            <div
              key={items.card.info.id}
              className="p-5 m-4 border-b-2 border-gray-300 flex justify-between itemss-start"
            >
              <div className="flex flex-col max-w-[65%]">
                <span className="font-bold">{items.card.info.name}</span>
                <span className="py-1 font-semibold">
                  {" "}
                  ₹
                  {items.card.info.price / 100 ||
                    items.card.info.defaultPrice / 100}
                </span>
                <div className="text-md line-clamp-4">
                  {items.card.info.description}
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <img
                  src={imageAPI + items.card.info.imageId}
                  alt="food-img"
                  className="w-40 h-36 rounded-2xl"
                />

                <button
                  className="border border-gray-300 bg-white text-green-600 absolute bottom-[-10px] left-1/2 -translate-x-1/2  font-bold text-lg shadow-lg rounded-lg px-6 py-1 w-32 transition hover:bg-slate-200 hover:cursor-pointer"
                  onClick={() => handleCart(items)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <img
            src="https://png.pngtree.com/png-vector/20230816/ourmid/pngtree-icon-of-cooking-utensils-cartoon-illustration-design-illustration-clipart-vector-png-image_6983739.png"
            alt="food-img"
            className=""
          />
          <p className="font-bold text-2xl font-title">
            Your Food Cart Is Empty {":("}
          </p>
          <button
            className="border-4 rounded-2xl p-4 w-xs my-7 bg-green-100 hover:shadow-2xl shadow-xs font-title font-extrabold hover:cursor-pointer"
            onClick={addItem}
          >
            Find your cravings
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
