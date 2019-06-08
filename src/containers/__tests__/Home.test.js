
import React from 'react'
import { render, wait, cleanup } from '@testing-library/react-native'
import 'isomorphic-fetch'
import Home from '../Home'

describe('<Home />', () => {
  describe('when API returns products', () => {
    afterEach(cleanup)

    jest.mock('../../utils/api', () =>
      setProducts => setProducts([{
        id: 'ETH-BTC',
        stats: {
          open: '0.02000000',
          high: '0.02000000',
          low: '0.01000000',
          volume: '0.12000000',
          last: '0.02000000',
          volume_30day: '1016508.17844833'
        }
      }])
    )

    it('shows products id', async () => {
      const { getByText } = render(<Home />)

      await wait(() => {
        expect(getByText(/ETH-BTC/)).toBeTruthy()
      })
    })

    it('shows stats', async () => {
      const { getByText } = render(<Home />)

      await wait(() => {
        expect(getByText(/0.02000000/)).toBeTruthy()
      })
    })
  })

  describe('when API fails to return products', () => {
    afterEach(cleanup)

    jest.mock('../../utils/api',
      setProducts => setProducts([])
    )

    it('doesnt show product id', async () => {
      const { queryByText } = render(<Home />)

      await wait(() => {
        expect(queryByText(/ETH-BTC/)).toBeFalsy()
      })
    })
  })
})
