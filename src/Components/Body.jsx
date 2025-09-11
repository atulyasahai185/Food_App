import Res_Card from "./Res_Card";
import { useEffect, useState } from "react";
import { API } from "../Utils/URL";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  //Use State hook, Local state variable
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Use Effect hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    const result = await data.json();

    console.log(result);

    setResList(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRest(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      (<h1 className="font-bold text-3xl  mt-10">Offline</h1>),
      (<h2 className="text-xl text-gray-300">We will be back shortly</h2>)
    );
  }

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Main">
      <div className="flex">
        <div className="m-3 p-3 ">
          <input
            type="text"
            placeholder="Enter something"
            value={searchText}
            className="w-40 border-2 border-black rounded-md p-1 outline-none"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" bg-gray-400 mx-2 p-1 w-20 border-2 font-bold cursor-pointer rounded-md"
            onClick={() => {
              const filteredRest = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-3 p-3 flex items-center">
          <button
            className="bg-slate-300 font-bold border-2 rounded-md p-1 h-10 cursor-pointer"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setResList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="rest-container flex">
        <div className="flex flex-wrap mx-8 gap-10 overflow-hidden">
          {filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              <Res_Card resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
