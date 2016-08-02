import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import TwitterQueryForm from './TwitterQueryForm';
import Tweets from './Tweets';

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
    // console.log(this.props)
    return (
      <div className="padded-vertically">
        <TwitterQueryForm live={twitter.live} stop={this.stopQuery.bind(this)} handleSubmit={this.runQuery.bind(this)} />
        <Tweets tweets={twitter.tweets} />
      </div>
    );
  }
}
