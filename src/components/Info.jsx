import React from "react";
import image from "../assets/pr.png";
import Socialicon from "./Socialicon";
import Address from "./Address";

function Info() {
  return (
    
    <div className="rounded-xl  sm:px-2   xl:px-0 xl:w-4/12  xl:relative ">
      {/* first card  */}
      <div className=" xl:sticky top-28 ">
        {/* for info card */}
        <div className="py-10 xl:py-4 rounded-2xl px-7 mb-5  text-center  justify-center  shadow-sm dark:text-white bg-white dark:bg-black  p-5">
          {/*I want to make this sticky like after scroll it stick till all below end */}
          <img
            className="xl:-mt-32 h-56 w-56 mb-5 rounded-2xl mx-auto "
            src={image}
            alt=""
          />
          {/* my name  */}
          <h1 className="box-border  text-2xl font-semibold">Yassin Masmoudi</h1>
          {/* profession name  */}
          <span className="font-medium mt-3 mb-2 inline-block  py-1 px-5 bg-gray-100 dark:bg-slate-800 text-[#a6a6a6]  rounded-md  ">
          Full-Stack Developer
          </span>
          {/* space for Socialicon  */}
          <Socialicon />
          {/* spacce for address and info  */}
          <Address />
          {/* download cv button  */}
          <a href="/as/cv yassin-2023.pdf">
          <button className="rounder-lg bg-gradient-to-r from-red-400  to-pink-500 py-3 px-5 my-4 text-xl text-white rounded-full flex mx-auto  ">
            <span className="">
              <svg
                className="fill-white mx-2 my-1"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
            </span>
            Download CV
          </button>
          </a>
          {/* add info contact like email phone etc  */}
        </div>
      </div>

      {/* second card detail card */}
    </div>
  );
}
export default Info;
