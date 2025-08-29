import Res_Card from "./Res_Card";
import { useEffect, useState } from "react";
import { API } from "../Utils/URL";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Main">
      <div className="filter flex">
        <div className="m-3 ">
          <input
            type="text"
            placeholder="Enter something"
            value={searchText}
            className="w-40 border-2 border-black rounded-sm p-1"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 bg-gray-500 p-1 border-2 font-bold cursor-pointer rounded-md"
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

        <button
          className="bg-blue-500 font-bold border-2 rounded-md mt-4.5 p-1  h-10 cursor-pointer"
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
      <div className="rest-container flex flex-wrap">
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
  );
};

export default Body;

//react fiber
//virtual dom and actual dom
//reconcillation algorithm
//Monolith
//microservices
//
