import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addFilterHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterData={addFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseList;
