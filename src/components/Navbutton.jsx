import React from "react";
import { Link } from "react-router-dom";
function Navbutton(props) {

  return (
    <section onClick={props.onClick}>
      <li
        className={
          "toggle-button  bg-gray-100 dark:bg-slate-800 hover:bg-gradient-to-r from-red-400  to-pink-600 rounded-lg text-center h-[84px] w-[84px]  hover:text-white  group flex justify-center  " +
          (props.isClicked ? "bg-gradient-to-r from-red-400  to-pink-600 text-white" : "")
        }
      >
        <Link to={props.route}>
          <div className="p-4">
            {props.svgfile}
            <span className="text-sm">{props.name}</span>
          </div>
        </Link>
      </li>
    </section>
  );
}
export default Navbutton;
