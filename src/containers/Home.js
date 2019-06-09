import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import getProducts from '../utils/api'
import Product from '../components/Product'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
    <View style={styles.container}>
      {products.length ?
        products.map(product => <Product key={product.id} {...product} />) :
        <Text>Loading...</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Home
