import { TestScheduler } from 'jest';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('Should set up remove action object', () => {
    const action = removeExpense({id: '123h'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123h'
    })
});

test('Sjould set up Edit expense action object', () => {
    const action = editExpense('123h', { note: 'hello'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123h',
        updates: { 
            note: 'hello'
        }
    });
});

test('Should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'hello there from me', 
        note: 'a greeting for my crowd', 
        createdAt: 15840,
        amount: 1800
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
        
    })
});

test('Should set up add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
        
    });
});