import moment from 'moment';
import filtersReducer from '../../reducers/filter';


test('Should set the default filters state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');

});

test('Should set sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set text filter with provided text value', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'hello'});
    expect(state.text).toBe('hello');
});

test('Should set a start date', () => {
    const date = moment();
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: date});
    expect(state.startDate).toEqual(date);
});

test('Should set end date', () => {
    const date = moment();
    
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: date});
    expect(state.endDate).toEqual(date);
});