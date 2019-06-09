export const COINBASE_API = 'https://api-public.sandbox.pro.coinbase.com'

const getProducts = async setProducts => {
  try {
    const response = await fetch(`${COINBASE_API}/products`)
    const products = await response.json()

    // returns callback making React to call render with inital products
    // so user can already see something on screen
    setProducts(products)

    // concurrently getting product stats from all products
    const productsWithStats = await getProductsStats(products)
    setProducts(productsWithStats)
  } catch (error) {
    setProducts([])
  }
}

const getProductsStats = async products => {
  const fetchingProducts = products.map(({ id }) => getProduct(id))
  const stats = await Promise.all(fetchingProducts)

  return products.map(
    (product, index) => {
      product.stats = stats[index].stats
      return product
    }
  )
}

const getProduct = id => {
  const productEndpoint = `${COINBASE_API}/products/${id}/stats`

  return fetch(productEndpoint)
    .then(res => res.json())
    .then(stats => ({ id, stats }))
}

export default getProducts
