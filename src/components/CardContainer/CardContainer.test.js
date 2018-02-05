import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let mockFavClick;
  let mockData;

  beforeAll(() => {
    mockFavClick = jest.fn();
    mockData = [
      {name: "Coruscant", 
      terrain: "cityscape, mountains", 
      population: "1000000000000", 
      climate: "temperate", 
      residents: ["Finis Valorum", "Adi Gallia", "Jocasta Nu"]}
    ];

  })

  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<CardContainer swData={mockData} type='planets' onFavClick={mockFavClick} favorites={[]} />)

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have Loading page if no data is passed in', () => {
    const renderedComponent = shallow(<CardContainer swData={[]} type='planets' onFavClick={mockFavClick} favorites={[]} />)

    expect(renderedComponent).toMatchSnapshot();
  });

  it('when there are no favorites, should have a message indicating there are no favorites', () => {
    const renderedComponent = shallow(<CardContainer swData={[]} type='favorites' onFavClick={mockFavClick} favorites={[]} />)

    expect(renderedComponent).toMatchSnapshot();
  });
})