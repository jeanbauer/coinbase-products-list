
import React from 'react'
import { render, wait, cleanup } from '@testing-library/react-native'
import 'isomorphic-fetch' // so Jest can read 'fetch' as a global fn

import App from '../App'

describe('<App />', () => {
  const products = [{
    "id": "ETH-BTC",
  }, {
    "id": "BTC-USD",
  }]

  beforeEach(() => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => ({ json: () => products }))
  })

  afterEach(cleanup)

  it('shows products id', async () => {
    const { getByText } = render(<App />)

    await wait(() => {
      expect(getByText(/ETH-BTC/)).toBeTruthy()
      expect(getByText(/BTC-USD/)).toBeTruthy()
    })
  })
})
