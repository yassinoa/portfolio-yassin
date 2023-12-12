import React from "react";

import Footer from "./Footer";

function WorkDetailCard() {
  return (
    <section >
      
      <div className="bg-white dark:bg-black rounded-2xl text-[#a6a6a6]">
        <div className="px-4 md:px-14 pt-14  ">
          <div className="flex md:space-x-7 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">Works</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>
          <p className="my-5">
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p>
          My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </div>
        <div className="px-14 py-5  ">
            <h1 className="text-2xl text-black font-semibold">What I do!</h1>
        </div>
        <Footer/>
      </div>
    </section>
  );
}
export default WorkDetailCard;
