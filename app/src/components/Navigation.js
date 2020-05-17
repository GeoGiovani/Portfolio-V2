import React from 'react';

function Navigation(props) {
    return(
      <nav className={props.navStyle}>
        <div className={props.navItemsStyle}>
          {props.navItems}
        </div>
      </nav>
    )
}

export default Navigation;