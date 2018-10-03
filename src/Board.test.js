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

test('sets the second square to O when clicked', () => {
    const board = mount(<Board />);
    const firstSquare = board.find('Square').first();
    const secondSquare = board.find('Square').at(1);
    expect(firstSquare.text()).toBe('');
    expect(secondSquare.text()).toBe('');
    firstSquare.simulate('click');
    expect(firstSquare.text()).toBe('X');
    expect(secondSquare.text()).toBe('');
    secondSquare.simulate('click');
    expect(firstSquare.text()).toBe('X');
    expect(secondSquare.text()).toBe('O');

})

test('x is first, o is second', () => {
    const board = shallow(<Board />);
    expect(board.state().xIsNext).toBe(true);
    board.find('Square').first().simulate('click');
    expect(board.state().xIsNext).toBe(false);
});