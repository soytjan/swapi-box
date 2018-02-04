import React from 'react';
import { shallow } from 'enzyme'; 
import Nav from './Nav';

describe('Nav', () => {
  it('expect to exist', () => {
    expect(Nav).toBeDefined();
  })

  it.skip('should match snapshot', () => {
    const mockOnClick = jest.fn();
    const renderedComponent = shallow(<Nav onClick={mockOnClick} />);

    expect(renderedComponent).toMatchSnapshot();
  })
  

  // need to check that all the buttons go to the proper routes 
})