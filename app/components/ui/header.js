import React from 'react';

export const Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
  },
  render() {
    return (
      <div className="hero">
        <div style={{backgroundImage: "url('../images/homepage_hero.jpg')"}} className="outer_contain">
          <div className="contain">
            <div className="hero_content clear">
              <div className="hero__text">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
