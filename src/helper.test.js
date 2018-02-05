/* eslint-disable */

import {
  getApiData,
  fetchAndParseApiData
} from './helper.js';

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

describe('helper', () => {

  describe('fetchAndParseApiData', () => {
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

  describe('getApiData("films")', () => {
    it('returns a clean array of film data', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData) 
        })
      }))

      const result = await getApiData('films')

      expect(result).toEqual(mockCleanFilmData)
    })
  })

  describe('getApiData("vehicles")', () => {
    it('returns a clean array of vehicles data', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockVehicleData) 
        })
      }))

      const result = await getApiData('vehicles');

      expect(result).toEqual(mockCleanVehicleData);
    })
  })

  describe('getApiData("planets")', () => {
    it('returns a clean array of planet data', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockPlanetData) 
        })
      }))

      const result = await getApiData('planets');

      expect(result).toEqual(mockCleanPlanetData);
    })
  })

  describe('getApiData("people")', () => {
    it('returns a clean array of people data', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockPeopleData) 
        })
      }))

      const result = await getApiData('people');

      expect(result).toEqual(mockCleanPeopleData)
    })
  })
})