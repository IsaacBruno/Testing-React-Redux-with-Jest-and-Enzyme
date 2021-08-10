import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../../Utils';
import Header from './index';

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  test('Should render without errors', () => {
    const wrapper = findByTestAttribute(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  test('Should render a logo', () => {
    const logo = findByTestAttribute(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
