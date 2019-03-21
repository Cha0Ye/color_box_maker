import React from 'react';
import Box from './Box';
import { shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

let wrapper;

beforeEach(()=>{
    const style = {width: '10px',
                    height: '10px', backgroundColor: 'blue'};
    wrapper = mount(<Box boxStyle={ style } />);
})

// smoke test
it('renders without crashing', () => {
    const style = {width: '10px',
                    height: '10px', backgroundColor: 'blue'};
  const wrapper = shallow(<Box boxStyle={ style } />);
});

// snapshot test
it('matches snapshot', () => {

    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});


