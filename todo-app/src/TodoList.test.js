import React from 'react';
import TodoList from './TodoList';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(() => {
    wrapper = mount(<TodoList />);
})

//smoke test
it('renders without crashing', () => {
  const wrapper = shallow(<TodoList />);
});

//snapshot test
it('matches snapshot', () => {

    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});
