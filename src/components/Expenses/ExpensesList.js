import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  // if no item
  if(props.items.length === 0){
      return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  // if value is there then show this
  return (
      <ul className="expenses-list">
          {props.items.map((expense) => (
      //I wanna map every expense into the expenseItem JSX element
      //we transform our array to an array fill of JSX item
      <ExpenseItem
        // to fix key error (66)/  add  props keys to help react identy iedisidure item
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
      </ul>
  );
};

export default ExpensesList;
