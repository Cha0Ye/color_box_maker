import React from 'react';
import BoxList from './BoxList';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(() => {
    wrapper = mount(<BoxList />);
})

// smoke test
it('renders without crashing', () => {
    const wrapper = shallow(<BoxList />);
});

// snapshot test
it('matches snapshot', () => {

    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("adds boxes", function () {
    const items = [{ id: 1, width: '20px', height: '20px', backgroundColor: 'purple' }];
    const wrapper = mount(<BoxList />);

    wrapper.setState({ boxes: items });
    expect(wrapper.state().boxes).toEqual([
        { id: 1, width: '20px', height: '20px', backgroundColor: 'purple' }
    ]);

    // here we use the "instance" method
    // to get access to all instance methods defined on the component
    wrapper
        .instance()
        .create({ width: '40px', height: '40px', backgroundColor: 'blue' });

    expect(wrapper.state().boxes).toEqual([
        { id: 1, width: '20px', height: '20px', backgroundColor: 'purple' },
        { id: expect.any(String), width: '40px', height: '40px', backgroundColor: 'blue' }
    ]);
});

it("finds a form and successfully creates ", function() {
    const wrapper = mount(<BoxList />);

    const widthInput = wrapper.find("#width")
    widthInput.instance().value = "20px"
    widthInput.simulate("change")

    // expect(wrapper.state().width).toEqual("20px");

    const heightInput = wrapper.find("#height");
    heightInput.instance().value = '20px';
    heightInput.simulate("change");

    // expect(wrapper.state().height).toEqual('20px');

    const backgroundColorInput = wrapper.find("#backgroundColor");
    backgroundColorInput.instance().value = 'blue';
    backgroundColorInput.simulate("change");

    // expect(wrapper.state().backgroundColor).toEqual('blue');


    const form = wrapper.find("form");
    form.simulate("submit");

    expect(wrapper.state().boxes.length).toEqual(1);

    // since we are appending to the end, find the last item,
    // and make sure it matches what we have just created
    expect(
      wrapper.find("div").last().text()
    ).toEqual('X');
  });
