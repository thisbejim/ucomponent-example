import React from 'react';
import { Link } from "./ui.js";

export const Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    link: React.PropTypes.string,
    action: React.PropTypes.func,
    isExternal: React.PropTypes.bool,
  },
  render() {
    return (
      <Link action={this.props.action} link={this.props.link} isExternal={this.props.isExternal} className="callout_btn">
        {this.props.text}
      </Link>
    )
  }
});
