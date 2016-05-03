import React from 'react';

export const FeatureCards = React.createClass({
  render() {
    return (
      <section className="program_cards">
        <div className="contain">
          {this.props.children}
        </div>
      </section>
    )
  }
});
