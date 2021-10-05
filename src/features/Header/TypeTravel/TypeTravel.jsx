import { faChevronDown, faComment, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './styles.scss';

TypeTravel.propTypes = {};

function TypeTravel(props) {
    const [open, setOpen] = useState(false);

    const inititems = [
        {
            id: 0,
            title: 'Stays',
            icon: faComment,
            isActive: true,
        },
        {
            id: 1,
            title: 'Flights',
            icon: faEnvelope,
            isActive: false,
        },
        {
            id: 2,
            title: 'Thing to do',
            icon: faHome,
            isActive: false,
        },
        {
            id: 3,
            title: 'Cars',
            icon: faEnvelope,
            isActive: false,
        },
    ];

    const [items, setItems] = useState(inititems);

    const handleTravelerClick = () => {
        setOpen(!open);
    };
    function handleItemClick(item) {
        const currentItems = [...items];
        currentItems.forEach((x) => {
            x.isActive = x.id === item.id;
        });
        setItems(currentItems);
    }

    return (
        <div className="dropdown">
            <div
                className={open ? 'dropdown__content dropdown__active' : 'dropdown__content '}
                onClick={handleTravelerClick}
            >
                Travelers
                <FontAwesomeIcon
                    className={open ? 'dropdown__mainicon dropdown__mainicon--rotate' : 'dropdown__mainicon'}
                    id="comboboxIcon"
                    icon={faChevronDown}
                />
            </div>

            <div className={open ? 'dropdown__items menu--active' : 'dropdown__items'}>
                {items.map((item) => (
                    <a
                        key={item.id}
                        href="/#"
                        className={item.isActive ? 'dropdown__item item__active' : 'dropdown__item item__hover'}
                        onClick={() => handleItemClick(item)}
                    >
                        <FontAwesomeIcon className="dropdown__icon" icon={item.icon} />
                        <span>{item.title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TypeTravel;
