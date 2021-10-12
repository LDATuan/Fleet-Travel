import PlaceImg1 from 'assets/img/places-pic-1.jpg';
import PlaceImg2 from 'assets/img/places-pic-2.jpg';
import PlaceImg3 from 'assets/img/places-pic-3.jpg';
import PlaceImg4 from 'assets/img/places-pic-4.jpg';
import PlaceImg5 from 'assets/img/places-pic-5.jpg';
import PlaceImg6 from 'assets/img/places-pic-6.jpg';
import PlaceImg7 from 'assets/img/places-pic-7.jpg';
import PlaceImg8 from 'assets/img/places-pic-8.jpg';
import PlaceImg9 from 'assets/img/places-pic-9.jpg';
import React from 'react';
import PlaceItem from '../PlaceItem';
import './styles.scss';

PlaceList.propTypes = {};

function PlaceList(props) {
    const data = [
        {
            image: PlaceImg1,
            title: 'Thompsonbury',
            time: '15 minutes drive',
            count: 1480,
        },
        {
            image: PlaceImg2,
            title: 'Hudsontown',
            time: '28 minutes drive',
            count: 1580,
        },

        {
            image: PlaceImg3,
            title: 'Lake Marcelle',
            time: '35 minutes drive',
            count: 2480,
        },
        {
            image: PlaceImg4,
            title: 'New Keagan',
            time: '44 minutes drive',
            count: 1481,
        },
        {
            image: PlaceImg5,
            title: 'MacGyveron',
            time: '55 minutes drive',
            count: 3480,
        },
        {
            image: PlaceImg6,
            title: 'North Justen',
            time: '1 hour drive',
            count: 1480,
        },
        {
            image: PlaceImg7,
            title: 'Port Elyseberg',
            time: '2 hours drive',
            count: 1480,
        },
        {
            image: PlaceImg8,
            title: 'Danielmouth',
            time: '5 hours drive',
            count: 1480,
        },
        {
            image: PlaceImg9,
            title: 'Port Elyseberg',
            time: '2 hours drive',
            count: 1480,
        },
    ];
    return (
        <div className="places__list">
            {data.map((item, index) => (
                <PlaceItem place={item} key={index} />
            ))}
        </div>
    );
}

export default PlaceList;
