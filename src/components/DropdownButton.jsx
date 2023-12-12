import React from "react";
function DropdownButton(props) {
    return( <li onClick={props.onClick}>
        <a href={props.route}>
          <div className={"block hover:text-red-500 group  ml-8 p-2   space-x-2"+(props.isClicked ? " text-red-500" : "")}>
          {props.svgfile}
          <span>{props.name}</span>
          </div>  
        </a>
      </li>)
   
}

export default DropdownButton;
