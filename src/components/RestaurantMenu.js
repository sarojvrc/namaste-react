const RestaurantMenu = () => {
  return (
    <div className="container m-4 p-4 flex text-wrap">
      <div className="restaurant-menu-card mb-4 border border-solid border-black p-4 rounded-lg m-5">
        <h1 className="font-bold text-2xl">Meghna Biriyni</h1>
        <h4 className="text-xl">North Indian, Biriyni, Mughlai</h4>
        <h5 className="text-lg">45 mins | ₹500 for two</h5>
        <h3 className="font-semibold text-xl mt-4">Menu</h3>

        <ul>
          <li>Biriyni</li>
          <li>Pulao</li>
          <li>Fried Rice</li>
          <li>Chicken Curry</li>
          <li>Mutton Curry</li>
        </ul>
      </div>
      <div className="restaurant-menu-card mb-4 border border-solid border-black p-4 rounded-lg m-5">
        <h1 className="font-bold text-2xl">Dominos</h1>
        <h4 className="text-xl">Pizza, HotDog, Chicken Blast</h4>
        <h5 className="text-lg">25 mins | ₹700 for two</h5>
        <h3 className="font-semibold text-xl mt-4">Menu</h3>

        <ul>
          <li>Biriyni</li>
          <li>Pulao</li>
          <li>Fried Rice</li>
          <li>Chicken Curry</li>
          <li>Mutton Curry</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
