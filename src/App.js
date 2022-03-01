import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,4),
    },
    {
      id: 'e2',
      title: 'Car',
      amount: 194.12,
      date: new Date(2021,7,30),
    },
    {
      id: 'e3',
      title: 'TV',
      amount: 92.12,
      date: new Date(2021,10,10),
    },
    {
      id: 'e4',
      title: 'House',
      amount: 1094.12,
      date: new Date(2022,7,20),
    },
  ]

  const addExpenseHandler = expense =>{
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
