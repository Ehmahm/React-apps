// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <span>{expense.title}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
