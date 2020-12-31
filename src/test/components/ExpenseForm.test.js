import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render the expense Form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense form with data', () => {
    const wrapper = shallow(<ExpenseForm  expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalide form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});

test('Should set the desctiption on input change', () => {
    const value = 'Serghat';
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('input').at(0).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set the note on textarea change', () => {
    const value = 'Note for test';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set the amount if valid input', () => {
    const value = '12.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
   
    expect(wrapper.state('amount')).toBe(value);

});

test('Should not set the amount if invalid input', () => {
    const value = '12.5010';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
    
    expect(wrapper.state('amount')).toBe('');

});

test('Should call  onSubmit props for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});


test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').childAt(3).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  });

test('should set calendar focus on change to true', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').childAt(3).prop('onFocusChange')({focused:true});
    expect(wrapper.state('focused')).toBe(true);
});
