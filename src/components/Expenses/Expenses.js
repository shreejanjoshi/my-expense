import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // pass function to it if function return true a certain item is kept if not not kepts and filter return brand new array
  // date comes from app.js date
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* items is from app.s map take fun as a argument and fun executes for every element in the array*/}
        {/* I wanna map every expense into the expenseItem JSX element */}
        {/* we transform our array to an array fill of JSX item */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            // to fix key error (66)/  add  props keys to help react identy iedisidure item
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
