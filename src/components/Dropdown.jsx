import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DropdownButton from "./DropdownButton.jsx";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const [activeButton, setActiveButton] = useState(-1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const svgs = [
    <svg
      className={
        "fill-gray-400 inline w-6 h-6   group-hover:fill-red-500  " +
        (activeButton === 0 ? "fill-red-500" : "")
      }
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
    >
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>,
    <svg
      className={
        "fill-gray-400 inline w-6 h-6   group-hover:fill-red-500  " +
        (activeButton === 1 ? "fill-red-500" : "")
      }
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
    >
      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>,
    <svg
      className={
        "fill-gray-400 inline w-6 h-6   group-hover:fill-red-500  " +
        (activeButton === 2 ? "fill-red-500" : "")
      }
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
    >
      <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z" />
    </svg>,
    <svg
      className={
        "fill-gray-400 inline w-6 h-6   group-hover:fill-red-500  " +
        (activeButton === 3 ? "fill-red-500" : "")
      }
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
    </svg>,
    <svg
      className={
        "fill-gray-400 inline w-6 h-6   group-hover:fill-red-500  " +
        (activeButton === 4 ? "fill-red-500" : "")
      }
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
    </svg>,
  ];

  const infos = [
    { route: "/", name: "About", svgfile: svgs[0] },
    { route: "/resume", name: "Resume", svgfile: svgs[1] },
    { route: "/project", name: "Projects", svgfile: svgs[2] },
    // { route: "/work", name: "Works", svgfile: svgs[3] },
    { route: "/contact", name: "Contact", svgfile: svgs[4] },
  ];

  const foundActiveButton = infos.findIndex((info) => info.route === pathname);
  if (foundActiveButton !== activeButton) {
    setActiveButton(foundActiveButton);
  }
  return (
    <div className=" xl:hidden">
      <button onClick={toggleDropdown}>
        <div className="w-10 h-10 bg-red-600 hover:bg-blue-600 shadow-lg rounded-full cursor-pointer p-3">
          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class=" fill-white"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          )}

          {isOpen && (
            <svg
              className="mx-auto fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <style></style>
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className={
            "absolute right-0 md:right-5   mt-10  w-11/12  bg-white dark:bg-slate-800 border rounded-lg shadow-lg mx-5 transition-transform  duration-500  text-md font-semibold "
          }
        >
          <ul className="text-gray-400 space-y-2 my-2">
            {infos.map((info, index) => (
              <DropdownButton
                key={index}
                route={info.route}
                name={info.name}
                svgfile={info.svgfile}
                onclick={() => setActiveButton(index)}
                isClicked={index === activeButton}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
