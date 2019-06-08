import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

async function getProducts(setProducts) {
  try {
    const response = await fetch('https://api-public.sandbox.pro.coinbase.com/products')
    const responseJson = await response.json()
    return setProducts(responseJson)
  } catch (error) {
    console.error(error)
  }
}

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
    <View style={styles.container}>
      {products.map(p => (
        <Text key={p.id}>
          {p.id}
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
})

