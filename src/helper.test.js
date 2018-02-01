import {cleanFilmData, 
        cleanPeopleData,
        cleanVehicleData,
        cleanPlanetData,
        getPlanetResidents} from './helper.js';

import {
  mockFilmData,
  mockCleanFilmData,
  mockPeopleData,
  mockCleanPeopleData,
  mockPlanetData,
  mockCleanPlanetData,
  mockVehicleData,
  mockCleanVehicleData
} from './mockData';

describe('HELPER', () => {
  it('fetch is called with the expected params when cleanPeopleData', () => {
    // const expectedParams = 'url'
  })

  it('makes a clean array of film data given to it', () => {
    const result = cleanFilmData(mockFilmData)

    expect(result).toEqual(mockCleanFilmData)
  })

  it.skip('makes a clean array of people data given to it', () => {
    const result = cleanPeopleData(mockPeopleData)

    expect(result).toEqual(mockCleanPeopleData)
  })

  it('makes a clean array of vehicle data given to it', () => {
    const result = cleanVehicleData(mockVehicleData)

    expect(result).toEqual(mockCleanVehicleData)
  })

  it.skip('makes a clean array of planet data given to it', () => {
    const result = cleanPlanetData(mockPlanetData)

    // expect(result).toEqual(mockCleanPlanetData)
    // expect(result).resolves.toEqual(mockCleanPlanetData);
  })

  it('returns an object when status code is ok', () => {
    const mockUrls = [
      "https://swapi.co/api/people/5/", 
      "https://swapi.co/api/people/68/", 
      "https://swapi.co/api/people/81/"
    ];
    const mockResidents = [
      "Leia Organa", 
      "Bail Prestor Organa", 
      "Raymus Antilles"
    ]

    expect(getPlanetResidents(mockUrls)).resolves.toEqual(mockResidents);
  })
})