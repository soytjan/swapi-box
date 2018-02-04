import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  it('expect to exist', () => {
    expect(App).toBeDefined();
  })

  it.skip('should match the snapshot', () => {
    const renderedComponent = shallow(<App />);

    expect(renderedComponent).toMatchSnapshot();
  });
})

