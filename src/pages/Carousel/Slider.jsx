import React from "react";
import Img1 from "../../assets/image-1.jpg";
import Img2 from "../../assets/image-2.jpg";
import Img3 from "../../assets/image-3.jpg";
import Img4 from "../../assets/image-4.jpg";
// import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="w-1/2 mx-auto">
     <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={Img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={Img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={Img3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={Img4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Slider;
