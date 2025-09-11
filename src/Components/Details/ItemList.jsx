import { useDispatch } from "react-redux";
import { imageAPI } from "../../Utils/URL";
import { addItem } from "./CartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addItem(item));
  };

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-5 m-4 border-b-2 border-gray-300 flex justify-between items-start"
        >
          <div className="flex flex-col max-w-[65%]">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="py-1 font-semibold">
              {" "}
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <div className="text-md line-clamp-4">
              {item.card.info.description}
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <img
              src={imageAPI + item.card.info.imageId}
              alt="food-img"
              className="w-40 h-36 rounded-2xl"
            />

            <button
              className="border border-gray-300 bg-white text-green-600 absolute bottom-[-14px] left-1/2 -translate-x-1/2  font-bold text-lg shadow-lg rounded-lg px-6 py-1 w-32 transition hover:bg-slate-200 hover:cursor-pointer"
              onClick={() => handleCart(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
