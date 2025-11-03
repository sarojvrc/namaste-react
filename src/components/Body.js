import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resData from "../utils/mockData.js";

const Body = () => {
  const [resList, setResList] = useState(resData);
  const filteredList = resList.filter((res) => res.info.avgRating >= 4.5);

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
