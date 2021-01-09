import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { DateRangePicker } from 'react-dates';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByAmount, sortByDate, setStartDate,setEndDate,wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('Should render the Expenselist filter correctly', () => {

    expect(wrapper).toMatchSnapshot();
});

test('Should render the Expenselist filter with data', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('Shoul set text on change', () => {
    
    wrapper.find('input').simulate('change', {
        target: {
            value : 'bill'
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test('should call sortby to date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target : { value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalledTimes(1);
});

test('shoudl call setByAmount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test('Should handle date change', () => {
    const startDate = moment(0).add(20, 'days');
    const endDate = moment(0).add(1, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should change calendar state value', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
