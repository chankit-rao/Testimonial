import React from "react";
import Testimonial from "./component/Testimonial";
import reviews from "./data";

const App = () => {
  return (
  
  <div  className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 ">
    <div className="text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-600 h-[4px] w-[135px] mt-1 text-center relative left-[5px]"></div>
      <Testimonial reviews={reviews}></Testimonial>
    </div>
  </div>
  
);
};

export default App;
