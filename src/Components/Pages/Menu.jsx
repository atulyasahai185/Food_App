import useRestMenu from "../../Utils/useRestMenu";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();

  const menuInfo = useRestMenu(id);

  if (menuInfo === null) return <Shimmer />;

  // const resMenu = ;

  const { name, cuisines, costForTwoMessage, avgRating } =
    menuInfo?.cards?.[2]?.card?.card?.info || {};

  // const itemInfo =
  //  ;

  const { itemCards } =
    menuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  console.log(itemCards);

  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h4>{avgRating}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} {item.card.info.price / 100 + " rupees"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
