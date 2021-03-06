import React from 'react';
import { render, getByText, Simulate } from 'react-testing-library';
import Header from '../header';
import 'jest-dom/extend-expect';
import { renderWithRouter } from '../../test-utils';

describe('Header', () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    };
  });

  let props = {
    logo: {
      aspectRatio: 'test.png',
      sizes: 'test.png',
      src: 'test.png',
      srcSet: 'test.png',
      srcSetWebp: 'test.png',
      srcSetWebp: 'test.png',
      tracedSVG: 'test.png',
    },
    menuItems: [
      { to: '/test', page: 'Test' },
      { to: '/test-2', page: 'Test 2' },
    ],
    paypalCartButtonCode: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
  ">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>`,
  };

  test('displays logo', () => {
    let { getByAltText } = renderWithRouter(<Header {...props} />);
    expect(getByAltText('site logo')).toBeDefined();
  });

  test('TODO: displays list of links', () => {});

  test('TODO: displays cart icon when cart value is passed', () => {});

  test('TODO: doesn\'t display cart icon when cart value is not passed', () => {});
});
