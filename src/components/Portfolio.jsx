import React from "react";
import { PORTFOLIO_PROJECTS } from "../../constants";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
        <div className="container py-[1rem] m-auto">
            <div className="title-p text-center py-[3rem]">
                <h2 className="text-slate-950 uppercase font-[600] text-2xl">Portfolio</h2>
            </div>
            <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-4 pb-[2rem]">
                {PORTFOLIO_PROJECTS.map((item,index)=> (
                    <div className="card relative hover:cursor-pointer z-0" key={index}>
                        <a href={item.link}>
                        <img className="w-full h-[60vh] object-cover rounded-lg " src={item.image} alt="" />
                        <div className="card-desc absolute top-[50%] left-[50%] rounded-lg hover:opacity-100 duration-300 hover:backdrop-blur-md opacity-0 transform -translate-x-1/2 -translate-y-1/2 text-center w-full h-full justify-center flex gap-3 flex-col text-black">
                            <h3 className="font-bold text-md px-5">{item.name}</h3>
                            <p className="text-xs px-2 text-start">{item.description}</p>
                        </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
      <hr className="w-[90%] m-auto"/>
        
    </div>
  );
};

export default Portfolio;
