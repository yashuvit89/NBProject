import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

export default class AutoComplete extends Component {
  searchPressed(locationData) {
    console.log("Search Pressed");
    this.props.addLocation(locationData);

    this.setState({ searching: true })
    this.props.fetchRecipes(locationData).then( (res) => {
      this.setState({searching: false })
    });
  }

  render() {
    // console.log("Inside AutoComplete props", this.props);
    // const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
    // const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
    return (
      <GooglePlacesAutocomplete

        placeholder='Enter locality to search'
        minLength={3} // minimum length of text to search
        autoFocus={false}
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          // console.log(details);
          // console.log(this.props);
          details.pageNo = 1;
          this.searchPressed(details);
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyAHYj1cGrlDHjWrnTIjDFPi6fZE35U6ruk',
          language: 'en', // language of the results
          components: 'country:in'

          // types: '(cities)', // default: 'geocode'
        }}
        styles={{
          container: {
            flex: 0.1,
          },
          poweredContainer: {
            flex: 0,
            height: 0,
          },
          powered: {
            flex: 0,
            height: 0,
          },
          listView: {
            zIndex: 2,
            position: 'absolute',
          },
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          // rankby: 'distance',
          // types: 'food',
        }}


        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

        // predefinedPlaces={[homePlace, workPlace]}
      />
    );
  }
}
