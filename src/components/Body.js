import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyAPI = await fetch(SWIGGY_API);
    const restaurantList = await swiggyAPI.json();
    setResList(
      restaurantList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const filteredList = resList.filter((res) => res.info.avgRating >= 4.5) || [];

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-conntainer">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
