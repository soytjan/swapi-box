/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getApiData } from '../../helper';
import { mockFilmData,
  mockCleanFilmData,
  mockPeopleData,
  mockCleanPeopleData,
  mockPlanetData,
  mockCleanPlanetData,
  mockVehicleData,
  mockCleanVehicleData
} from '../../mockData';

describe('App', () => {
  it('expect to exist', () => {
    expect(App).toBeDefined();
  });

  it('should match the snapshot', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData) 
      })
    }))

    const renderedComponent = await shallow(<App />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('initial state starts with default properties', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData) 
      })
    }));

    const renderedComponent = await shallow(<App />);

    expect(renderedComponent.state().films).toEqual([]);
    expect(renderedComponent.state().people).toEqual([]);
    expect(renderedComponent.state().planets).toEqual([]);
    expect(renderedComponent.state().favorites).toEqual([]);
    expect(renderedComponent.state().film).toEqual({});
  });

  it('on componentDidMount state films array is set', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData) 
        })
      }))

    const renderedComponent = await shallow(<App />);

    await renderedComponent.instance().componentDidMount();

    expect(renderedComponent.state().films).toEqual(mockCleanFilmData);
  })

  it('when user first clicks on People nav button and the page is populated with people data and people state array is set', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockPeopleData) 
        })
      }))

    const renderedComponent = await shallow(<App />);
    
    await renderedComponent.instance().handleNavClick('people');
  
    expect(renderedComponent.state().people).toEqual(mockCleanPeopleData);
  });

  it('when user first clicks on Planets nav button and the page is populated with planets data and planets state array is set', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockPlanetData) 
        })
      }))

    const renderedComponent = await shallow(<App />);
    
    await renderedComponent.instance().handleNavClick('planets');
  
    expect(renderedComponent.state().planets).toEqual(mockCleanPlanetData);
  });

  it('when user first clicks on Vehicles nav button and the page is populated with vehicles data and vehicles state array is set', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockVehicleData) 
        })
      }))

    const renderedComponent = await shallow(<App />);
    
    await renderedComponent.instance().handleNavClick('vehicles');
  
    expect(renderedComponent.state().vehicles).toEqual(mockCleanVehicleData);
  });

  it('when user clicks Favorite button on card and it is not favorited already, it is added to the favorites state array', async () => {
    const renderedComponent = await shallow(<App />);
    const mockCardData = {
      "name": "Sand Crawler", 
      "model": "Digger Crawler", 
      "passengers": "30", 
      "vehicleClass": "wheeled", 
    }

    renderedComponent.instance().handleFavClick(mockCardData, '');
   
    expect(renderedComponent.state().favorites).toContain(mockCardData);
  });

  it('when user clicks Favorite button on card and it is already favorited, it is removed from the favorites state array', async () => {
    const renderedComponent = await shallow(<App />);
    const mockCardData = {
      "name": "Sand Crawler", 
      "model": "Digger Crawler", 
      "passengers": "30", 
      "vehicleClass": "wheeled", 
    }

    renderedComponent.instance().handleFavClick(mockCardData, 'favorited');
   
    expect(renderedComponent.state().favorites).toEqual([]);
  });

})

