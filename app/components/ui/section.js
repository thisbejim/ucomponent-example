import React from 'react';

export const Section = React.createClass({
  render() {
    return (
      <section className="promo_callout">
        <div className="outer_contain">
          <div className="contain">
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
});
