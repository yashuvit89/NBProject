import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class PropertyListItemFooter extends Component {
  render() {
    return (
		<View style={styles.cardFooter}>
			{this.props.children}
		</View>
    );
  }
}
const styles = StyleSheet.create({
  cardFooter: {
  	padding: 10,
  	backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});