import Button from 'components/Button/Button';
import React from 'react';
import LiveList from './components/LiveList';
import './styles.scss';
LiveFeature.propTypes = {};

function LiveFeature(props) {
    return (
        <section className="live">
            <div className="live__head">
                <h2 className="live__title">Live anywhere</h2>
                <div className="live__info">Keep calm &amp; travel on</div>
            </div>
            <div className="live__body">
                <LiveList />
            </div>
            <div className="live__btn">
                <Button content="Load more" />
            </div>
        </section>
    );
}

export default LiveFeature;
