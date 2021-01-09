import { act } from 'react-test-renderer';
import expensesReducer from '../../reducers/expense';
import expenses from '../fixtures/expenses';

test('Should set the default state', () => {

    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove an expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove an expense if did not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '9'});
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id : '4',
        description: 'shew',
        note: '',
        amount: 4500,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'wonder from u'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('wonder from u');
});

test('Should not edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 7800
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});