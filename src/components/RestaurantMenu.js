import { useEffect, useState } from "react";
import { SWIGGY_API, SWIGGY_MENU_API } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchSwiggyMenu();
  }, []);

  const fetchSwiggyMenu = async () => {
    const swiggyMenu = await fetch(SWIGGY_API);
    const swiggyData = await swiggyMenu.json();
    setMenu(
      swiggyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setMenu(swiggyData?.data);
  };

  if (menu === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>Meghna Biriyni</h1>
      <ul>
        <li>Biriyni</li>
        <li>Pulao</li>
        <li>Fried Rice</li>
        <li>Chicken Curry</li>
        <li>Mutton Curry</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
