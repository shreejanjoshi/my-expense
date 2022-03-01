// store somewhere
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // multi state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // single state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // get current value and store it in set

    //multi state
    setEnteredTitle(event.target.value);

    // single state
    //operate in latest state snapshot
    // setUserInput((prevState) =>{
    //     return{...prevState, enteredTitle: event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    // get current value and store it in set

    //multi state
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   // to make sure other data wont lost
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    // get current value and store it in set

    //multi state
    setEnteredDate(event.target.value);

    // single state
    // setUserInput({
    //   // to make sure other data wont lost
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //   page wont refraesh
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // comes from newExpense.js
    props.onSaveExpenseData(expenseData);

    // after submit clear the input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input
              type="text"
              value={enteredTitle}
            //   function as value
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
