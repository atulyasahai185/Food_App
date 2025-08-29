import { CDN_Link } from "../Utils/URL";

const Res_Card = ({ resData }) => {
  const { info } = resData;
  const { cloudinaryImageId, name, cuisines, locality, avgRating, costForTwo } =
    info;
  return (
    <div className="res-card w-60 h-110 border border-black  m-2 bg-gray-200 hover:border-2 hover:cursor-pointer">
      <img
        src={CDN_Link + cloudinaryImageId}
        alt="food-img"
        className="w-50 h-60 ml-4 mt-2"
      />
      <div className="text ml-5 mt-4">
        <h3 className="font-bold">{name}</h3>
        <h4 className="line-clamp-2">{cuisines}</h4>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
        <h4 className="font-bold">{avgRating}</h4>
      </div>
    </div>
  );
};

export default Res_Card;
