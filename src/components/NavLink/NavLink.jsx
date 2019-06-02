import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Link = props => (
  <NavLink
    exact
    to={props.to}
    className={props.className}
    activeClassName="selected"
    {...props}
  >
    {props.children}
  </NavLink>
);


Link.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Link;