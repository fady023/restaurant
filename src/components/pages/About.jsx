import "./about.css";
import heroabout from "../../imgs/hero_about.png"
import aboutvid from "../../imgs/about_video.png"
import multiicon from "../../imgs/multi_icon.png"
import easyicon from "../../imgs/easyorder_icon.png"
import fastdelivery from "../../imgs/fastdeliveryicon.png"
function About() {
  return (
    <>
      {/* Section 1 */}
      <section className="about-hero">
        <div className="about-container">

          <div className="about-image">
            <img
              src={heroabout}
              alt="food"
            />

            <div className="visit-card">
              <h4>Come and visit us</h4>
              <p>📞 (414) 857 - 0107</p>
              <p>✉ happytummy@restaurant.com</p>
              <p>📍 837 W. Marshall Lane Marshalltown</p>
            </div>
          </div>

          <div className="about-text">
            <h1>We provide healthy food for your family.</h1>
            <p style={{ fontWeight: "bold" }}>
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
              Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>
            <p>
              At place, we believe that dining is not just about food, but also about the overall experience. Our staff,
              renowned for their warmth and dedication, strives to make every visit an unforgettable event.
            </p>
          </div>

        </div>
      </section>


      {/* Section 2 */}

      <section className="about-video" style={{ backgroundImage: `url(${aboutvid})` }}>
        <div className="video-overlay">
          <div className="play-btn">▶</div>
          <h1>Feel the authentic & original taste from us</h1>
        </div>
      </section>



      {/* Section 3 */}

      <section className="about-features">
        <div className="feature">

          <img src={multiicon} />
          
          <div className="feat">
            <h4>Multi Cuisine</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>

        </div>
        <div className="feature">

          <img src={easyicon} />

          <div className="feat">
            <h4>Easy To Order</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
        <div className="feature">

          <img src={fastdelivery} />

          <div className="feat">
            <h4>Fast Delivery</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>

        </div>
      </section>



      {/* Section 4 */}
      {/*  <section className="about-info">
        <div className="info-container">

          <div className="info-text">
            <h2>A little information for our valuable guest</h2>
            <p>
              At place, we believe that dining is not just about food but
              about the experience.
            </p>

            <div className="info-boxes">
              <div className="box">
                <h3>3</h3>
                <span>Locations</span>
              </div>

              <div className="box">
                <h3>1995</h3>
                <span>Founded</span>
              </div>

              <div className="box">
                <h3>65+</h3>
                <span>Staff Members</span>
              </div>

              <div className="box">
                <h3>100%</h3>
                <span>Satisfied Customers</span>
              </div>
            </div>
          </div>

          <div className="info-image">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt=""
            />
          </div>

        </div>
      </section> */}
    </>
  );
}

export default About;