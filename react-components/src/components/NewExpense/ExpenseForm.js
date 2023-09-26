import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <title>Title</title>
          <input type="text"></input>
        </div>
        <div className="new-expense__control">
          <title>Amount</title>
          <input type="number" min="0.1" step="0.1"></input>
        </div>
        <div className="new-expense__control">
          <title>Date</title>
          <input type="date" min="2019-01-01" max="2023-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
