import React from 'react';
import NewTodoForm from './NewTodoForm';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(() => {
    wrapper = mount(<NewTodoForm />);
})

//smoke test
it('renders without crashing', () => {
  const wrapper = shallow(<NewTodoForm />);
});

//snapshot test
it('matches snapshot', () => {

    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});


//
it("allows for changes in name, qty", function() {

    let wrapper = mount(<NewTodoForm/>);
    const textInput = wrapper.find("#text")
    textInput.instance().value = "test"
    textInput.simulate("change")

    expect(wrapper.state().text).toEqual("test");
});

  it("runs a mocked fn on submit", function () {
    const submitFn = jest.fn();
    let wrapper = mount(
      <NewTodoForm triggerCreate={submitFn} />
    );
    const form = wrapper.find("form")

    form.simulate("submit")

    expect(submitFn).toHaveBeenCalled();
  });

  it("resets state on submit", function () {
    const submitFn = jest.fn();

    let wrapper = mount(<NewTodoForm triggerCreate={submitFn} />);
    const textInput = wrapper.find("#text")
    textInput.instance().value = "test"
    textInput.simulate("change")

    expect(wrapper.state().text).toEqual("test");

    const form = wrapper.find("form");
    form.simulate("submit");

    // after submit, we expect the state to reset
    expect(wrapper.state()).toEqual({
      text: '',

    })
  });


