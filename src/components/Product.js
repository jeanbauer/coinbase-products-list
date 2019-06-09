import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Product = ({ id, stats = {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>{id}</Text>
      </View>

      {stats.volume_30day ?
        <View style={styles.content}>
          <Text>High: {stats.high}</Text>
          <Text>Last: {stats.last}</Text>
          <Text>Low: {stats.low}</Text>
          <Text>Open: {stats.open}</Text>
          <Text>Volume: {stats.volume}</Text>
          <Text>Volume_30day: {stats.volume_30day}</Text>
        </View>
        :
        <View style={styles.title}>
          <Text>Loading...</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderRadius: 10,
    textAlign: 'center',
    margin: 30,
    marginBottom: 0,
    padding: 30,
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
  },
  content: {
    flex: 2,
  }
})

export default Product
