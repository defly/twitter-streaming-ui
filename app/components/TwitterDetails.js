import React, { Component } from 'react';
import TwitterForm from './TwitterForm';

export default class TwitterDetails extends Component {
  render() {
    const { saveTwitterCredentials, twitter_access_keys } = this.props;
    const onSubmit = (e) => {
      e.preventDefault();
      saveTwitterCredentials(twitter_access_keys.values);
    };

    return (
      <div className="padded-horizontally-more ">
        <h2>Twitter Access Tokens</h2>
        <TwitterForm handleSubmit={onSubmit} />
      </div>
    );
  }
}
