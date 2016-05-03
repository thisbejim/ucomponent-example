import React from 'react';

export const GridCards = React.createClass({
  render() {
    return (
      <section className="nanodegrees-list" style={{lineHeight: "initial"}}>
        <div className="contain">
          <div className="cards_contain nanodegree_cards visible">
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
});
