import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <nav className={this.props.navStyle}>
        <div className={this.props.navItemstStyle}>
          {this.props.navItems}
        </div>
      </nav>
    )
  }
}

export default Navigation;