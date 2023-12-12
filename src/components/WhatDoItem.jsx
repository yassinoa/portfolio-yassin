import React from "react";
function WhatDoItem(props) {
  return (
    <div className="px-4 md:px-14 py-5  ">
      <h1 className="text-2xl text-black font-semibold">What I do!</h1>
      {/* for what do box  */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* first box  */}
        <div className="bg-pink-100 rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
          {/* for icon  */}
          
            <svg
              className="h-6 w-10 my-2 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          
          {/* for text  */}
          <div className="">
            <h1 className="text-xl text-black font-semibold">
              Mern Stack Developer
            </h1>
            <p className="text-md">
              I have a good knowledge in frontend as well as backend. I have
              created lots of projects in Mern Stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatDoItem;
