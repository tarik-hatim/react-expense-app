import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense , history,wrapper,removeExpense;
beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} history={history} removeExpense={removeExpense} />);
});
test('Should render Edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle the form submission', () => {
   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
});

test('Should handle on click', () => {
    const id = expenses[0].id;

    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});