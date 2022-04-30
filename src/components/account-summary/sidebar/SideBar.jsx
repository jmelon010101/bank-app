import React, {useState} from 'react'
import { constants } from './constants'
import { Nav } from 'react-bootstrap';
import MagicPayModal from "../magic-pay-modal/MagicPayModal.jsx";
import './SideBar.css';

export default function Sidebar(props) {
    let sideBarItems = constants.SIDE_BAR_ITEMS;

    //Modal stuff
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const navLinks = sideBarItems.map((item) =>
        <Nav.Link className="item" style={{borderBottom:"1px solid rgba(152, 151, 151, 0.623)"}}
            key={item.title} href={item.title == "Deposit Money with MagicalPay" ? '' : "/account-summary"}
            onClick={item.title == "Deposit Money with MagicalPay" ? handleShow : null } >
            {item.title}
        </Nav.Link>
    );

    return (
        <div className="side-bar-container">
            <MagicPayModal checkingAccountUpdate={props.checkingAccountUpdate} show={show} handleClose={handleClose} handleShow={handleShow} />
            <h3 className="greeting">Hello There!</h3>
            <Nav defaultActiveKey="/account-summary" className="flex-column">
                {navLinks}
            </Nav>
        </div>
    )
}
