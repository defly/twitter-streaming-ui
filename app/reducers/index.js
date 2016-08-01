import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import twitter from './twitter';

const rootReducer = combineReducers({
  counter,
  routing,
  twitter,
  form: formReducer
});

export default rootReducer;
