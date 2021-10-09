import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import travelpic1 from 'assets/img/travel-pic-1.jpg';
import React from 'react';
import TravelList from './components/TravelList';
import TravelPreview from './components/TravelPreview';
import './styles.scss';
import persion1 from 'assets/img/avatar.jpg';
import Button from 'components/Button/Button';

TravelFeature.propTypes = {};

function TravelFeature(props) {
    const previews = [
        {
            avatar: persion1,
            person: 'Antone Heller',
            rate: '4.8',
            top: '291px',
            left: '-72px',
        },
        {
            avatar: persion1,
            person: 'Antone Heller',
            rate: '4.8',
            top: '490px',
            left: '-150px',
        },
        {
            avatar: persion1,
            person: 'Antone Heller',
            rate: '4.8',
            top: '346px',
            left: '278px',
        },
    ];

    return (
        <section className="travel">
            <div className="travel__head">
                <h2 className="travel__title">Travel to make memories all around the world</h2>
                <div className="travel__info">Find trips that fit a flexible lifestyle</div>
            </div>
            <div className="travel__body">
                <div className="travel__col">
                    <TravelList />
                    <Button content="Start your search" type="btn--secondary" size="btn--large" />
                </div>
                <div className="travel__col">
                    <div className="travel__wrapper">
                        <div className="travel__slider">
                            <div className="travel__btn">
                                <button className="btn__arrow btn__prev">
                                    <ArrowIcon className="travel__icon" />
                                </button>
                                <button className="btn__arrow btn__next">
                                    <ArrowIcon className="travel__icon" />
                                </button>
                            </div>
                            <img className="travel__image" src={travelpic1} alt="#" />
                        </div>
                        <div className="travel__group">
                            {previews.map((preview, index) => (
                                <TravelPreview key={index} preview={preview} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TravelFeature;
