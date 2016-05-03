import React from 'react';

export const NavBar = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },
  render() {
    let open = this.state.open? "main nav--on" : "main";
    let navLinks, navBanner;
    if(this.props.children) {
      if(Array.isArray(this.props.children)) {
        navLinks = this.props.children.filter((child) => {
          return child.type.displayName == "NavLink"
        });
        navBanner = this.props.children.filter((child) => {
          return child.type.displayName == "NavBanner"
        });
      } else {
        if(this.props.children.type.displayName == "NavBanner") {
          navBanner = this.props.children;
        } else {
          navLinks = this.props.children;
        }
      }
    }
    return (
      <header className="global">
        {navBanner}
        <div className="contain clear">
          <a className="logo">
            <img alt="Udacity" src="https://d125fmws0bore1.cloudfront.net/assets/svgs/logo_wordmark-69d956c1e98fd8670993c03f4d3dcbb3b38fa80d7524a5cbabbc2544e319d3ef.svg"/>
          </a>
          <nav className={open}>
            <ul className="main_nav">
              {navLinks}
            </ul>
            <a className="nav_toggle" onClick={() => this._toggle()}>
              <span className="bar bar_top"></span>
              <span className="bar bar_mid"></span>
              <span className="bar bar_bottom"></span>
            </a>
          </nav>
        </div>
      </header>
    )
  },
  _toggle() {
    const open = this.state.open ? false : true;
    this.setState({open: open});
  }
});
