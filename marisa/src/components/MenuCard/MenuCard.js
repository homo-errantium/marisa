import React from 'react';
import './MenuCard.css';

function MenuCard({ key, card, onCardClick }) {
    let cardName = require(`../../images/${card.name}.jpg`);
    card.link = cardName;
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className='menu-card'>
            <div className='menu-card__container'>
                <img
                    className='menu-card__image'
                    alt={card.name}
                    src={cardName}
                    onClick={handleClick}
                />
                <a
                    className='menu-card__link'
                    href={'ya.ru'}
                    target='_blank'
                    rel='noreferrer'
                >
                    {card.name}
                </a>
            </div>
        </li>
    );
}

export default MenuCard;
