import React from 'react'
import "./home.css"
import heroimg from "../../imgs/hero.jpg"
import breakfast from "../../imgs/breakfast_icon.png"
import maindish from "../../imgs/main_dish_icon.png"
import drinks from "../../imgs/drinks_icon.png"
import dessert from "../../imgs/dessert_icon.png"
const Home = () => {
  return (
    <>      
    <section className="hero" style={{ backgroundImage: `url(${heroimg})`}}>

        <div className="hero-content" >

          <h1>Best food for your taste</h1>

          <p>
            Discover delectable cuisine and unforgettable moments
            in our welcoming, culinary haven.
          </p>


          <div className="hero-buttons">

            <button className="btn-primary">Book A Table</button>
            <button className="btn-outline">Explore Menu</button>
          </div>

        </div>

      </section>

      
      <section className="browse">
        <h2>Browse Our Menu</h2>

        <div className="menu-cards">
          <div className="menu-card">
            <img src={breakfast} width={70}/>
            <h3>Breakfast</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <a href="#">Explore Menu</a>
          </div>

          <div className="menu-card">
           <img src={maindish} width={70}/>
            <h3>Main Dishes</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <a href="#">Explore Menu</a>
          </div>

          <div className="menu-card">
          <img src={drinks} width={70}/>
            <h3>Drinks</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <a href="#">Explore Menu</a>
          </div>

          <div className="menu-card">
            <img src={dessert} width={70}/>
            <h3>Desserts</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
            <a href="#">Explore Menu</a>
          </div>
        </div>
      </section>
</>

      
    
  )
}

export default Home
