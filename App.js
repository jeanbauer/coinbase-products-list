import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Home from './src/containers/Home'

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Home />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00a8ff',
  }
})

export default App
