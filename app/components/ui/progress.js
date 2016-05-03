import React from 'react';

export const Progress = React.createClass({
  propTypes: {
    percent: React.PropTypes.number,
    color: React.PropTypes.oneOf(['green', 'blue'])
  },
  getDefaultProps() {
    return {
      percent: 0,
      color: 'green'
    }
  },
  render() {
    const color = this.props.color == "green" ? "#15c26b" : "#02b3e4";
    return (
      <div className="_large-course--completion--2om4S" style={{display: "block"}}>
        <div className="_large-course--completion-bar--3E7mL">
          <div className="completion-bar--completion-bar--3sVoB">
            <div className="completion-bar--bar--2kmgt">
              <div style={{width: this.props.percent+"%", background: color}} className="completion-bar--fill--P0Vk6"></div>
            </div>
          </div>
        </div>
        <div className="_large-course--completion-text--2aDoq">
          {this.props.percent}% COMPLETE
        </div>
      </div>
    )
  }
});
