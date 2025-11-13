import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-60 bg-pink-50 hover:bg-pink-100 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRatingString} stars</h5>
      <h5>{sla.deliveryTime} minutes</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
