import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames';

class NavItem extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    index: PropTypes.bool,
    icon: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    const { disabled, icon, path, title, index } = this.props;
    const iconSpan = <span className={`icon ${icon}`}></span>;
    const createDisabled = () => (
      <span className={classNames({ 'nav-group-item': true, 'nav-group-item_disabled': disabled })}>
        {iconSpan}
        {title}
      </span>
    );
    const createLink = (i) => (
      <Link
        to={path}
        activeClassName="active"
        className={classNames({ 'nav-group-item': true })}
        onlyActiveOnIndex={i}
      >
        {iconSpan}
        {title}
      </Link>
    );

    return (
      <span>
        {disabled ? createDisabled() : createLink(index)}
      </span>
    );
  }
}

class Nav extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  render() {
    const { twitter: { missing } } = this.props;
    return (
      <nav className="nav-group padded-vertically">
        <NavItem path="/" icon="icon-home" title="Workplace" index={true} disabled={missing} />
        <NavItem path="/twitter-details" icon="icon-cog" title="Twitter API Settings" />
      </nav>
    );
  }
}

export default Nav;
