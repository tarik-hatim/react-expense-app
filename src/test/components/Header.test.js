import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


it('Should render Header component', () => {

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
//     const renderer = new ReactShallowRenderer();
//     const component = renderer.render(<Header />);
//     console.log(component);
//   expect(component).toMatchSnapshot();
});