import React from 'react';
import WorkList from './components/WorkList';
import './styles.scss';
import { ReactComponent as WorkLine } from 'assets/img/workline.svg';

WorkFeature.propTypes = {};

function WorkFeature(props) {
    return (
        <section className="work">
            <div className="work__head">
                <h2 className="work__title">How it work</h2>
                <div className="work__info">Keep calm &amp; travel on</div>
            </div>
            <div className="work__body">
                <WorkList />
                <WorkLine className="work__line" />
            </div>
        </section>
    );
}

export default WorkFeature;
