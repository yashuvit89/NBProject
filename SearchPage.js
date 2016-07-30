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

  render() {
    return (
		<View style={styles.helloworld}>
			<Text style={styles.helloText}>
				Yo! Whats up? -- from SearchPage sdf
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
