import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/010/628/614/non_2x/food-order-logo-mobile-food-logo-online-food-delivery-logo-vector.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return(
    <div className="res-card">
      <h3>Meghna Foods</h3>
    </div>
  );
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conntainer">
        <RestaurantCard />
      </div>
    </div>
  );
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
