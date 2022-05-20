import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      menuVisible: false
    };
  }

  showMenu(event) {
    if (event.target.id !== 'menu-icon' && !this.state.menuVisible) {
      return false;
    } else if (event.target.id === 'menu-icon' && !this.state.menuVisible) {
      this.setState({ menuVisible: true });
    } else if (event.target.id === 'drawer' || event.target.tagName === 'LI') {
      this.setState({ menuVisible: false });
    }
  }

  render() {
    let hideDrawer = 'hidden';

    let hideIcon = '';
    if (this.state.menuVisible) {
      hideIcon = 'hidden';
      hideDrawer = '';
    }
    return (
      <div onClick={this.showMenu}>
        <img src="../images/React-icon.svg.png" alt="" />
        <div className={`icon ${hideIcon}`}>
          <i id="menu-icon" className="fa-solid fa-bars" onClick={this.showMenu}></i>
        </div>
        <div id="drawer" className={hideDrawer}>
          <div className="background-image"></div>
          <div className= "menu">
            <ul>
              <h3>Menu</h3>
              <li>About</li>
              <li>Get Started</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
