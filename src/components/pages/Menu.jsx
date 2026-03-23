import { useState } from "react";
import "./menu.css";
import fried from "./../../imgs/friedeggs.png"
import haw from "./../../imgs/Hawaiian Pizza.png"
import mart from "./../../imgs/Martinez Cocktail.png"
import but from "./../../imgs/Butterscotch Cake.png"
import mint from "./../../imgs/Mint Lemonade.png"
import choco from  "../../imgs/Chocolate Icecream.png"
import burg from "../../imgs/Cheese Burger.png"
import waff from "../../imgs/Classic Waffles.png"
import uber from "../../imgs/ubereats.png"
import gru from "../../imgs/grubhub.png"
import post from "../../imgs/postmates.png"
import door from "../../imgs/doordash.png"
import panda from "../../imgs/foodpanda.png"
import deliver from "../../imgs/deliveroo.png"
import insta from "../../imgs/instacart.png"
import just from "../../imgs/justeat.png"
import didi from "../../imgs/didifood.png"

const menuData = [
  { id: 1, name: "Fried Eggs", price: 9.99, category: "Breakfast", img:`${fried}` },
  { id: 2, name: "Hawaiian Pizza", price: 15.99, category: "Main Dishes", img: `${haw}` },
  { id: 3, name: "Martinez Cocktail", price: 7.25, category: "Drinks", img: `${mart}` },
  { id: 4, name: "Butterscotch Cake", price: 20.99, category: "Desserts", img:`${but}` },
  { id: 5, name: "Mint Lemonade", price: 12.55, category: "Drinks", img: `${mint}`},
  { id: 6, name: "Chocolate Icecream", price: 12.55, category: "Desserts", img:`${choco}` },
  { id: 7, name: "Cheese Burger", price: 12.55, category: "Main Dishes", img:`${burg}` },
  { id: 8, name: "Classic Waffles", price: 12.55, category: "Desserts", img:`${waff}`},


];

function Menu() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? menuData
      : menuData.filter(item => item.category === filter);

  return (
    <section className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>
         We consider all the drivers of change gives you the components 
         you need to change to create a truly happens.
        </p>
      </div>

      {/* Filters */}
      <div className="menu-filters">
        {["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"].map(category => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="menu-grid">
        {filteredItems.map(item => (
          <div className="menu-card" key={item.id} style={{padding : "5px"}}>
            <img src={item.img} alt={item.name} />
            <div className="card-body">
              <h4>${item.price}</h4>
              <h3>{item.name}</h3>
              <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Apps Section */}
      <div className="apps-section">
        <div className="apps-text">
          <h1>You can order through apps</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
             sed et aliquet aliquet risus tempor semper.</p>
        </div>

        <div className="apps-logos">

       
       
        <div className="logos">

            <img src={`${uber}`} />
             <img src={`${gru}`} />
             <img src={`${post}`} />

            <img src={`${door}`} />
             <img src={`${panda}`} />
             <img src={`${deliver}`} />

            <img src={`${insta}`} />
             <img src={`${just}`} />
             <img src={`${didi}`} />
          </div>

         
      
          
        
        </div>
      </div>
    </section>
  );
}

export default Menu;