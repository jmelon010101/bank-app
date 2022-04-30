import React from 'react'
import "./DepositsAndInvestments.css"
import { Accordion, Table } from 'react-bootstrap';

export default function Depositsandinvestments(props) {


    return (
        <div className="container">
            <h3 className="header">Deposits and Investments</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2}>Deposits and Investments</th>   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Blue Sky Checking
                            <p>Account #: XXXXX5564</p>
                        </td>
                        <td>
                            {"$" + props.checkingAmount}
                            <p>Available</p>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            Blue Sky Savings
                            <p>Account #: XXXXX7362</p>
                        </td>
                        <td>
                            $1.00
                            <p>Available</p>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

