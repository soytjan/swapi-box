import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it('expect to exist', () => {
    expect(CardContainer).toBeDefined();
  })

  it.skip('should match snapshot', () => {
    const mockData = [{name: "Coruscant", terrain: "cityscape, mountains", population: "1000000000000", climate: "temperate", residents: ["Finis Valorum", "Adi Gallia", "Jocasta Nu"]}];
    const mockFavClick = jest.fn();
    const renderedComponent = shallow(<CardContainer data={mockData} type='planets' onFavClick={mockFavClick} favorites={[]} />)

    expect(renderedComponent).toMatchSnapshot();
  })
})