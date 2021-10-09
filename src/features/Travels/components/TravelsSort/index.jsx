import React, { useState } from 'react';
import TravelsSortItem from '../TravlesSortItem';
import './styles.scss';
TravelsSort.propTypes = {};

function TravelsSort(props) {
    const sortdatainit = [
        {
            title: 'Feature',
            href: '#',
            isActive: true,
        },
        {
            title: 'Family-friendly',
            href: '#',
            isActive: false,
        },
        {
            title: 'On sale',
            href: '#',
            isActive: false,
        },
        {
            title: 'Sub nav',
            href: '#',
            isActive: false,
        },
    ];

    const [sortdata, setsortdata] = useState(sortdatainit);
    const handleClick = (item) => {
        const newsortData = [...sortdata];
        newsortData.forEach((x) =>
            x.title === item.title ? (x.isActive = true) : (x.isActive = false)
        );
        setsortdata(newsortData);
    };
    return (
        <div className="travels__sortlist">
            {sortdata.map((item, index) => (
                <TravelsSortItem key={index} sortitem={item} onclick={handleClick} />
            ))}
        </div>
    );
}

export default TravelsSort;
