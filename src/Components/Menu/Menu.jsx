import React from "react";
import "./Menu.css";


import dish1 from "../../Images/dish1.jpg";
import dish2 from "../../Images/dish2.jpg";
import dish3 from "../../Images/dish3.jpg";
import dish4 from "../../Images/dish4.jpg";
import dish5 from "../../Images/dish5.jpg";
import dish6 from "../../Images/dish6.jpg";


const Menu = () => {
  const menuItems = [
    { id: 1, name: "Burrata Salad", price: "$12", image: dish1 },
    { id: 2, name: "Swedish Crunchies", price: "$10", image: dish2 },
    { id: 3, name: "Big Bite Beast", price: "$6", image: dish3 },
    { id: 4, name: "Chocolate Cake", price: "$12", image: dish4 },
    { id: 5, name: "BBQ Chicken Pizza", price: "$15", image: dish5 },
    { id: 6, name: "Creamy Alfredo Pasta", price: "$8", image: dish6 },
  ];

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">Our Delicious Menu</h2>
      <div className="menu-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
