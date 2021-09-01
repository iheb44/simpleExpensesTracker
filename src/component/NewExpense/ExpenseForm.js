import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandle = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandle = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandle = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandle}
          ></input>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
