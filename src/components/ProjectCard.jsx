import React, { useState } from "react";

function ProjectCard(props) {
  // i think usestate should added in projectdetildcard
  const [isCardClick, setIsCardClick] = useState(false);
  const handleClick = () => {
    setIsCardClick(true);
  };

  //   for closing the popup
  const closeModal = () => {
    setIsCardClick(false);
  };
  console.log(typeof props.index);

  return (
    <section>
      <div
        onClick={handleClick}
        // you must set a gap between where m-3 end else not work 
        className={"dark:bg-slate-800 rounded-xl p-4 cursor-pointer space-y-4  group m-3 " + (props.index%2 === 0 ? "bg-purple-200" : "bg-lime-200")}
      >
        <div className="relative space-y-6">
          <div className="rounded-lg overflow-hidden ">
            <img
              className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
              src={props.img}
              alt="pic"
            />
          </div>
          <div>
            <p className="text-xs">{props.tag}</p>
            <p className="light:text-black">{props.title}</p>
          </div>
        </div>
      </div>

      {/* is card get clicked then float this message  */}
      {isCardClick && (
        //  this is floating start
        <div className=" fixed inset-0 flex  z-50 ">
          {/* for only adding opacity  */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* this is floating box  white */}

          {/* button div  */}
          <div className="absolute bg-transparent  border-1 border-white rounded-full top-4  right-4  lg:top-6 lg:right-52 xl:right-72">
            {/* button for handle close  */}
            <button
              onClick={closeModal}
              className="rotate-90 transform origin-center transition-transform hover:rotate-0 duration-500"
            >
              <svg
                className="h-10 text-white hover:text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div className=" fixed  bg-white dark:bg-gray-900 shadow-md mx-2 md:w-10/12 lg:w-7/12 md:mx-auto inset-0  p-4 sm:p-8  z-51 my-16 rounded-xl overflow-y-auto ">
            {/* for overflow handle wrap in to div  */}
            <div className="  ">
              {/* for  content   */}
              <div className="">
                {/* put your content inside this  */}
                {/* title  */}

                <h1 className=" text-center  text-2xl font-semibold text-red-600 mb-4">
                  {props.title}
                </h1>
                {/* for source links  */}
                <div className="grid sm:grid-cols-2 ">
                  {/* for project title  */}
                  <p className="p-2 flex space-x-1">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </span>
                    Project :{" "}
                    <span className="light:text-black font-semibold">
                      {props.title}
                    </span>
                  </p>
                  {/* for team size  */}
                  <p className="p-2 flex space-x-1 ">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    Team Size :{" "}
                    <span className="light:text-black font-semibold">1</span>
                  </p>

                  {/* for github source  */}
                  <p className="p-2 flex space-x-1">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </span>
                    Source :{" "}
                    <a
                      href={props.source}
                      className="light:text-black font-semibold hover:text-blue-500"
                    >
                      github
                    </a>
                  </p>

                  {/* for hosted link  */}
                  <p className="p-2 flex space-x-1  ">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </span>
                    Preview :{" "}
                    <a
                      href={props.link}
                      className="light:text-black font-semibold hover:text-blue-500"
                    >
                      {props.linkStatus}
                    </a>
                  </p>
                </div>

                {/* desciption  */}
                <div className="mt-10">
                  <h1 className="text-lg  font-semibold my-2">Description:</h1>
                  <p>{props.description}</p>
                </div>

                {/* for features  */}
                <div className="mt-10">
                  <h1 className="text-lg font-semibold my-2">Features:</h1>
                  <p>{props.features}</p>
                </div>
                {/* for Technologies  */}
                <div className="mt-10">
                  <h1 className="text-lg font-semibold my-2">Technologies:</h1>
                  <p>
                    <span className="font-semibold">Frontend: </span>
                    {props.frontend}
                  </p>
                  <p>
                    <span className="font-semibold">Backend: </span>
                    {props.backend}
                  </p>
                </div>

                {/* for image  */}
                <div className="mt-10">
                  <img
                    className="rounded-lg justify-center mx-auto"
                    src={props.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default ProjectCard;
