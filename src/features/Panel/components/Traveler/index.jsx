import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SearchIcon } from 'assets/icons/search-outline.svg';
import React, { useEffect, useState } from 'react';
import TravelerItem from '../TravelerItem';
import './styles.scss';

Traveler.propTypes = {};

function Traveler() {
    const [guest, setGuest] = useState('Travelers');
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (count === 0) {
            setGuest('Travelers');
        } else if (count === 1) {
            setGuest(`${count} guest`);
        } else {
            setGuest(`${count} guests`);
        }
    }, [count]);

    const handleCountGuestChange = (flag) => {
        if (flag) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    };
    const handleTravelerHead = () => {
        console.log(222);
        setIsActive(true);
    };
    const handleBlur = () => {
        setIsActive(false);
    };

    return (
        <div className="traveler">
            <div
                className={`traveler__head ${isActive ? 'traveler__head--active' : ''}`}
                onClick={handleTravelerHead}
                onBlur={handleBlur}
            >
                <FontAwesomeIcon className="traveler__icon" icon={faUser} />
                <div className="traveler__content">
                    <div className="traveler__title">{guest}</div>
                    <div className="traveler__placeholder">Travelers</div>
                </div>

                <div
                    tabIndex={1}
                    className={`traveler__body ${!isActive ? 'traveler__body--disable' : ''}`}
                    onBlur={handleBlur}
                >
                    <TravelerItem category="Adults" onChange={handleCountGuestChange} text="Ages 13 or above" />
                    <TravelerItem category="Childrens" onChange={handleCountGuestChange} text="Ages 2 to 12" />
                    <TravelerItem category="Baby" onChange={handleCountGuestChange} text="Under 2" />
                </div>
            </div>
            <div className="traveler__search">
                <SearchIcon className="traveler__search--icon" />
            </div>
        </div>
    );
}

export default Traveler;
