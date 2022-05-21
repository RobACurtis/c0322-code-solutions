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
    let modal = 'opacity';
    let menuOn = '';
    let hideIcon = '';
    if (this.state.menuVisible) {
      hideIcon = 'opacity';
      modal = '';
      menuOn = 'is-on';
    }
    return (
      <div onClick={this.showMenu}>
        <div className={hideIcon}>
          <i id="menu-icon" className="fa-solid fa-bars" onClick={this.showMenu}></i>
        </div>
        <div id="drawer" className={modal}>
          <div className="menu-shade"></div>
          <div className= {`menu ${menuOn}`}>
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
