import { TestScheduler } from 'jest';
import { addExpense, removeExpense,EditExpense, editExpense} from  '../../actions/expenses';


test('should return an object ', () => {
    const action = removeExpense({ id: 'sjdjdjd1'});
    expect(action).toEqual({ type: 'REMOVE_EXPENSE', id:'sjdjdjd1'})
})

test('should return an object with updated properties', () => {
    const action = editExpense('hdgcc4', { description : 'bill note'});

    expect(action).toEqual({ type: 'EDIT_EXPENSE', id: 'hdgcc4', updates: { description : 'bill note'}});
})

test('Should setup an expense object with provided values.', () => {
      
    const action = addExpense({
        description: 'bill for rent',
        amount: 54800,
        createdAt: 1000,
        note: 'the last bill'
    });
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'bill for rent',
            amount: 54800,
            createdAt: 1000,
            note: 'the last bill',
            id: expect.any(String)
        }        
    });
})

test('Should setup an expense object with default values', () => {

    const action = addExpense();

    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            note: '',
            description: '',
            createdAt : 0,
            amount: 0
        }
    })
})




