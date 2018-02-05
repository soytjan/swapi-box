/* eslint-disable */

import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  it('matches snapshot', () => {
    const renderedComponent = shallow(<Footer />)

    expect(renderedComponent).toMatchSnapshot();
  })
})