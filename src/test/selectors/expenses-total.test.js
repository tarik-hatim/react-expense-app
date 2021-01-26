import { TestScheduler } from 'jest';
import moment from 'moment';
import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


const emptyexpenses = [];

test('Should 0 if there is no expenses', () => {
    const result = expensesTotal(emptyexpenses);
    expect(result).toBe(0);
});

test('Should return the amount if there is one expense', () => {
    const result = expensesTotal([expenses[0]]);
    expect(result).toBe(18000);
});
test('Should sum up the expenses amount', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(87000);
});
