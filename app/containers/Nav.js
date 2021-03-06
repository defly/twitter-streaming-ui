import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import * as TwitterActions from '../actions/twitter';

function mapStateToProps(state) {
  return {
    routing: state.routing,
    twitter: state.twitter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
