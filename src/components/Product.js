import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Product = ({ id, stats = {} }) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      {stats.volume_30day ?
        <View>
          <Text>High: {stats.high}</Text>
          <Text>Last: {stats.last}</Text>
          <Text>Low: {stats.low}</Text>
          <Text>Open: {stats.open}</Text>
          <Text>Volume: {stats.volume}</Text>
          <Text>Volume_30day: {stats.volume_30day}</Text>
        </View>
        :
        <View>
          <Text>Loading...</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Product
