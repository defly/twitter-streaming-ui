import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TwitterDetails from '../components/TwitterDetails';
import * as TwitterActions from '../actions/twitter';

function mapStateToProps(state) {
  return {
    twitter_setting: state.twitter_settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterDetails);
