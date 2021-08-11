import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttribute, checkProps } from '../../../Utils';

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 23,
          onlineStatus: false
        }]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  
  describe('Have props', () => {
    let wrapper;
    
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props);
    });

    test('Should render without errors', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    test('Should render a H1', () => {
      const h1 = findByTestAttribute(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    test('Should render a desc', () => {
      const desc = findByTestAttribute(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    test('Should not render', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
