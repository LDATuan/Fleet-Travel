import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Browse1 from 'assets/img/browse-pic-1@2x.jpg';
import Browse2 from 'assets/img/browse-pic-2@2x.jpg';
import Browse3 from 'assets/img/browse-pic-3@2x.jpg';
import Browse4 from 'assets/img/browse-pic-4@2x.jpg';
import BrowseItem from '../BrowseItem';
BrowseList.propTypes = {};

function BrowseList(props) {
    const data = [
        {
            category: 'from $230',
            image: Browse1,
            title: 'Nature house',
            content: '664,423',
        },
        {
            category: '20% off',
            image: Browse2,
            title: 'Nature house',
            content: '324,423',
        },
        {
            category: '20% off',
            image: Browse3,
            title: 'Nature house',
            content: '664,423',
        },
        {
            category: 'from $230',
            image: Browse4,
            title: 'Nature house',
            content: '664,423',
        },
    ];

    return (
        <div className="browse__list">
            {data.map((item, index) => (
                <BrowseItem key={index} browse={item} />
            ))}
        </div>
    );
}

export default BrowseList;
