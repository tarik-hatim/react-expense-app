import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters  from './ExpenseListFilters';

const ExpenseDashboardPage =() => (
    <div>
      <ExpenseListFilters />
      <h2>Dashboard</h2>
      <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;