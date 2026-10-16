import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className= "logo">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"/>
      </div>
      <div className = "nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  )
};

const RestaurantCard = () => {
  return(
    <div>
      <div>
        <Header/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className  = "app" >
      <Header/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)