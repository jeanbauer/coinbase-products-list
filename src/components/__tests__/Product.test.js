import React from 'react'
import { render } from '@testing-library/react-native'
import Product from '../Product'

describe('<Product />', () => {
  const product = {
    id: 'abc',
    stats: {
      high: '123',
      last: '234',
      low: '001',
      open: '777',
      volume: '888',
      volume_30day: '999',
    }
  }

  it('renders with expected props', async () => {
    const { getByText } = render(<Product {...product} />)

    expect(getByText(product.id)).toBeTruthy()
    expect(getByText(`High: ${product.stats.high}`)).toBeTruthy()
    expect(getByText(`Last: ${product.stats.last}`)).toBeTruthy()
    expect(getByText(`Low: ${product.stats.low}`)).toBeTruthy()
    expect(getByText(`Open: ${product.stats.open}`)).toBeTruthy()
    expect(getByText(`Volume: ${product.stats.volume}`)).toBeTruthy()
    expect(getByText(`Volume_30day: ${product.stats.volume_30day}`)).toBeTruthy()
  })
})
