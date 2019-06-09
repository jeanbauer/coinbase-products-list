
import 'isomorphic-fetch'
import { wait } from '@testing-library/react-native'
import getProducts from '../api'

describe('Api module', () => {
  it('getProducts and getStats setting products twice', async () => {
    const setProductsCallback = jest.fn()
    const fakeFetch = () => ({ json: () => [{ id: 'btc' }] })
    jest.spyOn(global, 'fetch').mockImplementation(fakeFetch)

    await wait(() => {
      getProducts(setProductsCallback)

      expect(setProductsCallback).toHaveBeenCalledTimes(2)
      expect(setProductsCallback).toHaveBeenCalledWith([{ id: 'btc' }])
    })
  })
})