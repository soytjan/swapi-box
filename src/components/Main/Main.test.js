import React from 'react';
import Main from './Main';

describe('Main', () => {
  it('expect to exist', () => {
    expect(Main).toBeDefined();
  })

  it.skip('should match snapshot', () => {
    const mockFilm = {title: "Revenge of the Sith", crawl: "War! The Republic is crumbling under attacks by t…ate mission to rescue the captive Chancellor....", releaseDate: "2005-05-19"};
    const mockPeople = [{ name: "Luke Skywalker",homeworld: "Tatooine", population: 200000,species: "Human" }];
    const mockPlanet = [{name: "Coruscant", terrain: "cityscape, mountains", population: "1000000000000", climate: "temperate", residents: ["Finis Valorum", "Adi Gallia", "Jocasta Nu"]}];
    const mockVehicle = [{ "name": "Sand Crawler","model": "Digger Crawler", "passengers": "30", "vehicleClass": "wheeled"}];
    const mockFavClick = jest.fn();
    const renderedComponent = shallow(<Main film={mockFilm} people={mockPeople} vehicles={mockVehicle} planets={mockPlanet} onFavClick={mockFavClick} favorites={[]} />)

    expect(renderedComponent).toMatchSnapshot();
  })

  // do i need to check for all the routes? 
})