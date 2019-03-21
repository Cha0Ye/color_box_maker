import React from 'react';
import NewBoxForm from './NewBoxForm';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(()=>{
    wrapper = mount(<NewBoxForm />);
})

// smoke test
it('renders without crashing', () => {
  const wrapper = shallow(<NewBoxForm />);
});

// snapshot test
it('matches snapshot', () => {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("allows for changes in name, qty", function() {

    let wrapper = mount(<NewBoxForm />);
    const widthInput = wrapper.find("#width")
    widthInput.instance().value = "20px"
    widthInput.simulate("change")

    expect(wrapper.state().width).toEqual("20px");

    const heightInput = wrapper.find("#height");
    heightInput.instance().value = '20px';
    heightInput.simulate("change");

    expect(wrapper.state().height).toEqual('20px');

    const backgroundColorInput = wrapper.find("#backgroundColor");
    backgroundColorInput.instance().value = 'blue';
    backgroundColorInput.simulate("change");

    expect(wrapper.state().backgroundColor).toEqual('blue');

  });

  it("runs a mocked fn on submit", function () {
    const submitFn = jest.fn();
    let wrapper = mount(
      <NewBoxForm triggerCreate={submitFn} />
    );
    const form = wrapper.find("form")

    form.simulate("submit")

    expect(submitFn).toHaveBeenCalled();
  });

  it("resets state on submit", function () {
    const submitFn = jest.fn();

    let wrapper = mount(<NewBoxForm triggerCreate={submitFn} />);
    const widthInput = wrapper.find("#width")
    widthInput.instance().value = "20px"
    widthInput.simulate("change")

    expect(wrapper.state().width).toEqual("20px");

    const heightInput = wrapper.find("#height");
    heightInput.instance().value = '20px';
    heightInput.simulate("change");

    expect(wrapper.state().height).toEqual('20px');

    const backgroundColorInput = wrapper.find("#backgroundColor");
    backgroundColorInput.instance().value = 'blue';
    backgroundColorInput.simulate("change");

    expect(wrapper.state().backgroundColor).toEqual('blue');

    const form = wrapper.find("form");
    form.simulate("submit");

    // after submit, we expect the state to reset
    expect(wrapper.state()).toEqual({
      width: '',
      height: '',
      backgroundColor: '',
    })
  });

