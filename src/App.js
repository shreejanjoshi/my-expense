import Expenses from "./components/Expenses";
import React from "react";

function App() {
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
  return (
    <div>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
