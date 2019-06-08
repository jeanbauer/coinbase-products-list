
export const COINBASE_API = 'https://api-public.sandbox.pro.coinbase.com'

async function getProductsStats(setProducts) {
  try {
    const response = await fetch(`${COINBASE_API}/products`)
    const products = await response.json()

    setProducts(products)

    const fetchingProducts = products.map(({ id }) => getProduct(id))
    const stats = await Promise.all(fetchingProducts)

    const productsWithStats = products.map(
      (product, index) => {
        product.stats = stats[index].stats
        return product
      }
    )

    setProducts(productsWithStats)
  } catch (error) {
    console.error(error)
  }
}

const getProduct = (id) => {
  const productEndpoint = `${COINBASE_API}/products/${id}/stats`

  return fetch(productEndpoint)
    .then(res => res.json())
    .then(stats => ({ id, stats }))
}

export default getProductsStats
