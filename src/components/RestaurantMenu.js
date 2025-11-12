import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  //const { resId } = useParams();
  //const resInfo = useRestaurantMenu(resId);
  // if (resInfo === null) {
  //   return <Shimmer />;
  // }

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
