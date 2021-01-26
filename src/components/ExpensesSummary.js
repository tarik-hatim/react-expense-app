 import React from 'react';
 import { connect } from 'react-redux';
 import visibleExpenses from '../selectors/expenses';
 import expensesTotal from '../selectors/expenses-total';
 import numeral from 'numeral';

 export const ExpensesSummary = ({expensesCount, expensesTotal}) =>  {
     const expenseWord = expensesCount > 1 ? 'expenses ' : 'expense ';
     const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
           <h1>viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
 }

 const mapStateToProps = (state) => (
    {
        expensesTotal : expensesTotal(visibleExpenses(state.expenses,state.filters)),
        expensesCount: (visibleExpenses(state.expenses, state.filters)).length
    }
 )
    
 

 export default connect(mapStateToProps)(ExpensesSummary);