import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pizza1 from "@/asset/Pizza.png";
import Pizza2 from "@/asset/Pizza2.png";
import Pizza3 from "@/asset/Pizza3.png";
const imgProp =[Pizza1, Pizza2, Pizza3]
const Carouselcomponent = () => {
  return (
    <Carousel
    autoPlay
    navButtonsAlwaysVisible
    infiniteLoop
    showStatus={false}
    emulateTouch
    showThumbs={false}
    >
     { imgProp.map((object,index)=>{
      return(
     <div
     key={index} style={{ maxHeight: "36rem" }}
        className="object-center brightness-50">
     <img 
          src={`${object.src}`}
          alt="pizza"
        /></div>
      );
})}
          
    </Carousel>
  )
}

export default Carouselcomponent;
