import React from "react";
import { SERVICES_CONTENT } from "../../constants";

const services = () => {
  return (
    <div className="service" id="services">
      <div className="container py-[1rem] m-auto">
        <div className="title-s py-[3rem] text-center">
          <h3 className="text-slate-950 uppercase font-[600] text-2xl">
            Our home renovation services
          </h3>
        </div>
        {SERVICES_CONTENT.map((service, index) => (
          <div className="mb-12 mx-10 flex flex-col lg:flex-row" key={index}>
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}>
                <img src={service.image} alt={service.alt} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className={`lg:w-1/2 flex flex-col ${index % 2 === 0 ? "lg:pl-12": " lg:pr-12"}`}>
              <h3 className="text-md lg:text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4 lg:tracking-wide text-sm lg:text-md font-medium lg:leading-9">{service.description}</p>
              </div>
          </div>
        ))}
      </div>
      <hr className="w-[90%] m-auto"/>
    </div>
  );
};

export default services;
