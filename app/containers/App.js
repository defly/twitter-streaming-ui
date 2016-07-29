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
            <div className="pane">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="toolbar toolbar-footer">
          <h1 className="title">Artem Bei</h1>
        </footer>
      </div>
    );
  }
}
