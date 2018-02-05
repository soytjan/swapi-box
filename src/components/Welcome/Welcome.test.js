/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  it('should match snapshot', () => {
    const mockFilm = {title: "Revenge of the Sith", crawl: "War! The Republic is crumbling under attacks by t…ate mission to rescue the captive Chancellor....", releaseDate: "2005-05-19"};
    const renderedComponent = shallow(<Welcome film={mockFilm} />);

    expect(renderedComponent).toMatchSnapshot();
  })
})