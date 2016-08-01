import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const TwitterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="padded-horizontally-more ">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Consumer Key (API Key)</label>
          <Field name="consumerKey" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Consumer Secret (API Secret)</label>
          <Field name="consumerSecret" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Access Token</label>
          <Field name="accessToken" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Access Token Secret</label>
          <Field name="accessTokenSecret" component="input" type="text" className="form-control" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-form btn-default">Submit</button>
        </div>
      </form>
    </div>
  );
};

TwitterForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'twitter_access_keys'
})(TwitterForm);
