import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  return (
    // just to show in list
    <li>
      <Card className="expense-item">
        {/* should match the aatribute name date and props.dates.toLocaleString from expreneDate.js */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* change by state */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
