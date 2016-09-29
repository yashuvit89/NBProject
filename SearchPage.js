/* @flow */

import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
export default class SearchPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

	componentDidMount () {
		fetch("https://facebook.github.io/react-native/movies.json")
		.then((response) => {
			console.log("Y0", response);
			response.json()
		})
		.catch((error) => {
			console.log("Errorrrr");
		})
		.then((responseData) => {
			console.log(responseData);
		})
		.done();
	}

	_urlForQueryAndPage () {
			return (
				"https://facebook.github.io/react-native/movies.json"
				// API_URL + 'lists/movies/in_theaters.json?apikey=' + apiKey +
				// '&page_limit=20&page=' + pageNumber
			);
	}

  render() {
    return (
		<View style={styles.helloworld}>
			<Text style={styles.helloText}>
				Search Page
			</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	helloText: {
		color: 'red'
	},
});
