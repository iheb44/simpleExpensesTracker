import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const savedExpensedData = (enteredExpenseData) => {
    const expensedData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expensedData);
  };
  const startAdding = () => {
    setIsAdding(true);
  };

  const stopAdding = () => {
    setIsAdding(false);
  };
  var form;
  if (!isAdding) {
    form = <button onClick={startAdding}>Add New Expense</button>;
  }
  if (isAdding) {
    form = (
      <ExpenseForm
        onSaveExpenseData={savedExpensedData}
        onCancel={stopAdding}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{form}</div>;
};
export default NewExpense;
