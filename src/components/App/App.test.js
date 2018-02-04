import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getApiData } from '../../helper';
import { mockFilmData } from '../../mockData';

describe('App', () => {
  it('expect to exist', () => {
    expect(App).toBeDefined();
  })

  it.skip('should match the snapshot', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData) 
        })
      }))

    const renderedComponent = await shallow(<App />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('initial state starts with a films array and a randomized film object', () => {

  });

  it('when user first clicks on People nav button and the page is populated with people data and people state array is set', () => {

  });

  it('when user first clicks on Planets nav button and the page is populated with planets data and planets state array is set', () => {

  });

  it('when user first clicks on Vehicles nav button and the page is populated with vehicles data and vehicles state array is set', () => {

  });

  it('when user clicks Favorite button on card, it is added to the favorites state array', () => {

  });

  it('when user clicks Favorite button on card and it is already in the array, it is removed from the favorites state array', () => {

  });

})

