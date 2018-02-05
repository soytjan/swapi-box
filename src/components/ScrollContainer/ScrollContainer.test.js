/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import ScrollContainer from './ScrollContainer';

describe('ScrollContainer', () => {
  it('expect to exist', () => {
    expect(ScrollContainer).toBeDefined();
  })

  it('should match snapshot', () => {
    const mockFilm = {title: "Revenge of the Sith", crawl: "War! The Republic is crumbling under attacks by t…ate mission to rescue the captive Chancellor....", releaseDate: "2005-05-19"};
    const renderedComponent = shallow(<ScrollContainer {...mockFilm} />);

    expect(renderedComponent).toMatchSnapshot();
  })
})