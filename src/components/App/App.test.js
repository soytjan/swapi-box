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
})

