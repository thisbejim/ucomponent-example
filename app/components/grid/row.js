import React from 'react';

export const Row = React.createClass({
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
});
