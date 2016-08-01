import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const TwitterQueryForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="padded-horizontally-more ">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field name="query" component="input" type="text" className="form-control" placeholder="Input query to Twitter Streaming API" />
          <button type="submit" className="btn btn-form btn-default">Submit</button>
        </div>
{/*        <div className="form-actions">
        </div>*/}
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
