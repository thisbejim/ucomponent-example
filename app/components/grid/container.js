import React from 'react';

export const Container = React.createClass({
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
});
