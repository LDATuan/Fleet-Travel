import mainpic from 'assets/img/main-pic.jpg';
import Button from 'components/Button/Button';
import React from 'react';
import PanelFeature from '../Panel';
import './styles.scss';

MainBodyFeature.propTypes = {};

function MainBodyFeature() {
    console.log(mainpic);
    return (
        <section className="main">
            <picture className="main__picture">
                <img className="main__picture" src={mainpic} alt="Home" />
            </picture>
            <div className="main__wrap">
                <div className="main__title">Air, sleep, dream</div>
                <div className="main__info">Find and book a great experience.</div>
                <div className="main__btnsearch">
                    <Button content="Start your search" type="btn--secondary" size="btn--large" />
                </div>
            </div>
            <div className="main__panel">
                <PanelFeature />
            </div>
        </section>
    );
}

export default MainBodyFeature;
