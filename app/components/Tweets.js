import React, { PropTypes } from 'react';

const rows = 30;

const Tweets = (props) => {
  const { tweets } = props;
  const renderTweet = t => (
    <tr key={`${t.id_str} ${Math.random()}`}>
      <td>{t.user.screen_name}</td>
      <td style={{width: '800px'}}>{t.text}</td>
      <td>{t.user.location}</td>
    </tr>
  );
  return (
    <div className="padded-more">
      <table className="table-striped twitter-table" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Text</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {tweets.slice(0, tweets.length > rows ? rows : tweets.length).map(renderTweet)}
        </tbody>
      </table>
    </div>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.array
};

export default Tweets;

