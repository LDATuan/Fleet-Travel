import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import BrowseList from './components/BrowseList';
BrowseFeature.propTypes = {};

function BrowseFeature(props) {
    return (
        <section className="browse">
            <div className="browse__head">
                <div className="browse__title">Explore nearby</div>
                <div className="browse__info">Let’s go on an adventure</div>
                <div className="browse__button">
                    <button className="btn__arrow btn__prev">
                        <ArrowIcon />
                    </button>
                    <button className="btn__arrow btn__next">
                        <ArrowIcon />
                    </button>
                </div>
            </div>
            <div className="browse__body">
                <BrowseList />
            </div>
        </section>
    );
}

export default BrowseFeature;
