/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme'; 
import Nav from './Nav';

describe('Nav', () => {
  let mockOnClick;
  let renderedComponent;
  
  beforeEach(() => {
    mockOnClick = jest.fn();
    renderedComponent = shallow(<Nav onClick={mockOnClick} />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
  
  it('should call onClick function with when People button is clicked', () => {
    renderedComponent.find('button.btn-1').simulate('click');

    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  it('should call onClick function with when Planets button is clicked', () => {
    renderedComponent.find('button.btn-2').simulate('click');

    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  it('should call onClick function with when Vehicles button is clicked', () => {
    renderedComponent.find('button.btn-3').simulate('click');

    expect(mockOnClick.mock.calls.length).toBe(1);
  });
})