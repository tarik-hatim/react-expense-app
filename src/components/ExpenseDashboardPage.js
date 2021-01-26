import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters  from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage =() => (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <h2>Dashboard</h2>
      <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;