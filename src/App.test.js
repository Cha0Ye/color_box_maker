import React from 'react';
import App from './App';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// smoke test
it('renders without crashing', () => {
  const wrapper = shallow(<App />);
});
