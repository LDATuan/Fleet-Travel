import React from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import Planning1 from 'assets/img/planning-pic-1.png';

PlanFeature.propTypes = {};
const handleSubmitPhone = (e) => {
    e.preventDefault();
};
function PlanFeature(props) {
    return (
        <section className="planning">
            <div className="planning__center">
                <div className="planning__wrap">
                    <div className="planning__stage">SUPERCHARGE YOUR PLANNING POWERS</div>
                    <div className="planning__title">
                        Travel to make memories all around the world
                    </div>
                    <div className="planning__content">
                        Stacks is a production-ready library of stackable content blocks built in
                        React Native.
                    </div>
                    <form className="subcription">
                        <input
                            className="subcription__input"
                            type="tel"
                            placeholder="Enter your phone number"
                        />
                        <button className="subcription__btn" onClick={(e) => handleSubmitPhone(e)}>
                            <ArrowIcon />
                        </button>
                    </form>
                </div>
                <div className="planning__gallery">
                    <div className="planning__preview">
                        <img src={Planning1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlanFeature;
