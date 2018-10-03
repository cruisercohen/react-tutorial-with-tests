import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Board from './Board';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



test('sets square to X when clicked', () => {
    const board = mount(<Board />);
    const firstSquare = board.find('Square').first();
    expect(firstSquare.text()).toBe('');
    firstSquare.simulate('click');
    expect(firstSquare.text()).toBe('X');
});