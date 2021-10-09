import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.scss';

CustomSelect.propTypes = {
    options: PropTypes.array,
    prompt: PropTypes.string,
    onChange: PropTypes.func,
};

function CustomSelect({ options, prompt, onChange }) {
    if (prompt === undefined || prompt === '') {
        prompt = options[0];
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(prompt);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleChange = (item) => {
        setValue(item);
        if (onChange) onChange(item);
    };
    const handleBlur = () => {
        setOpen(false);
    };

    return (
        <div
            className={`select${open ? ' open' : ''}`}
            onClick={handleClick}
            tabIndex={1}
            onBlur={handleBlur}
        >
            <span className="current">{value}</span>
            <ul className="list">
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleChange(option)}
                        className={`option ${option === value ? 'selected' : ''}`}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomSelect;
