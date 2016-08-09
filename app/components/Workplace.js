import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import TwitterQueryForm from './TwitterQueryForm';
import Tweets from './Tweets';

const Stats = (props) => {
  const { count } = props;
  return (
    <div className="pane pane-sm sidebar twitter-stats-bar">
      <p className="padded-horizontally"><span>Count: <strong>{count}</strong></span></p>
    </div>
  );
};

export default class Workplace extends Component {
  static propTypes = {
    checkTwitterCredentials: PropTypes.func,
    loadTwitterCredentials: PropTypes.func,
    twitter: PropTypes.object
  }
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    const { checkTwitterCredentials } = this.props;
    checkTwitterCredentials();
  }
  componentDidMount() {
    const { twitter, loadTwitterCredentials } = this.props;
    if (twitter.missing === true) {
      this.context.router.push('twitter-details');
    } else if (twitter.missing === false) {
      loadTwitterCredentials();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.twitter.missing === true) {
      this.context.router.push('twitter-details');
    }

    if (nextProps.twitter.has && !nextProps.twitter.loaded) {
      nextProps.loadTwitterCredentials();
    }
  }
  runQuery(e) {
    e.preventDefault();
    const { twitter_query_form, twitter, runQuery } = this.props;
    const query = twitter_query_form.values.query;
    console.log(twitter)
    const { credentials } = twitter;
    runQuery({ query, credentials });
  }
  stopQuery() {
    const { stopQuery } = this.props;
    stopQuery();
  }
  render() {
    const { twitter } = this.props;
    const { tweets } = twitter;
    const count = tweets.length;
    const hasTweets = count > 0;
    // console.log(this.props)
    return (
      <div className="padded-vertically">
        <div className="pane-group">
          <div className="pane">
            <TwitterQueryForm
              live={twitter.live}
              stop={this.stopQuery.bind(this)}
              handleSubmit={this.runQuery.bind(this)}
            />
            {hasTweets && <Tweets tweets={twitter.tweets} />}
          </div>
          {hasTweets && <Stats count={count} />}
        </div>
      </div>
    );
  }
}


