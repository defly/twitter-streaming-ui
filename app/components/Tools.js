import React from 'react';

const Tools = (props) => {
  const { clearTweets } = props;
  return (
    <div className="twitter-tools padded-horizontally-more">
      <button className="btn btn-default" onClick={clearTweets}>
        <span className="icon icon-home icon-erase"></span><span>&nbsp;</span><span>Clear</span>
      </button>
    </div>
  );
};

export default Tools;
