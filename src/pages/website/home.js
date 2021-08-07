import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import "../../public/css/slider.css";

const settings = {
  // dot: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplaySpeed: 2000,
};
export default function HomePage(props) {
  return (
    <div className="container-fluid">
      <div className="container-xxl home-slider">
        <Slider {...settings}>
          <div>
            <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/slide_01.jpg" />
            <div class="text-content">
           
            <h2>Get your best products</h2>
          </div>
          </div>
          <div>
            <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/slide_02.jpg" />
          </div>
          <div>
            <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/slide_03.jpg" />
          </div>
        </Slider>
      </div>
      <div className="container">
        <div className="row">
          {props.data.map((item) => (
           <div className="col-3 home-card-product">
           <div className="card">
               <div className="home-box-image-product">
                   <img src={item.image} className="card-img-top home-img-product" alt="..." />
               </div>
               <div className="card-body me-2">
                 <Link to={`/DetailProduct/${item.id}`}>
                   <h5 className="card-title ">{item.name}</h5>
                   </Link>
                   <span className="card-text">{item.price}</span>
                  <p className="card-text">{item.description}</p>
               </div>
           </div>
       </div>

          ))}
        </div>
      </div>
    </div>
  );
}
