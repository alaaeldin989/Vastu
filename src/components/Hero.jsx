import React from "react";
import hero from '../../assets/hero.webp'

const Hero = () => {
  return (
    <div className="hero text-center md:pt-0 lg:pt-0 pt-[5rem]">
        <div className="title-h">
            <h1 className="text-black font-bold text-[3rem] lg:text-[5.5rem]">VASTUSPAZE</h1>
            <p className="text-black capitalize font-bold text-[0.5rem] lg:text-[0.7rem]">reimagine your space with Expert renovation services</p>
        </div>

        <div className="img-h pt-8 pb-14">
            <img className="m-auto w-[80%] h-[70vh] rounded-lg " src={hero} alt="" />
        </div>
        <hr className="w-[90%] m-auto"/>
    </div>
  );
};

export default Hero;
