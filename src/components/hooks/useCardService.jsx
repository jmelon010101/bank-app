
import React, {useState, useEffect} from 'react'
import CardService from '../../api/CardService';
// import Card from '../landing-page/cards/card/Card';

export default function useCardService(props) {
    const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     CardService.getLandingPageCards()
    //     .then(res => {
    //         setCards(res);
    //         console.log(res);
    //     })
    // },[]);

    return (
        <></>        
    )
}
