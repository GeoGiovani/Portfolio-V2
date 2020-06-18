import React from 'react';
import { Link } from "react-scroll";

function NavButton(props) {
  return (
    <li className={props.buttonStyle}>
        <Link 
          className={props.linkStyle} 
          activeClass={props.activeStyle || ""} 
          to={props.to || ""} 
          spy={props.spy || true} 
          duration={props.duration || 500} 
          smooth={props.smooth || true}
        >
          {props.linkContents || ""}
        </Link>
    </li>
  );
}

export default NavButton;