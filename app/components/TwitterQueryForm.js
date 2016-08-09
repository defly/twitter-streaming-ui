import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const TwitterQueryForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, live, stop } = props;
  const stopButton = <div className="btn btn-large btn-form btn-negative pull-left btn-twitter" onClick={stop}>Stop</div>;
  const runButton = <button type="submit" className="btn btn-large btn-form btn-positive pull-left btn-twitter">Run</button>;

  return (
    <div className="padded-horizontally-more ">
      <form onSubmit={handleSubmit}>
        <div className="form-group twitter-query-form-group">
          <Field
            name="query"
            component="input"
            type="text"
            className="form-control twitter-query pull-left"
            placeholder="Input query to Twitter Streaming API"
          />
          {live ? stopButton : runButton}
        </div>
      </form>
    </div>
  );
};

TwitterQueryForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'twitter_query_form'
})(TwitterQueryForm);
