import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

export default class ChartPie extends Component {
  render() {
    const widthAndHeight = 250

    const series = [
      { value: 430, color: '#272459' },
      { value: 321, color: '#004987' },
      { value: 185, color: '#007aa2' },
      { value: 123, color: '#a3ceef' },
    ]

    return (
        <View style={styles.container}>
          <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.45} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
})
