import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDeliveryTime } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState(
    []
  );

  const WithDeliveryTimeRestaurantCard = withDeliveryTime(RestaurantCard);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyAPI = await fetch(SWIGGY_API);
    const restaurantList = await swiggyAPI.json();
    setListOfRestaurants(
      restaurantList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredListofRestaurants(
      restaurantList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();

  const filteredList =
    filteredListofRestaurants.filter((res) => res.info.avgRating >= 4.2) || [];

  if (!onlineStatus) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black p-1 rounded-xl"
            placeholder="Search restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-2 bg-purple-900 text-white rounded-lg cursor-pointer"
            onClick={() => {
              console.log(searchText);
              const searchedRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredListofRestaurants(searchedRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-1 m-2 bg-purple-900 text-white rounded-lg cursor-pointer"
            onClick={() => {
              setFilteredListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListofRestaurants.map((restaurant) => {
          return (
            <Link
              className="res-link"
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.sla.deliveryTime <= 35 ? (
                <WithDeliveryTimeRestaurantCard
                  resData={restaurant}
                  key={restaurant.info.id}
                />
              ) : (
                <RestaurantCard resData={restaurant} key={restaurant.info.id} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
