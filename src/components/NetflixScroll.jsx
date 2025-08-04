import React from 'react';
import './NetflixScroll.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
   <div id='section_scroll'>
     <div className="trending-container">
      <h2 className="section-title">Trending Now</h2>
      <Slider {...settings}>
        <div className="poster"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s" alt="Poster 1" /></div>
        <div className="poster"><img src="https://m.media-amazon.com/images/I/81dae9nZFBS._UF1000,1000_QL80_.jpg" alt="Poster 2" /></div>
        <div className="poster"><img src="https://images-cdn.ubuy.co.in/668f03f763dc6918441092c0-avengers-infinity-war-movie-poster.jpg" alt="Poster 3" /></div>
        <div className="poster"><img src="https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg" alt="Poster 4" /></div>
        <div className="poster"><img src="https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080" alt="Poster 5" /></div>
        <div className="poster"><img src="https://www.postergully.com/cdn/shop/products/SR480.jpg?v=1578633708" alt="Poster 6" /></div>
        <div className="poster"><img src="https://i0.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/03/Stopmotion-poster.jpg?ssl=1" alt="Poster 7" /></div>
        <div className="poster"><img src="https://static.srpcdigital.com/styles/1037xauto/public/2024-03/574887_0.jpeg.webp" alt="Poster 8" /></div>
      </Slider>
    </div>
   </div>
  );
}
