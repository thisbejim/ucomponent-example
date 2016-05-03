import React from 'react';

export const Search = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    link: React.PropTypes.string,
  },
  render() {
    return (
      <div className="search">
        <div className="search_contain">
          <input type="search" placeholder="Search"/>
        </div>
      </div>
    )
  }
});
