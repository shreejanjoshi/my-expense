import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";

const ExpenseItem = (props) => {

  // is array so 1st value is var oe value itself and 2nd is updating
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updateing');
  };

  return (
    <Card className="expense-item">
      {/* should match the aatribute name date and props.dates.toLocaleString from expreneDate.js */}
      <ExpenseDate date= {props.date} />
      <div className="expense-item__description">
        {/* change by state */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
