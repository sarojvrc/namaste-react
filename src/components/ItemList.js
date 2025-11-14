import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="border-b-2 p-2 m-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-10/12">
              <span className="text-lg">{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button className="cursor-pointer bg-white rounded-lg px-3 mx-15 my-1">
                  Add
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
