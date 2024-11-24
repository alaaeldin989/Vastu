import React from "react";
import about_1 from "../../assets/about/about1.jpg";
import about_2 from "../../assets/about/about2.jpg";
import about_3 from "../../assets/about/about3.jpg";
import about_4 from "../../assets/about/about4.jpg";
import about_5 from "../../assets/about/about5.jpg";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="container m-auto py-[2rem]">
        <div className="title-p text-center py-[3rem]">
          <h2 className="text-slate-950 uppercase font-[600] text-2xl">
            About
          </h2>
        </div>

        <div className="hidden lg:grid grid-cols-5 grid-rows-3 gap-3 ">
          <div className="row-span-5 col-start-2">
            <img className="h-[72vh]" src={about_1} alt="" />
          </div>

          <div className="row-span-2 col-start-3">
            <img className="h-[33.8vh]" src={about_2} alt="" />
          </div>

          <div className="row-span-2 col-start-3 row-start-1">
            <img className="h-[35.5vh]" src={about_3} alt="" />
          </div>

          <div className="row-span-3 col-start-4 row-start-1">
            <img className="h-[54vh]" src={about_4} alt="" />
          </div>

          <div className="col-start-4 row-start-4">
            <img className="h-[15vh] w-[100%]" src={about_5} alt="" />
          </div>
        </div>

        <div className="lg:w-[60%] text-center px-0  w-[90%] mx-auto justify-center lg:text-start">
          <p className="text-slate-800 text-md capitalize tracking-wide leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            voluptatibus sapiente, doloribus aliquid eveniet accusantium
            perspiciatis reprehenderit repudiandae eaque, voluptatum
            necessitatibus blanditiis consequatur autem excepturi dolore.
            Sapiente aut obcaecati facere quisquam veritatis fuga aliquid quasi
            blanditiis nobis debitis, eius facilis ratione modi tempora
            perferendis harum suscipit, quam qui autem id sunt sit veniam
            beatae? Veritatis ab praesentium in sunt tempora consequatur
            voluptatum temporibus consectetur deleniti eaque quasi aperiam odio
            omnis aliquam necessitatibus, ullam neque libero. Sapiente
            consequatur veniam ipsa, similique fugiat expedita aliquid itaque
            delectus labore consequuntur illum officia minima omnis porro iste
            numquam mollitia facilis temporibus, consectetur deserunt. Eaque.
          </p>
        </div>
      </div>
      <hr className="w-[90%] m-auto"/>
    </div>
  );
};

export default About;
