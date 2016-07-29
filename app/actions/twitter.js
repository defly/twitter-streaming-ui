import storage from 'electron-json-storage';
export const GET_TWITTER_CREDENTIALS = 'GET_TWITTER_CREDENTIALS';
export const TWITTER_CREDENTIALS_LOADED = 'TWITTER_CREDENTIALS_LOADED';

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

export function getTwitterCredentials() {
  return (dispatch) => {
    dispatch({
      type: GET_TWITTER_CREDENTIALS
    });

    storage.get('twitter_credentials', function(err, data) {
      if (err) {
        console.error(err);
      }

      dispatch({
        type: TWITTER_CREDENTIALS_LOADED,
        payload: data
      })
    });
  }
}

// export function incrementAsync(delay = 1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
// }
