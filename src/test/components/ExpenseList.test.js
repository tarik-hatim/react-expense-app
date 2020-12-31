import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/expenseList';
import expenses from '../fixtures/expenses';

test('Should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});