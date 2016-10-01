import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import PropertyListItemHeader from './PropertyListItemHeader'
import PropertyListItemFooter from './PropertyListItemFooter'

export default class PropertyListItem extends Component {
  render() {
    return (
		<View style={styles.propertyListItemCard}>
			<PropertyListItemHeader>	
				<Text classname='title' style={styles.propertyTitle}> {this.props.propertyData.title}</Text>
				<Text classname='subTitle' style={styles.propertySubTitle}>{this.props.propertyData.secondaryTitle} </Text>
			</PropertyListItemHeader>
			<Image style={styles.propertyImg} source={{uri: 'http://beta.nobroker.in/static/img/resale/1bhk.jpg'}}/>
			<PropertyListItemFooter>
				<View><Text style={styles.flex1, styles.rightBorder}> Rs. {this.props.propertyData.rent} </Text></View>
				<View><Text style={styles.flex1}> {this.props.propertyData.furnishingDesc} Furnished </Text></View>
			</PropertyListItemFooter>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  propertyListItemCard: {
    alignItems: 'stretch',
    // shadowColor: 'black',
    // shadowRadius: 3,
    // shadowOpacity: 0.3,
    marginVertical: 20,
  },
  propertyTitle: {
  	fontSize: 15,
  	marginBottom: 5,
    fontWeight: '500',
  },
  propertySubTitle: {
  	fontSize: 13, 
  	paddingLeft: 5,
  },
  flex1: {
  	flex: 1,
  },
  propertyImg: {
  	height: 160,
  }
});
