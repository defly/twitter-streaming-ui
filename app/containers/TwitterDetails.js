import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TwitterDetails from '../components/TwitterDetails';
import * as TwitterActions from '../actions/twitter';

function mapStateToProps(state) {
  return {
    twitter: state.twitter,
    twitter_access_keys: state.form.twitter_access_keys
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterDetails);
