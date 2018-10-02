import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Square from './Square';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('sets square to X when clicked', () => {
    const square = shallow(<Square />);
    expect(square.text()).toBe('');
    square.simulate('click');
    expect(square.text()).toBe('X');
});
