import React from 'react';

export const ContentText = React.createClass({
  render() {
    return (
      <div className="callout_content">

        <p>Immerse yourself in face-to-face learning and accelerate your success. UConnect brings Udacity to a city near you.</p>
        <p>Immerse yourself in face-to-face learning and accelerate your success. UConnect brings Udacity to a city near you.</p>
        {this.props.children}
      </div>
    )
  }
});
