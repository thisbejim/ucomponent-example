import React from 'react';

export const GridCard = React.createClass({
  propTypes: {
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,

    footerTitle: React.PropTypes.string,
    footerImage: React.PropTypes.string,

    link: React.PropTypes.string,
    linkText: React.PropTypes.string,

    btnLink: React.PropTypes.string,
    btnText: React.PropTypes.string,
    
    backgroundImage: React.PropTypes.oneOf(['nd009', 'nd001', 'nd801', 'nd002',
    'nd802', 'nd003', 'nd020', 'nd010', 'nd007', 'nd004', 'nd030', 'nd006',
    'nd011', 'nd803', 'nd012']),
  },
  getDefaultProps() {
    return {
      backgroundImage: 'nd001'
    }
  },
  render() {
    const cardClass = `card nanodegree_card ${this.props.backgroundImage}`;
    return (
      <div className={cardClass}>
      <a href={this.props.link}>
        <h4>{this.props.category}</h4>
        <div className="desc">
          <h2>{this.props.title}</h2>
          <h3>{this.props.subtitle}</h3>
          <span className="more_link">{this.props.linkText}</span>
        </div>
        <div className="co_created">
          <h5>{this.props.footerTitle}</h5>
          <ul className="partners">
            <li>
              <img src={this.props.footerImage}/>
            </li>
          </ul>
        </div>
      </a>
        <div className="enroll_btn">
          <a href={this.props.btnLink} className="callout_btn">{this.props.btnText}</a>
        </div>
      </div>
    )
  }
});
