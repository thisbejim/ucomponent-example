import React from 'react';
import { Link } from "./ui.js";

export const NavBanner = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    link: React.PropTypes.string,
    linkText: React.PropTypes.string,
    isExternal: React.PropTypes.bool
  },
  getInitialState() {
    return {
      open: true
    }
  },
  render() {
    let open = this.props.text && this.state.open? "block" : "none";
    return (
      <div className="top_banner" style={{display: open}}>
        <p>
          <span className="featured">Featured</span>
          {this.props.text} <Link link={this.props.link} isExternal={this.props.isExternal}>{this.props.linkText}</Link>
        </p>
        <a className="close_banner" onClick={() => this._close()}>
          <img src="https://d125fmws0bore1.cloudfront.net/assets/svgs/icon_close_white-fdd56924d93bedc020f2d079889bc5fb90f592deacba22272ba8b660b4a4e543.svg" />
        </a>
      </div>
    )
  },
  _close() {
    this.setState({open: false});
  }
});
