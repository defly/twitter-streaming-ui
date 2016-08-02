import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Workplace from '../components/Workplace';
import * as TwitterActions from '../actions/twitter';

function mapStateToProps(state) {
  return {
    twitter: state.twitter,
    routing: state.routing,
    twitter_query_form: state.form.twitter_query_form,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Workplace);
