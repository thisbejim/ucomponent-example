import React from 'react';

export const ContentImage = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    link: React.PropTypes.string,
  },
  render() {
    return (
      <div className="callout_image">
        <img src="https://d125fmws0bore1.cloudfront.net/assets/pages/uconnect/collage@1x-95a4c72790b04036fa179a9b58067e4cdf59ee30ea3ca3827700cba809b1c4d3.png" />
      </div>
    )
  }
});
