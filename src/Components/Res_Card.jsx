import { CDN_Link } from "../Utils/URL";

const Res_Card = ({ resData }) => {
  const { info } = resData;
  const { cloudinaryImageId, name, cuisines, locality, avgRating } = info;
  return (
    <div className="w-80 h-100 rounded-lg shadow-2xl bg-gray-200 hover:cursor-pointer">
      <div className="py-4">
        <div className="px-5 w-100">
          <img
            src={CDN_Link + cloudinaryImageId}
            alt="food-img"
            className="w-70 h-50 rounded-lg"
          />
        </div>
        <div className="py-5 h-52">
          <div className="text mx-6 h-40">
            <h3 className="font-bold text-2xl line-clamp-1">{name}</h3>
            <h4 className="pt-1 font-semibold">
              {info?.aggregatedDiscountInfoV3?.header}{" "}
              {info?.aggregatedDiscountInfoV3?.subHeader}
            </h4>
            <h4 className="font-semibold pt-1">{avgRating}</h4>
            <h4 className="line-clamp-1 pt-1">{cuisines.join(", ")}</h4>
            <h4 className="pt-1">{locality}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Res_Card;
