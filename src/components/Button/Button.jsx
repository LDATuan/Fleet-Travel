import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Button.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
};

const STYLES = ['btn--primary', 'btn--secondary'];
const SIZES = ['btn--medium', 'btn--large'];

function Button({ type, size, content, onclick }) {
    const checkStyle = type ? type : STYLES[0];
    const checkSize = size ? size : SIZES[0];
    return (
        // <a className="button" href={link}>
        //     <div className="button__content">{content}</div>
        // </a>

        <button onClick={onclick} className={`btn ${checkStyle} ${checkSize}`}>
            {content}
        </button>
    );
}

export default Button;
