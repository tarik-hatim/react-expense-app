import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component{


  onSubmit = (expense) => {
      this.props.editExpense(this.props.expense.id,expense);
      this.props.history.push('/');
  }
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render(){
    return (
      <div>
        <h2>Edit Expense Page</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>remove</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
//console.log(props.match.params.id);
    return {
      expense : state.expenses.find((expense) => expense.id === props.match.params.id)  
    };
};

const mapDispatchToProps = props => {
  return {
    editExpense : (expense) => props.dispatch(editExpense(props.expense.id, expense)),
    removeExpense : (data) => props.dispatch(removeExpense({ id: props.expense.id }))
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);