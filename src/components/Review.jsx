import React from "react";
import { REVIEWS } from "../../constants/index";

const Review = () => {
  return (
    <div className="review" id="review">
      <div className="container">
        <div className="title-r text-center py-[3rem]">
          <h2 className="text-slate-950 uppercase font-[600] text-2xl">
            Reviews
          </h2>
          <p className="text-xs w-[50%] mx-auto lg:px-8">
            {REVIEWS.text}
          </p>
        </div>
        <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 lg:px-12 justify-center gap-4 py-4">
          {REVIEWS.reviews.map((review, index) => (
            <div key={index} className="review-item flex flex-col p-4 rounded-lg px-8 justify-center items-center gap-6 border border-solid border-gray-300 duration-300 hover:scale-105 hover:shadow-xl shadow-black hover:cursor-pointer hover:border-gray-700 ">
              <div className="top text-sm font-semibold text-gray-800">
              <p>{review.review}</p>
              </div>
              <div className="bot flex gap-3 pb-3">
                <div className="img">
                  <img className="rounded-full w-[3rem]" src={review.image} alt="" />
                </div>
                <div className="user">
              <h3 className="text-sm font-bold">{review.name}</h3>
              <h5 className="text-xs text-start text-gray-500 font-semibold">{review.title}</h5>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[90%] m-auto mt-6 pb-4"/>
    </div>
  );
};

export default Review;
