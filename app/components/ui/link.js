import React from 'react';
import * as Router from 'react-router';

export const Link = React.createClass({
  render() {
    let link;
    if(this.props.link) {
      if(this.props.isExternal) {
        link = <a href={this.props.link} {...this.props}>{this.props.children}</a>;
      } else {
        link = <Router.Link to={this.props.link} {...this.props}>{this.props.children}</Router.Link>;
      }
    } else if(this.props.action) {
      link = <span onClick={this.props.action} {...this.props}>{this.props.children}</span>;
    } else {
      link = <span {...this.props}>{this.props.children}</span>;
    }
    return (
      link
    )
  }
});
