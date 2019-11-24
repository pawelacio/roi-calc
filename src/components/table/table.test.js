import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from './table.component';
import mockData from '../roiCalcForm/fakeAPI/fakeData.json';


describe('test Table class component', () => {

  it('renders Table without crashing', () => {
    const wrapper = shallow(<Table heading={ mockData.heading } data={ mockData.data } />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Table without props data', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper.exists()).toBe(true);
  });

})

