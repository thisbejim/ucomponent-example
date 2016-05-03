import React from 'react';
import { Link } from "./ui.js";

export const Card = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    title: React.PropTypes.string,
    summary: React.PropTypes.string,
    btnText: React.PropTypes.string,
    btnLink: React.PropTypes.string,
    btnAction: React.PropTypes.func,
    isExternal: React.PropTypes.bool
  },
  render() {
    return (
      <div className="_small-course--card--1EZkv small-card--card--1pCIp">
        <div className="_small-course--icon--vqrsH small-card--icon--fzvlx"></div>
        <div className="_small-course--body--2MzKW small-card--body--2P1HY">
          <div className="_small-course--info--P5BpX text--info-small--3vH6N text--info--1591w">{this.props.label}</div>
          <div className="_small-course--title--2aa7M small-card--h1--26ykS text--nowrap-ellipsis--TMdB3">{this.props.title}</div>
          <div style={{display: "block"}} className="_small-course--summary--ejBKu small-card--summary--2Y290">
            {this.props.summary}
          </div>
        </div>
        <div className="_small-course--footer--oDxdF small-card--footer--2vCDq">
          <Link link={this.props.btnLink} isExternal={this.props.isExternal} action={this.props.btnAction} style={{border: "1px solid transparent", padding: "12px 18px", width: "auto"}} className="btn btn-default _small-course--button--1Z4QC small-card--button--2Pnsy">
            {this.props.btnText}
          </Link>
        </div>
      </div>
    )
  }
});
