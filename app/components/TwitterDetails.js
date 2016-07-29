import React, { Component } from 'react';
import { Link } from 'react-router';


export default class TwitterDetails extends Component {
  render() {
    return (
        <div className="padded-horizontally-more ">
          <h2>Twitter Access Tokens</h2>
          <form>
            <div className="form-group">
              <label>Consumer Key (API Key)</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Consumer Secret (API Secret)</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Access Token</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label> Access Token Secret</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-form btn-default">Submit</button>
            </div>
          </form>
      </div>
    );
  }
}
