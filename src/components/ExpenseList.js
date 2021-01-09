import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <p>expense List </p>
        {props.expenses.length === 0 ? (
            <p>no expenses</p>
        ): (
            props.expenses.map((expense) => 
            <ExpenseItem  {...expense} key={expense.id} /> ))}
    </div>
);

const mapStateToProps = (state) => (
    {
        expenses : visibleExpenses(state.expenses,state.filters)
    }
);

export default connect(mapStateToProps)(ExpenseList);
