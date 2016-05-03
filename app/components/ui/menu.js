import React from 'react';
import { Link } from 'react-router';

export const Menu = React.createClass({
  getInitialState() {
    return {
      open: true
    }
  },
  render() {
    const path =  this.props.path.replace("/", "");
    const header = this.state.open ? "index--header--1eFb7 index--with-nav--2gQ6G" : "index--header--1eFb7";
    const side = this.state.open ? "index--nav-expanded--2DAud index--nav--1O7pX" : "index--nav-hidden--2SToZ index--nav--1O7pX";
    const content = this.state.open ? "index--content--2nV81 index--with-nav--2gQ6G" : "index--content--2nV81";
    return (
      <div>
        <div className={header}>
          <div className="container-fluid">
            <div className="row">
              <nav className="index--header--1mrDQ">
                <div className="index--left-node-container--1Gz_w">
                  <div className="navbar-left">
                      <div onClick={() => this._toggle()} className="index--hamburger-icon-responsive--2_c3x index--hamburger-icon--ERGcw" />
                      <span className="index--left-title--1jh7y text--nowrap-ellipsis--TMdB3">{path}</span>
                  </div>
                </div>
              </nav>
            </div>
            <div className="row"></div>
          </div>
        </div>


        <div className="index--side-content--36CQQ">
          <div className={side}>
            <div className="_nav--nav--2l72Z">
              <a className="_nav--nav-header-container--2Vjdq">
                <div className="_nav--nav-header--1wgdH"></div>
              </a>



          <div className="_nav--top-link-container--amgYx">

            <Link to={'/nav'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Navbar</span>
            </Link>

            <Link to={'/navLink'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Nav Links</span>
            </Link>

            <Link to={'/navBanner'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Nav Banner</span>
            </Link>
            <Link to={'/header'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Header</span>
            </Link>
            <Link to={'/grid'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Grid</span>
            </Link>
            <Link to={'/progress'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Progress</span>
            </Link>
            <Link to={'/pagination/1'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Pagination</span>
            </Link>
            <Link to={'/search'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Search</span>
            </Link>
            <Link to={'/card'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Card</span>
            </Link>
            <Link to={'/icon'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Icons</span>
            </Link>
            <Link to={'/loader'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Loader</span>
            </Link>
            <Link to={'/button'} className="_nav--nav-group-expanded--11Nc0 _nav--nav-group--2IzdL">
              <span className="_nav--nav-link--14VlK text--unstyled-link--1WomO">Button</span>
            </Link>
          </div>
          </div>
          </div>
        </div>
        <div id="main-layout-content" className={content}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="_main--body--164fy layout--body--3U2qN">
                    {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  _toggle() {
    const toggle = this.state.open ? false : true;
    this.setState({open: toggle});
  }
});
