import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage } from '../../components/EditExpensePage';

let editExpense,removeExpense,history,wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push : jest.fn() };
    wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} removeExpense={removeExpense} expense={expenses[0]} />);
})
test('Should render Edit page correctly', () => {
    
    expect(wrapper).toMatchSnapshot();
    
});

test('Should handle onSumit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0]);

    //.toHaveBeenCalledTimes(number) 
});

test('Should handle onClick', () => {

    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id}) ;
});