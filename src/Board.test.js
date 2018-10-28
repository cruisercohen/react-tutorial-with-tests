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

test('don\'t allow click if already selected', () => {
    const board = mount(<Board />);
    const firstSquare = board.find('Square').first();
    firstSquare.simulate('click');
    expect(firstSquare.text()).toBe('X');
    expect(board.state().xIsNext).toBe(false);
    firstSquare.simulate('click');
    expect(firstSquare.text()).toBe('X');
    expect(board.state().xIsNext).toBe(false);
    
})

test('calculate winner', () => {
    const board = shallow(<Board />);
    expect(board.instance().calculateWinner(['X','X','O','','','','','',''])).toBe(null);
    expect(board.instance().calculateWinner(['X','X','X','','','','','',''])).toBe('X');
    expect(board.instance().calculateWinner(['O','O','X','O','X','X','O','',''])).toBe('O');
})

test('display winner', () => {
    const board = mount(<Board />);
    const winner = board.find('.winner');
    const s0 = board.find('Square').at(0);
    const s1 = board.find('Square').at(1);
    const s2 = board.find('Square').at(2);
    const s3 = board.find('Square').at(3);
    const s4 = board.find('Square').at(4);
    const s5 = board.find('Square').at(5);
    const s6 = board.find('Square').at(6);
    const s7 = board.find('Square').at(7);
    const s8 = board.find('Square').at(8);
    expect(winner.text()).toBe('');
    s0.simulate('click');
    expect(winner.text()).toBe('');
    s1.simulate('click');
    expect(winner.text()).toBe('');
    s3.simulate('click');
    expect(winner.text()).toBe('');
    s4.simulate('click');
    expect(winner.text()).toBe('');
    s6.simulate('click');
    expect(winner.text()).toBe('X');

})