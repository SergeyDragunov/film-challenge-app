import React from "react";
import PropTypes from 'prop-types';

const Page = props => <div>{props.children}</div>;

Page.propTypes = {
	children: PropTypes.node
}

export default Page;
