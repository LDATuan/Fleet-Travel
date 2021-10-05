import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.scss';
import { ReactComponent as RemoveCircle } from 'assets/icons/remove-circle-outline.svg';
import { ReactComponent as AddCircle } from 'assets/icons/add-circle-outline.svg';

TravelerItem.propTypes = {
    category: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

function TravelerItem({ category, text, onChange }) {
    const [count, setCount] = useState(0);
    const handleCounterPlus = () => {
        onChange(true);
        setCount(count + 1);
    };
    const handleCounterMinus = () => {
        onChange(false);
        setCount(count - 1);
    };
    return (
        <div className="traveler__item">
            <div className="traveler__detail">
                <div className="traveler__category">{category}</div>
                <div className="traveler__text">{text}</div>
            </div>
            <div className="counter">
                <div
                    className={`counter__icon ${count === 0 ? 'counter__icon--disable' : ''}`}
                    onClick={handleCounterMinus}
                >
                    <RemoveCircle />
                </div>
                <div className="counter__number">{count}</div>
                <div className="counter__icon" onClick={handleCounterPlus}>
                    <AddCircle />
                </div>
            </div>
        </div>
    );
}

export default TravelerItem;
