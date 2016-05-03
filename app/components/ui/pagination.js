import React from 'react';
import { Link } from "./ui.js";
import { browserHistory } from 'react-router'

export const Pagination = React.createClass({
  propTypes: {
    selectors: React.PropTypes.number,
    selected: React.PropTypes.number,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
  },
  render() {
    let selected;
    const selectors = [];
    // default arrow styles
    let leftArrow = (
      <div onClick={() => browserHistory.push(this.props.baseUrl + "/" + (Number(this.props.selected) - 1))} className="_pagination--_arrow--2yF30">
        <div className="glyphicon glyphicon-menu-left"></div>
      </div>
    )
    let rightArrow = (
      <div onClick={() => browserHistory.push(this.props.baseUrl + "/" + (Number(this.props.selected) + 1))} className="_pagination--arrow--1gAq0 _pagination--_arrow--2yF30">
        <div className="glyphicon glyphicon-menu-right"> </div>
      </div>
    )
    const lol = [];
    // build selectors
    for(var i = this.props.selected; i < this.props.selected + this.props.selectors && i <= this.props.max; i++) {

      // grey out arrows if we hit min or max
      if(i == this.props.max) {
        rightArrow = (
          <div className="_pagination--arrow-disabled--2soj2 _pagination--arrow--1gAq0 _pagination--_arrow--2yF30 _pagination--disabled--1D34l">
            <div className="glyphicon glyphicon-menu-right"> </div>
          </div>
        )
      }
      if(i == this.props.min) {
        leftArrow = (
          <div className="_pagination--arrow-disabled--2soj2 _pagination--_arrow--2yF30 _pagination--disabled--1D34l">
            <div className="glyphicon glyphicon-menu-left"></div>
          </div>
        )
      }

      // only push unselected selectors
      if(i == this.props.selected) {
        selected = <div className="_pagination--page-number-selected--Hd7x4 _pagination--_page-number--13nYu">{i}</div>
      } else {
        const page = i;
        selectors.push(<Link action={() => {
          browserHistory.push(this.props.baseUrl + "/" + page)
        }} key={page} className="_pagination--page-number--2AkSe _pagination--_page-number--13nYu">{page}</Link>)
      }
    }

    return (
      <div>
        {leftArrow}
        {selected}
        {selectors}
        {rightArrow}
      </div>
    )
  }
});
