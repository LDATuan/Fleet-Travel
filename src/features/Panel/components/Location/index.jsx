import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ReactComponent as Circlexmark } from 'assets/icons/circlexmark.svg';
import './styles.scss';

LocationComponent.propTypes = {};

function LocationComponent(props) {
    const locations = [
        { id: 0, name: 'New York, NY' },
        { id: 1, name: 'New York, Manhattan' },
        { id: 2, name: 'New Zealand' },
        { id: 3, name: 'New Smyna Beach, Fl' },
        { id: 4, name: 'Newark, NJ' },
        // { id: 5, name: 'LDAT, NJ' },
    ];
    const [isActive, setisActive] = useState(false);

    const [textLocation, settextLocation] = useState('');

    const handleInputOnchange = (e) => {
        setisActive(true);
        console.log(e.target.value);
        settextLocation(e.target.value);
        e.preventDefault();
    };
    const inputBlur = () => {
        // console.log(123);
        // setisActive(false);
    };
    const inputcloseClick = () => {
        settextLocation('');
        setisActive(false);
    };
    function handlelocationItemClick(item) {
        settextLocation(item.name);
        setisActive(false);
    }
    return (
        <div className={isActive ? 'location location--active' : 'location'} onBlur={inputBlur}>
            <FontAwesomeIcon className="location__icon" icon={faLocationArrow} />
            <div className="location__content">
                <input
                    id="location"
                    value={textLocation}
                    onChange={handleInputOnchange}
                    className={`location__input ${isActive ? 'location__input--active' : ''}`}
                    // onBlur={inputBlur}
                    type="text"
                    placeholder="Location"
                />
                <label htmlFor="location" className="location__title">
                    Where are you going?
                </label>
            </div>
            {isActive ? (
                <>
                    <div className="location__close" onClick={inputcloseClick}>
                        {/* <img className="location__close" src={circlexmark} alt="icon1" width={16} height={16} /> */}
                        <Circlexmark />
                    </div>

                    <div className="location__list">
                        {locations.map((l) => (
                            <div className="location__item" key={l.id} onClick={() => handlelocationItemClick(l)}>
                                <div className="location__item--icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M12.666 13.333c.368 0 .667-.298.667-.667S13.034 12 12.666 12s-.667.298-.667.667.299.667.667.667zm0 1.333a2 2 0 1 0 0-4 2 2 0 1 0 0 4zM10.333 2.667a1.67 1.67 0 0 0-1.667 1.667v7.333a3 3 0 1 1-6 0v-5c0-.368.298-.667.667-.667S4 6.298 4 6.667v5a1.67 1.67 0 0 0 1.667 1.667c.921 0 1.667-.746 1.667-1.667V4.333a3 3 0 1 1 6 0v4.333a.67.67 0 0 1-.667.667c-.368 0-.667-.298-.667-.667V4.333a1.67 1.67 0 0 0-1.667-1.667z"
                                            fill-rule="evenodd"
                                            fill="#777e91"
                                        />
                                        <path
                                            d="M2.759 1.654a.67.67 0 0 1 1.152 0l1.173 2.01a.67.67 0 0 1-.576 1.003H2.162a.67.67 0 0 1-.576-1.003l1.173-2.01z"
                                            fill="#777e91"
                                        />
                                    </svg>
                                </div>
                                <div className="location__item--content">{l.name}</div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
}

export default LocationComponent;
