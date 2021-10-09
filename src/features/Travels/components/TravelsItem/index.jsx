import React from 'react';
import './styles.scss';
import { ReactComponent as StarIcon } from 'assets/icons/star-solid.svg';

TravelsItem.propTypes = {};

function TravelsItem({ data }) {
    const { href, image, title, location, pricediscount, price, date, rate } = data;

    return (
        <a href={href} className="travels__item">
            <div className="travels__preview">
                <img src={image} alt=""></img>
            </div>
            <div className="travels__body">
                <div className="travels__line">
                    <div className="travels__details">
                        <div className="travels__subtitle">{title}</div>
                        <div className="travels__location">{location}</div>
                    </div>
                    <div className="travels__price">
                        <div className="travels__old">{pricediscount}</div>
                        <div className="travels__actual">{price}</div>
                    </div>
                </div>
                <div className="travels__line">
                    <div className="travels__date">{date}</div>
                    <div className="travels__rating">
                        <StarIcon />
                        {rate}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default TravelsItem;
