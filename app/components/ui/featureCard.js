import React from 'react';

export const FeatureCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    btnText: React.PropTypes.string,
    backgroundImage: React.PropTypes.oneOf(['card_nanodegree', 'card_free']),
  },
  getDefaultProps() {
    return {
      backgroundImage: 'card_nanodegree'
    }
  },
  render() {
    const cardClass = `program_card ${this.props.backgroundImage}`;
    return (
      <div className={cardClass}>
        <div className="card_content">
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
          <a className="program_card_link">{this.props.btnText}</a>
        </div>
      </div>
    )
  }
});
