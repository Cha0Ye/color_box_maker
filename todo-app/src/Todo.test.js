import React from 'react';
import Todo from './Todo';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Todo />);
})

//smoke test
it('renders without crashing', () => {
  const wrapper = shallow(<Todo />);
});

//snapshot test
it('matches snapshot', () => {

    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

//delete runs a function
it("runs a mocked fn on delete", function () {
    const deleteFn = jest.fn();
    let wrapper = mount(
      <Todo triggerDelete={deleteFn} />
    );
    const deleteBtn = wrapper.find("button").first();
  
    deleteBtn.simulate("click")
  
    expect(deleteFn).toHaveBeenCalled();
  });

  //for edit todo

it("adds items", function() {
    
    const wrapper = mount(<Todo text='test'/>);
  
    // wrapper.setState({ isEdit: true });
    expect(wrapper.state()).toEqual(
      { isEdit: false, text:'test' }
    );
  
    // here we use the "instance" method 
    // to get access to all instance methods defined on the component
    wrapper
      .instance()
      .showEdit();
  
      expect(wrapper.state()).toEqual(
        { isEdit: true, text:'test' }
      );
  });


  //check form
  it("update todo ", function() {
    
    const wrapper = mount(<Todo text='test'/>);
  
    wrapper.setState({ isEdit: true });
    // expect(wrapper.state()).toEqual(
    //   { isEdit: true, text:'test' }
    // );
  
    // here we use the "instance" method 
    // to get access to all instance methods defined on the component
    wrapper
      .instance()
      .showEdit();
    console.log('wrapper is',wrapper.debug())
    expect(wrapper.find('form').exists()).toEqual(true);
   
  });
