import storage from 'electron-json-storage';
import { ipcRenderer } from 'electron';

export const GET_TWITTER_CREDENTIALS = 'GET_TWITTER_CREDENTIALS';
export const TWITTER_CREDENTIALS_LOADED = 'TWITTER_CREDENTIALS_LOADED';
export const NO_TWITTER_CREDENTIALS = 'NO_TWITTER_CREDENTIALS';
export const HAS_TWITTER_CREDENTIALS = 'HAS_TWITTER_CREDENTIALS';
export const SAVED_TWITTER_CREDENTIALS = 'SAVED_TWITTER_CREDENTIALS';
export const START_TWITTER_STREAM = 'START_TWITTER_STREAM';
export const STOP_TWITTER_STREAM = 'STOP_TWITTER_STREAM';
export const NEW_TWEET_RECEIVED = 'NEW_TWEET_RECEIVED';

const TWITTER_CREDENTIALS_KEY = 'twitter_credentials';

export function checkTwitterCredentials() {
  // storage.keys((err, keys) => console.log('keys', keys));
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
        // throw err;
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
        // throw err;
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

    ipcRenderer.send('stream:start', params);

    if (!ipcRenderer.lockStream) {
      ipcRenderer.on('stream:tweet', (event, tweet) => {
        dispatch({
          type: NEW_TWEET_RECEIVED,
          payload: tweet
        });
      });

      ipcRenderer.on('stream:error', (event, err) => {
        console.error(err);
      });

      ipcRenderer.lockStream = true;
    }
  };
}

export function stopQuery() {
  return (dispatch) => {
    ipcRenderer.send('stream:stop', true);
    dispatch({
      type: STOP_TWITTER_STREAM
    });
  };
}

