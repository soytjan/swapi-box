/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let mockInfo;
  let mockFavClick;

  beforeAll(() => {
    mockInfo = {
      name: "Coruscant", 
      terrain: "cityscape, mountains", 
      population: "1000000000000", 
      climate: "temperate", 
      residents: ["Finis Valorum", "Adi Gallia", "Jocasta Nu"]};

    mockFavClick = jest.fn();
  })

  it('should have a class of people when it has people data', () => {
    const renderedComponent = shallow(<Card info={mockInfo} type='people' isFavorited={''} onFavClick={mockFavClick} key={1} />)

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a class of planets when it has planets data', () => {
    const renderedComponent = shallow(<Card info={mockInfo} type='planets' isFavorited={''} onFavClick={mockFavClick} key={1} />)

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a class of vehicles when it has vehicles data', () => {
    const renderedComponent = shallow(<Card info={mockInfo} type='vehicles' isFavorited={''} onFavClick={mockFavClick} key={1} />)

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a class of favorites when it is in the favorites section', () => {
    const renderedComponent = shallow(<Card info={mockInfo} type='planets' isFavorited={'favorited'} onFavClick={mockFavClick} key={1} />)
    
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should call onFavClick function when button is clicked', () => {
    const renderedComponent = shallow(<Card info={mockInfo} type='planets' isFavorited={''} onFavClick={mockFavClick} key={1} />)

    renderedComponent.find('button').simulate('click');
    expect(mockFavClick.mock.calls.length).toBe(1)
  });
})