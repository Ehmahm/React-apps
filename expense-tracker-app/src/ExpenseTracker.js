// src/components/ExpenseTracker.js
import React, { useState } from 'react';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      <h3>Total: ${totalExpense.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseTracker;
