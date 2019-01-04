import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const LinkButton = ({link, label}) => (
    <div className="link_btn">
        <Link to={link}>{label}</Link>
    </div>
);

LinkButton.propTypes = propTypes;

export default LinkButton;
