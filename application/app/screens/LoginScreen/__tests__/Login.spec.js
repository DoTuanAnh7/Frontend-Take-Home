import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// We're using our own custom render function and not RTL's render.
import { setupStore } from '../../../redux/store'
import { renderWithProviders } from '../../../redux/utils/test-utils'
import Login from '..'
import { Platform } from 'react-native'




describe('Login component', () => {
  Platform.OS = 'android'
  const mockedParams = {
    route: { params: { currentBid: 'whatever-id' } },
    navigation: ''
  };


  test('renders correctly', () => {
    const tree = renderWithProviders(<Login {...mockedParams} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderWithProviders(<Login {...mockedParams} />).toJSON();
    expect(tree.children.length).toBe(1);
  });


})

