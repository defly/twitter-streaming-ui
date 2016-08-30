import {
  NO_TWITTER_CREDENTIALS,
  HAS_TWITTER_CREDENTIALS,
  SAVED_TWITTER_CREDENTIALS,
  TWITTER_CREDENTIALS_LOADED,
  NEW_TWEETS_RECEIVED,
  START_TWITTER_STREAM,
  STOP_TWITTER_STREAM,
  CLEAR_TWEETS
} from '../actions/twitter';

const initial = {
  tweets: [],
  live: false,
  cleared: false,
  settings: []
};

export default function twitter(state = initial, action) {
  switch (action.type) {
    case NO_TWITTER_CREDENTIALS:
      return {
        ...state,
        missing: true,
        has: false
      };
    case HAS_TWITTER_CREDENTIALS:
      return {
        ...state,
        missing: false,
        has: true
      };
    case SAVED_TWITTER_CREDENTIALS:
      return {
        ...state,
        missing: false
      };
    case TWITTER_CREDENTIALS_LOADED:
      return {
        ...state,
        loaded: true,
        credentials: action.payload
      };
    case START_TWITTER_STREAM:
      return {
        ...state,
        live: true
      };
    case STOP_TWITTER_STREAM:
      return {
        ...state,
        live: false
      };
    case NEW_TWEETS_RECEIVED:
      return {
        ...state,
        tweets: state.tweets.concat(action.payload)
      };
    case CLEAR_TWEETS:
      return {
        ...state,
        cleared: true,
        tweets: []
      };
    default:
      return state;
  }
}
