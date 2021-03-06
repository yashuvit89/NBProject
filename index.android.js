/**
 * Nobroker Client App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = "http://www.nobroker.in/api/v1/property/filter/region/ChIJLfyY2E4UrjsRVq4AjI7zgRY/?pageNo=1&radius=1&rent=0,2000000&orderBy=nbRank,desc&city=bangalore&latitude=12.9279232&longitude=77.62710779999998&placeId=ChIJLfyY2E4UrjsRVq4AjI7zgRY&lat_lng=12.9279232,77.62710779999998&sharedAccomodation=0";

class NBProject extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true,
        });
      })
      .done();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading properties...
        </Text>
      </View>
    );
  }

  renderProperty(property) {
    const imageUri = "http://d3snwcirvb4r88.cloudfront.net/";
    const noPicUri = imageUri + "static/img/nopic_1bhk.jpg";

    const propertyImageUri = property.photos.length > 0 ? imageUri + "images/" +
      property.id + "/" +property.photos[0].imagesMap.thumbnail : noPicUri;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: propertyImageUri}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{property.title}</Text>
          <Text style={styles.year}>{property.nbLocality}</Text>
        </View>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProperty}
        style={styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('NBProject', () => NBProject);
