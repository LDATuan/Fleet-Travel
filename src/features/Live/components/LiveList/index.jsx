import Live1 from 'assets/img/live-pic-1.png';
import Live2 from 'assets/img/live-pic-2.png';
import Live3 from 'assets/img/live-pic-3.png';
import React from 'react';
import LiveItem from '../LiveItem';
import './styles.scss';

LiveList.propTypes = {};

function LiveList(props) {
    const lives = [
        {
            image: Live1,
            title: 'Enjoy the grate cold',
            content: '6,879 properties',
            href: '#',
        },
        {
            image: Live2,
            title: 'Pick up the earliest sunrise',
            content: '9,879 properties',
            href: '#',
        },
        {
            image: Live3,
            title: 'Unique stay',
            content: '12,879 properties',
            href: '#',
        },
    ];

    return (
        <div className="live__list">
            {lives.map((live, index) => (
                <LiveItem live={live} key={index} />
            ))}
        </div>
    );
}

export default LiveList;
