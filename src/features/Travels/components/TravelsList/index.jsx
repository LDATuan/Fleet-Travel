import Catalog1 from 'assets/img/catalog-pic-1@2x.jpg';
import Catalog2 from 'assets/img/catalog-pic-2@2x.jpg';
import Catalog3 from 'assets/img/catalog-pic-3@2x.jpg';
import Catalog4 from 'assets/img/catalog-pic-4@2x.jpg';
import Catalog5 from 'assets/img/catalog-pic-5@2x.jpg';
import Catalog6 from 'assets/img/catalog-pic-6@2x.jpg';
import Catalog7 from 'assets/img/catalog-pic-7@2x.jpg';
import React from 'react';
import TravelsItem from '../TravelsItem';
import './styles.scss';
TravelsList.propTypes = {};

function TravelsList(props) {
    const traveldatas = [
        {
            href: '#',
            image: Catalog1,
            title: 'The grand resort',
            location: 'Karinside',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog2,
            title: 'The grand resort',
            location: 'East Barrett',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog3,
            title: 'The grand resort',
            location: 'Steuberbury',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog4,
            title: 'The grand resort',
            location: 'Idaview',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog5,
            title: 'The grand resort',
            location: 'Yasminfurt',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog6,
            title: 'The grand resort',
            location: 'North Ednshire',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog7,
            title: 'The grand resort',
            location: 'Archbaldtown',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
        {
            href: '#',
            image: Catalog1,
            title: 'The grand resort',
            location: 'West Gregoria',
            pricediscount: '$356',
            price: '$267',
            date: 'Tue, Jul 20 - Fri, Jul 23',
            rate: '4.9',
        },
    ];
    return (
        <div className="travels__list">
            {traveldatas.map((traveldata, index) => (
                <TravelsItem key={index} data={traveldata} />
            ))}
        </div>
    );
}

export default TravelsList;
