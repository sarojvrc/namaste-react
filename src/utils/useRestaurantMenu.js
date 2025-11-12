import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" + encodeURIComponent(SWIGGY_MENU_API) + resId
    );
    const json = await data.json();
    setResData(json.data);
    console.log(json);
  };

  return resData;
};

export default useRestaurantMenu;
