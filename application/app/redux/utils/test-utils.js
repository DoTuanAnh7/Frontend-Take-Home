import React from 'react'
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux'
// Import your own reducer
import { setupStore } from '../store'
import { AuthProvider } from '../../../app/context/AuthContext';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <AuthProvider>
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}