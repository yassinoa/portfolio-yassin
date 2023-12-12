import React from "react";
import Footer from "./Footer";

function ResumeDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black  rounded-2xl ">
        <div className="px-4 md:px-14 pt-6 lg:pt-14  space-y-4">
          {/* route title  */}

          <div className="flex md:space-x-7 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">Resume</h2>
            <div className=" relative ">
              {/* route line  */}
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>

          {/* description education  */}
          <div className=" py-5 space-y-2">
            <div className="flex space-x-3">
              <span className="">
                <svg
                  className="h-8 fill-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
                </svg>
              </span>
              <span className="text-2xl font-semibold text-black dark:text-white">
                Education
              </span>
            </div>
            <div className="dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 text-gray-500 text-sm ">
              {/* first education  */}
              <div className="bg-pink-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1">
                <p className="mb-2">2016</p>
                <p className="text-black dark:text-white text-lg font-normal">
                Applied License in multimedia and web technology
                </p>
                <p></p>
                <p >
                  ISIMS SFAX
                </p>
                
              </div>

              {/* second education  */}
              <div className="bg-purple-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3 space-y-1 ">
                <p className="mb-2">2017</p>
                <p className="text-black dark:text-white text-lg font-normal">
                WEB DEVELOPMENT PHP5
                </p>
                <p></p>
                <p >
                ITL LEARNING
                </p>
                
              </div>

              {/* third education  */}
              <div className="bg-yellow-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3 space-y-1 ">
                <p className="mb-2">2023</p>
                <p className="text-black dark:text-white text-lg font-normal">Full Stack Developer Professional Certificate </p>
                <p></p>
                <p >
                GOMYCODE
                </p>
                
              </div>
            </div>
          </div>

          {/* description skills  */}
          <div className="  space-y-2">
            <div className="flex space-x-3">
              <span className="">
                <svg
                  className="fill-red-500 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
                </svg>
              </span>
              <span className="text-2xl font-semibold text-black dark:text-white">Skills</span>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 text-gray-500 text-md ">
              {/* first education  */}
              <div className="bg-red-100 dark:text-[white] dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                  Development
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    React.js
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Express.js
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    MongoDB
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Node.js
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    JavaScript
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Html
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">CSS</span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Chakra UI
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Bootstrap
                  </span>
                </div>
              </div>

              {/* second skill  */}
              <div className="bg-orange-100 dark:text-white dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                  Programming
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">JavaScript</span>
                  
                </div>
              </div>

              {/* third skill  */}
              <div className="bg-cyan-100 dark:text-white dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                  CourseWork
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                  MERN From Scratch 2023 | eCommerce Platform
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                  Build an e-commerce app with React and Chakra UI MERN [2023]
                  </span>
                 
                </div>
              </div>

              {/* forth skill  */}
              <div className="bg-gray-200 dark:text-white dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                  Others
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    VS Code
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Postman
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    MongoDB Atlas
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    SQL 
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    NoSql
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Web Design 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
export default ResumeDetailCard;
