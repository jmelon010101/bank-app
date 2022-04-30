import React from 'react'
import DepositsAndInvestments from './deposits-and-investments/DepositsAndInvestments';
import Sidebar from './sidebar/SideBar';
import "./AccountSummary.css";

export default function Accountsummary(props) {
    const [checkingAmount, setCheckingAmount] = React.useState("5000.00");

    function checkingAccountUpdate(deposit) {
        setCheckingAmount((parseFloat(checkingAmount) + parseFloat(deposit)).toFixed(2));
    }

    return (
        <div className="account-summary-container">
            <Sidebar checkingAccountUpdate={checkingAccountUpdate} className="side-bar" />
            <DepositsAndInvestments checkingAmount={checkingAmount} className="deposits-and-investments" />
        </div>
    )
}
