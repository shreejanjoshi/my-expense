import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,14),
    },
    {
      id: 'e2',
      title: 'Car',
      amount: 194.12,
      date: new Date(2021,7,14),
    },
    {
      id: 'e3',
      title: 'TV',
      amount: 92.12,
      date: new Date(2021,10,14),
    },
    {
      id: 'e4',
      title: 'House',
      amount: 1094.12,
      date: new Date(2022,7,14),
    },
  ]
  return (
    <div>
      <h2>let go</h2>
      <p>theis is visible</p>
      {/* attribute name is up to you can be changed */}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
