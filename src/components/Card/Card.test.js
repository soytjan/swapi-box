import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('expect to exist', () => {
    expect(Card).toBeDefined();
  })

  it.skip('should match snapshot', () => {
    const mockInfo = {name: "Coruscant", terrain: "cityscape, mountains", population: "1000000000000", climate: "temperate", residents: ["Finis Valorum", "Adi Gallia", "Jocasta Nu"]};
    const mockFavClick = jest.fn();
    const renderedComponent = shallow(<Card info={mockInfo} type='planets' isFavorited={false} onFavClick={mockFavClick} key={1} />)

    expect(renderedComponent).toMatchSnapshot();
  })
})