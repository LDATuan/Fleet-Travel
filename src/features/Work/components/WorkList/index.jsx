import work1 from 'assets/img/work-pic-1.png';
import work2 from 'assets/img/work-pic-2.png';
import work3 from 'assets/img/work-pic-3.png';
import React from 'react';
import WorkItem from '../WorkItem';
import './styles.scss';

WorkList.propTypes = {};

function WorkList(props) {
    const works = [
        {
            image: work1,
            title: 'Book & relax',
            info: 'We realize ideas from simple to complex, everything becomes easy to use.',
        },
        {
            image: work2,
            title: 'Smart checklist',
            info: 'We realize ideas from simple to complex, everything becomes easy to use.',
        },
        {
            image: work3,
            title: 'Save more',
            info: 'We realize ideas from simple to complex, everything becomes easy to use.',
        },
    ];
    return (
        <div className="work__list">
            {works.map((work, index) => (
                <WorkItem key={index} work={work} />
            ))}
        </div>
    );
}

export default WorkList;
