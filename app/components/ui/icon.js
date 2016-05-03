import React from 'react';

export const Icon = React.createClass({
  getDefaultProps() {
    return {
      icon: "logomark",
      width: 32,
      height: 32
    }
  },
  render() {
    const icons = {
      "spinner": "https://d3u3u7bjn61hwm.cloudfront.net//images/spinner-4eabb.svg",
      "wordmark": "https://d3u3u7bjn61hwm.cloudfront.net//images/asset-udacity-wordmark-bcba2.svg",
      "logomark": "https://d3u3u7bjn61hwm.cloudfront.net//images/asset-logo-mark-e78b9.svg",
      "home-gray": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-link-home-gray-70bb0.svg",
      "home-white": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-link-home-white-ae14d.svg",
      "settings-gray": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-settings-gray-9d522.svg",
      "settings-white": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-settings-white-9c44d.svg",
      "compass-gray": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-catalog-compass-gray-5f004.svg",
      "compass-white": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-catalog-compass-white-d1174.svg",
      "forums-gray": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-forums-gray-9771e.svg",
      "forums-white": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-forums-white-b0edd.svg",
      "logout-gray": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-logout-gray-e22d2.svg",
      "logout-white": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-logout-white-23277.svg",
      "hamburger": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-hamburger-0c143.svg",
      "certificate": "https://d3u3u7bjn61hwm.cloudfront.net//images/certificate-e3563.svg",
      "profile-gray": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-profile-gray-bf177.svg",
      "profile-white": "https://d3u3u7bjn61hwm.cloudfront.net//images/icon-profile-white-a524f.svg",
      "twitter-gray": "https://d125fmws0bore1.cloudfront.net/assets/svgs/social_twitter-9d5df2d90c83133e469f14478749086159188f83283876c13d6b5956e84c927c.svg",
      "facebook-gray": "https://d125fmws0bore1.cloudfront.net/assets/svgs/social_facebook-db4737e8debd34185dffa30be1a417fb126d36384386d7ac63d3b2a226b2277f.svg",
      "googlePlus-gray": "https://d125fmws0bore1.cloudfront.net/assets/svgs/social_gplus-50c4b2873372dfa9615fc41111638266df1817e5d2d1dd72b0d72ac6c373b3b3.svg",
      "linkedIn-gray": "https://d125fmws0bore1.cloudfront.net/assets/svgs/social_linkedin-8fc4751fca48e5ef25bd402cab4e0b7db953559f32d4e616f9328167edbef062.svg"
    }
    return (
      <div style={{backgroundImage: 'url(' + icons[this.props.icon] + ')', width: this.props.width, height: this.props.height,
      backgroundRepeat: "no-repeat", verticalAlign: "middle", backgroundPosition: "50%", display: "inline-block"}} />
    )
  }
});
