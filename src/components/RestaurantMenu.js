import { dummyRestaurantData } from "../utils/dummyData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const { name, cuisines, costForTwoMessage } = dummyRestaurantData[0].info;
const itemCategories = dummyRestaurantData.filter(
  (category) =>
    category.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-6">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCategories.map((category, index) => (
        <RestaurantCategory
          data={category.card}
          key={category.card.title}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
