import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesDummyData = [
  {
    id: "e1",
    title: "Udemy course",
    amount: 19.99,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Nuts and dried fruit",
    amount: 30,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Office materials",
    amount: 150,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Pack of water",
    amount: 30,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesDummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
};

export default App;
