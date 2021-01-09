import moment from 'moment';
import selectedExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';



test('Should filter expenses by text', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectedExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]]);

});

test('Should filter expenses by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectedExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});
test('Should filter expenses by end date', () => {
    const filters = {
        text : '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add('3', 'days')
    };
    const result = selectedExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should filter expenses by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectedExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]]);
});

test('Should filter expenses by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate:undefined,
        endDate: undefined
    };
    const result = selectedExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2], expenses[0]]);
});