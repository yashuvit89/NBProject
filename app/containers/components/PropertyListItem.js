import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import PropertyListItemHeader from './PropertyListItemHeader'
import PropertyListItemFooter from './PropertyListItemFooter'

export default class PropertyListItem extends Component {
  render() {
    const imageUri = "http://d3snwcirvb4r88.cloudfront.net/";
    const noPicUri = imageUri + "static/img/nopic_1bhk.jpg";

    const propertyImageUri = this.props.propertyData.photos.length > 0 ? imageUri + "images/" +
      this.props.propertyData.id + "/" +this.props.propertyData.photos[0].imagesMap.medium : noPicUri;
    return (
		<View style={styles.propertyListItemCard}>
			<PropertyListItemHeader>
				<Text classname='title' style={styles.propertyTitle}> {this.props.propertyData.title}</Text>
				<Text classname='subTitle' style={styles.propertySubTitle}>{this.props.propertyData.secondaryTitle} </Text>
			</PropertyListItemHeader>
			<Image style={styles.propertyImg} source={{uri: propertyImageUri}}/>
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
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
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
