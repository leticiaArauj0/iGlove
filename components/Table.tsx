import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

interface State {
    tableHead: string[];
    tableData: string[][];
}

export default class InfoTable extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableHead: ['Polegar', 'Indicador', 'Médio', 'Anelar', 'Mindinho'],
      tableData: [
        ['25%', '30%', '15%', '20%', '15%'],
        ['30%', '35%', '25%', '30%', '20%'],
        ['45%', '45%', '30%', '35%', '25%'],
        ['55%', '55%', '45%', '40%', '30%']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#03192d'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={{color: '#fff', margin: 'auto'}}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { width: '100%', backgroundColor: '#fff', paddingHorizontal: 20 },
  head: { height: 40, backgroundColor: '#272459' },
  text: { margin: 'auto', padding: 5, color: '#03192d', fontWeight: 600}
});