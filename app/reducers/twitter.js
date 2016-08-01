import {
  NO_TWITTER_CREDENTIALS,
  HAS_TWITTER_CREDENTIALS,
  SAVED_TWITTER_CREDENTIALS,
  TWITTER_CREDENTIALS_LOADED
} from '../actions/twitter';

const initial = {
  // missing: true
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
    default:
      return state;
  }
}
