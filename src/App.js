import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 4),
  },
  {
    id: "e2",
    title: "Car",
    amount: 194.12,
    date: new Date(2021, 7, 30),
  },
  {
    id: "e3",
    title: "TV",
    amount: 92.12,
    date: new Date(2021, 10, 10),
  },
  {
    id: "e4",
    title: "House",
    amount: 1094.12,
    date: new Date(2022, 7, 20),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // function will resive the latest snap shot
    setExpenses((prevExpenses) => {
      // add new expense
      return [expense, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
