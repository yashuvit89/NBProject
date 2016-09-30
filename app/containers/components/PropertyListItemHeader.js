import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class PropertyListItemHeader extends Component {
  render() {
    return (
		<View style={styles.cardHeader}>
			{this.props.children}
		</View>
    );
  }
}
const styles = StyleSheet.create({
  cardHeader: {
  	padding: 10,
  	backgroundColor: 'white',
  },
});