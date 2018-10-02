import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Square from './Square';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

//  Test from when we rendered the id
it('renders the square id', () => {
    const square = shallow(<Square value="2" />);
    expect(square.text()).toBe('2');
});
