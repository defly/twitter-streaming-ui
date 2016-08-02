import {
  NO_TWITTER_CREDENTIALS,
  HAS_TWITTER_CREDENTIALS,
  SAVED_TWITTER_CREDENTIALS,
  TWITTER_CREDENTIALS_LOADED,
  NEW_TWEET_RECEIVED,
  START_TWITTER_STREAM,
  STOP_TWITTER_STREAM
} from '../actions/twitter';

const initial = {
  tweets: [],
  live: false
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
    case NEW_TWEET_RECEIVED:
      return {
        ...state,
        tweets: [action.payload].concat(state.tweets)
      };
    default:
      return state;
  }
}
