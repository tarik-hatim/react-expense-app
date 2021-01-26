import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={50455} />);
    expect(wrapper).toMatchSnapshot();
});
test('Should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={750854} />);
    expect(wrapper).toMatchSnapshot();
});