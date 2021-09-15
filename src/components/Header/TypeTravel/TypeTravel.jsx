import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faComment, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
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
    <div className="combobox">
      <div
        className={open ? 'combobox__content combobox__active' : 'combobox__content '}
        onClick={handleTravelerClick}
      >
        Travelers
        <FontAwesomeIcon
          className={open ? 'combobox__mainicon--rotate' : 'combobox__mainicon'}
          id="comboboxIcon"
          icon={faChevronDown}
        />
      </div>

      <div className={open ? 'combobox__items menu--active' : 'combobox__items'}>
        {items.map((item) => (
          <a
            key={item.id}
            href="/#"
            className={item.isActive ? 'combobox__item active' : 'combobox__item hover'}
            onClick={() => handleItemClick(item)}
          >
            <FontAwesomeIcon className="combobox__icon" icon={item.icon} />
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TypeTravel;
