import { useState } from "react";
// import { imageAPI } from "../../Utils/URL";
import useRestMenu from "../../Utils/useRestMenu";
import ResCategory from "../Details/ResCategroy";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();

  const menuInfo = useRestMenu(id);

  const [showIndex, setShowIndex] = useState(null);

  if (menuInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    sla,
  } = menuInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    menuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  const categories =
    menuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(categories);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-4xl my-8">
        <h1 className="font-bold my-6 px-29 text-2xl">{name}</h1>
        <div className="flex justify-center">
          <div className="bg-white w-2xl flex flex-col p-4 rounded-2xl border border-gray-400">
            <h3 className="font-bold">
              {avgRating}({totalRatingsString}) {costForTwoMessage}
            </h3>
            <h3 className="text-orange-500 font-semibold underline text-sm pt-1">
              {cuisines.join(", ")}
            </h3>
            <h3 className="text-gray-400 pt-1 text-sm">{areaName}</h3>
            <h3 className="font-semibold text-sm pt-1">{sla?.slaString}</h3>
          </div>
        </div>
        <div className=" my-5 mx-10">
          {categories.map((category, index) => (
            <ResCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItem={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
