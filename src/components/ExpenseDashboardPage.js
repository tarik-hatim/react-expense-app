import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters  from './ExpenseListFilters';

const ExpenseDashboardPage =() => (
    <div>
      <ExpenseListFilters />
      <h2>Dashboard</h2>
      <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;