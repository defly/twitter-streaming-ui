import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class NavItem extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    const { disabled, icon, path, title } = this.props;
    const iconSpan = <span className={`icon ${icon}`}></span>;
    return (
      <span>
        {disabled ? (
          <span className={classNames({'nav-group-item': true, 'nav-group-item_disabled': disabled})}>
            {iconSpan}
            {title}
          </span>
        ) : (
          <Link
            to={path}
            activeClassName="active"
            className={classNames({ 'nav-group-item': true })}
          >
            {iconSpan}
            {title}
          </Link>
        )}
      </span>
    );
  }
}

class Nav extends Component {
  render() {
    const disabled = true;
    console.log(this.props)
    return (
      <nav className="nav-group padded-vertically">
        <NavItem path="/workplace" icon="icon-home" title="Workplace" disabled={disabled} />
        <NavItem path="/twitter-details" icon="icon-cog" title="Twitter API Settings" />
        <NavItem path="/help" icon="icon-help" title="Help" />
      </nav>
    );
  }
}

export default Nav;
