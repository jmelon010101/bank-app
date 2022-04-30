import './GetStarted.css';
import {Button} from 'react-bootstrap';

export default function GetStarted(props) {
    return (
        <div className="get-started">
            <div className="content-block">
                <h1 className="main-header">A home of your own</h1>
                <h3 className="sub-header">With low down payment options on a fixed-rate mortgage</h3>
                <Button className="get-started-button" variant="primary" type="submit">
                    Get Started
                </Button>
            </div>
        </div>
    )
}