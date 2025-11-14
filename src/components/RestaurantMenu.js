import { dummyRestaurantData } from "../utils/dummyData";
import RestaurantCategory from "./RestaurantCategory";

const { name, cuisines, costForTwoMessage } = dummyRestaurantData[0].info;
const itemCategories = dummyRestaurantData.filter(
  (category) =>
    category.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

const RestaurantMenu = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-6">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCategories.map((category) => (
        <RestaurantCategory data={category.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
