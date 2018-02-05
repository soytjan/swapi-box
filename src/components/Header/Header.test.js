import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('matches snapshot', () => {
    const mockFavArray = [{ model: "Digger Crawler", name: "Sand Crawler", passengers: "30",vehicleClass:"wheeled" }];
    const renderedComponent = shallow(<Header favCount={mockFavArray.length} />)

    expect(renderedComponent).toMatchSnapshot();
  })
})