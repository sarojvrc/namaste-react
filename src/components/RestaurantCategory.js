import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 bg-gray-50 p-4 shadow-lg">
        <div
          className="flex justify-between font-bold text-lg cursor-pointer"
          onClick={handleClick}
          key={data.title}
        >
          <span>
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
