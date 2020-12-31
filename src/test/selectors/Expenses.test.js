import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [
    {
        id: '1',
        description : 'Clothes',
        note: '',
        amount: 45000,
        createdAt: moment(0).subtract(7,'days').valueOf()
    },
    {
        id: '2',
        description : 'Travel weekend',
        note: '',
        amount: 30000,
        createdAt: 0
    },
    {
        id: '3',
        description : 'Foods',
        note: '',
        amount: 60000,
        createdAt: moment(0).add(7, 'days').valueOf()
    }
];

test('Should filter expenses by text value', () => {
    const filters = {
        text: 'oo',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2]]);
});

test('Should filter by start date', () => {
    const filters = {
        text : '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[0]]);
});


test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

