import React from 'react';
import { Link } from "./ui.js";

export const NavLink = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    link: React.PropTypes.string,
    isExternal: React.PropTypes.bool,
    action: React.PropTypes.func
  },
  render() {
    return (
      <li className="nanodegree_link">
        <Link link={this.props.link} isExternal={this.props.isExternal} action={this.props.action}>{this.props.text}</Link>
      </li>
    )
  }
});
