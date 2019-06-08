import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import getProductsStats from '../utils/api'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsStats(setProducts)
  }, [])

  return (
    <View style={styles.container}>
      {products.map(p => (
        <Text key={p.id}>
          {p.id} - ${p.stats && p.stats.high}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stats: {
    marginTop: 20,
  }
})

export default Home
