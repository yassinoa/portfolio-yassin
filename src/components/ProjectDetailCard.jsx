import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

import projectDetails from "./projectDetails.js";

function ProjectDetailCard() {
  // Initialize the projectNav state from localStorage or set it to the default value (0)
  const [projectNav, setProjectNav] = useState(() => {
    const storedProjectNav = localStorage.getItem("projectNav");
    return storedProjectNav ? parseInt(storedProjectNav) : 0;
  });

  // Update localStorage whenever projectNav changes
  useEffect(() => {
    localStorage.setItem("projectNav", projectNav.toString());
  }, [projectNav]);
  // handle click for 'All' title
  const handleNavAll = () => {
    setProjectNav(0);
  };
  // handle click for 'Frontend' title
  const handleNavFE = () => {
    setProjectNav(1);
  };
  // handle click for 'Full Stack' title
  const handleNavFS = () => {
    setProjectNav(2);
  };
  // // handle click for 'Design' title
  // const handleNavA = () => {
  //   setProjectNav(3);
  // };
  // // handle click for 'Design' title
  // const handleNavD = () => {
  //   setProjectNav(4);
  // };

  return (
    <section>
      {/* for outer box which has whtie bg  */}
      <div className="bg-white dark:bg-black rounded-2xl dark:text-[#a6a6a6] ">
        {/* added padding to outer div bg-white  */}
        <div className="px-4 md:px-14 pt-14  ">
          {/* title  */}
          <div className="flex md:space-x-7 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">
              Projects
            </h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>

          {/* projects  */}
          <div className="my-5 space-y-7" id="project">
            {/* for project navigation  */}
            <div className="flex justify-end space-x-7">
              <span
                onClick={handleNavAll}
                className={
                  "cursor-pointer hover:text-red-500 font-semibold  " +
                  (projectNav === 0 ? "text-red-500" : "")
                }
              >
                All
              </span>
              <span
                onClick={handleNavFE}
                className={
                  "cursor-pointer hover:text-red-500 font-semibold  " +
                  (projectNav === 1 ? "text-red-500" : "")
                }
              >
                Frontend
              </span>
              <span
                onClick={handleNavFS}
                className={
                  "cursor-pointer hover:text-red-500 font-semibold  " +
                  (projectNav === 2 ? "text-red-500" : "")
                }
              >
                Full-Stack
              </span>
                        {/* <span
                          onClick={handleNavA}
                          className={
                            "cursor-pointer hover:text-red-500 font-semibold  " +
                            (projectNav === 3 ? "text-red-500" : "")
                          }
                        >
                          API
                        </span>
                        <span
                          onClick={handleNavD}
                          className={
                            "cursor-pointer hover:text-red-500 font-semibold  " +
                            (projectNav === 4 ? "text-red-500" : "")
                          }
                        >
                          Design
                        </span> */}
            </div>

            {/* for project cards  */}
            {/* for only all , display all projects  */}
            {
              projectNav===0 && <div className="grid sm:grid-cols-2 ">
              {
                projectDetails.map((projectDetail,index)=>(
                  (<ProjectCard 
                    index={index}
                    img={projectDetail.image}
                    tag={projectDetail.tag}
                    title={projectDetail.title}
                    description={projectDetail.description}
                    features={projectDetail.features}
                    source={projectDetail.source}
                    link={projectDetail.link}
                    linkStatus={projectDetail.linkStatus}
                    frontend={projectDetail.frontend}
                    backend={projectDetail.backend}
                    />)
                ))
              }
            </div>
            }


            {/* for specific tag only  */}
            {
              <div className="grid sm:grid-cols-2 ">
              {
                projectDetails.map((projectDetail,index)=>(

                  ( projectNav===projectDetail.id &&
                  <ProjectCard 
                    index={index}
                    img={projectDetail.image}
                    tag={projectDetail.tag}
                    title={projectDetail.title}
                    description={projectDetail.description}
                    features={projectDetail.features}
                    source={projectDetail.source}
                    link={projectDetail.link}
                    linkStatus={projectDetail.linkStatus}
                    frontend={projectDetail.frontend}
                    backend={projectDetail.backend}
                    />)
                ))
              }
            </div>
            }
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
export default ProjectDetailCard;
