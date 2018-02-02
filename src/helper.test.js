import {cleanFilmData, 
        cleanPeopleData,
        cleanVehiclesData,
        cleanPlanetsData,
        getApiData,
        fetchAndParseApiData} from './helper.js';

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

 // test makes calls with expected params
  // don't test that fetch works -- only need to test what I have written
  // ex test taht vehicles mock fn was called 
  // check that data that you're getting back
  // mock out full response from the API to check that cleaner is working
  // test that fetch works once => expect that it's going to return 
  // each helper function needs to have it's own 

describe('fetchAndParseApiData', () => {

  describe('API calls', () => {
    it('fetch is called with the expected params', () => {
      const expectedParams = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData) 
        })
      }))

      fetchAndParseApiData(expectedParams);
      expect(window.fetch).toHaveBeenCalledWith(expectedParams)
    })

    it('returns an object if the status code is ok', () => {
      const mockUrl = 'https://swapi.co/api/films/';

      expect(fetchAndParseApiData(mockUrl)).resolves.toEqual(mockFilmData);
    })

    it('throws an error if the status code is not ok', () => {
      const mockUrl = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

      expect(fetchAndParseApiData(mockUrl)).rejects.toEqual(Error('Error loading Star Wars facts!'))
    })
  })

  describe('getApiData', () => {
    // before block with all the mock functions 
    // make sure that it is calling all the mock functions
    it.skip('calls cleanPeopleData when the string people is passed in', () => {
      const cleanPeopleData = jest.fn();

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockPeopleData) 
        })
      }))
      
      const result = getApiData('people');
      expect(cleanPeopleData.mock.calls.length).toEqual(1);
      // expect(result).toEqual(mockCleanPeopleData);
    })

    it('calls cleanVehiclesData when the string vehicles is passed in', () => {
      let cleanVehiclesData;
      cleanVehiclesData = jest.fn();

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockVehicleData) 
        })
      }))
      
      expect(cleanVehiclesData).toHaveBeenCalled()

    })

    it('calls cleanPlanetsData when the string planets is passed in', () => {
      const cleanPlanetsData = jest.fn();
    })

    it('calls cleanFilmData when the string films is passed in', () => {
      const cleanFilmData = jest.fn();
    })    
  })

  describe('cleanFilmData', () => {
    it('makes a clean array of film data given to it', () => {
      const result = cleanFilmData(mockFilmData)

      expect(result).toEqual(mockCleanFilmData)
    })
  })

  describe('cleanVehicleData', () => {
    it('makes a clean array of vehicle data given to it', () => {
      const result = cleanVehiclesData(mockVehicleData)

      expect(result).toEqual(mockCleanVehicleData)
    })
  })

  describe('cleanPeopleData', () => {
    it.skip('makes a clean array of people data given to it', () => {
      const result = cleanPeopleData(mockPeopleData)

      expect(result).toEqual(mockCleanPeopleData)
    })
  })

  describe('cleanPlanetsData', () => {
    it.skip('makes a clean array of planet data given to it', () => {
      const result = cleanPlanetData(mockPlanetData)

    // expect(result).toEqual(mockCleanPlanetData)
    // expect(result).resolves.toEqual(mockCleanPlanetData);
    })
  })
  

  

  

  // it('returns an object when status code is ok', () => {
  //   const mockUrls = [
  //     "https://swapi.co/api/people/5/", 
  //     "https://swapi.co/api/people/68/", 
  //     "https://swapi.co/api/people/81/"
  //   ];
  //   const mockResidents = [
  //     "Leia Organa", 
  //     "Bail Prestor Organa", 
  //     "Raymus Antilles"
  //   ]

  //   expect(getPlanetResidents(mockUrls)).resolves.toEqual(mockResidents);
  // })
})