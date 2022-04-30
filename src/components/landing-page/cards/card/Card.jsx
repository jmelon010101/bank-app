import React from 'react'
import {Button, Card as BootCard} from 'react-bootstrap';
import "./card.css";

export default function Card(props) {
    
    return (
        <div>
            <BootCard style={{ width: '18rem', height:"40vh"}}>
                <BootCard.Body className="container">
                    <BootCard.Title className="mt-4 fs-4 fw-bold">{props.card.title}</BootCard.Title>
                    <BootCard.Subtitle className="text-muted">{props.card.subTitle}</BootCard.Subtitle>
                    <Button className="buttony" variant="primary" type="submit">
                        {props.card.buttonName}
                    </Button>
                </BootCard.Body>
            </BootCard>
        </div>
    )
}
