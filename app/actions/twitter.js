import storage from 'electron-json-storage';
import { runDataSource, stopDataSource } from './../api/datasource';

export const GET_TWITTER_CREDENTIALS = 'GET_TWITTER_CREDENTIALS';
export const TWITTER_CREDENTIALS_LOADED = 'TWITTER_CREDENTIALS_LOADED';
export const NO_TWITTER_CREDENTIALS = 'NO_TWITTER_CREDENTIALS';
export const HAS_TWITTER_CREDENTIALS = 'HAS_TWITTER_CREDENTIALS';
export const SAVED_TWITTER_CREDENTIALS = 'SAVED_TWITTER_CREDENTIALS';
export const START_TWITTER_STREAM = 'START_TWITTER_STREAM';
export const STOP_TWITTER_STREAM = 'STOP_TWITTER_STREAM';
export const NEW_TWEETS_RECEIVED = 'NEW_TWEETS_RECEIVED';
export const CLEAR_TWEETS = 'CLEAR_TWEETS';

const TWITTER_CREDENTIALS_KEY = 'twitter_credentials';

export function checkTwitterCredentials() {
  return (dispatch) => {
    storage.has(TWITTER_CREDENTIALS_KEY, (err, hasKey) => {
      if (err) {
        console.error(err);
        // throw err;
      }

      if (hasKey) {
        dispatch({
          type: HAS_TWITTER_CREDENTIALS
        });
      } else {
        dispatch({
          type: NO_TWITTER_CREDENTIALS
        });
      }
    });
  };
}

export function saveTwitterCredentials(credentials) {
  return (dispatch) => {
    storage.set(TWITTER_CREDENTIALS_KEY, credentials, (err) => {
      if (err) {
        console.error(err);
      }
      dispatch(({
        type: SAVED_TWITTER_CREDENTIALS,
        payload: credentials
      }));
    });
  };
}


export function loadTwitterCredentials() {
  return (dispatch) => {
    storage.get(TWITTER_CREDENTIALS_KEY, (err, data) => {
      if (err) {
        console.error(err);
      }
      dispatch(({
        type: TWITTER_CREDENTIALS_LOADED,
        payload: data
      }));
    });
  };
}

export function runQuery(params) {
  return (dispatch) => {
    dispatch({
      type: START_TWITTER_STREAM,
      payload: params
    });

    runDataSource(params, (err, tweets) => {
      dispatch({
        type: NEW_TWEETS_RECEIVED,
        payload: tweets
      });
    });
  };
}

export function stopQuery() {
  return (dispatch) => {
    stopDataSource();
    dispatch({
      type: STOP_TWITTER_STREAM
    });
  };
}

export function clearTweets() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_TWEETS
    });
  };
}
