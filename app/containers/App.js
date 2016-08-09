import React, { Component, PropTypes } from 'react';
import Nav from './Nav';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane pane-sm sidebar">
              <Nav />
            </div>
            <div className="pane twitter-main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
