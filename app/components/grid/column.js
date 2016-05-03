import React from 'react';

export const Column = React.createClass({
  render() {
    let col = "";
    col = this.props.lg ? col + "col-lg-" + this.props.lg + " ": col;
    col = this.props.md ? col + "col-md-" + this.props.md + " ": col;
    col = this.props.sm ? col + "col-sm-" + this.props.sm + " ": col;
    col = this.props.xs ? col + "col-xs-" + this.props.xs + " ": col;
    return (
      <div className={col}>
        {this.props.children}
      </div>
    )
  }
});
