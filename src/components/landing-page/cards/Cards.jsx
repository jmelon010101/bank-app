import React from 'react';
import './Cards.css';
// import {Card, Button} from 'react-bootstrap';
// import useCardService from '../../hooks/useCardService';

// import CardService from '../../../api/CardService';
import { constants } from '../../../Constants';
import Card from './card/Card';

export default function Cards(props) {
    const cards = constants.LANDING_CARDS;
    
    return (
        <div className="cards">
            <ul className="cards-container">
                {cards.map((card) => 
                    <Card key={card.title} card={card} />
                )}
            </ul>
        </div>
    )
}