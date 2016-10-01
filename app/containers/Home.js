import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { appStyle } from '../styles';
import AutoComplete from './components/Autocomplete1';
import PropertyListItem from './components/PropertyListItem';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { searching: false, ingredientsInput: '' }
  }

  searchPressed() {
    // console.log("Search Pressed");
    // this.props.fetchRecipes('bacon, cucumber, bannana');

    // this.setState({ searching: true })
    // this.props.fetchRecipes(this.state.ingredientsInput).then( (res) => {
    //   this.setState({searching: false })
    // });
  }

  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }

  getNextPage() {
    console.log("Inside next page");

    console.log("Search Pressed");
    var location = this.props.location;
    location.pageNo = location.pageNo + 1;
    this.props.addLocation(location);

    this.setState({ searching: true })
    this.props.fetchRecipes(location).then( (res) => {
      this.setState({searching: false })
    });
  }

  render() {
    return (
      <View style={styles.scene}>
        <AutoComplete style={styles.searchSection} { ...this.props }/>
        <ScrollView style={styles.scrollSection} >
         {!this.state.searching && this.recipes().map((property) => {
           return <TouchableHighlight key={property.id}  style={styles.searchButton} onPress={ () => this.props.navigate({ key: 'Detail', id: property.id}) }>
           <View><PropertyListItem propertyData={property} /></View>
         </TouchableHighlight>
         })}
         {this.state.searching ? <Text>Searching...</Text> : null }
         {Object.keys(this.props.searchedRecipes).length > 0 ? <TouchableHighlight style={styles.searchButton} onPress={ () => this.getNextPage()}>
            <View>
             <Text style={styles.resultText}>Show more</Text>
            </View>
          </TouchableHighlight> : null }
       </ScrollView>
      </View>
    )
  }

  // <ScrollView style={styles.scrollSection}>
  //   {!this.state.searching && this.recipes().map((property) => {
  //     return (<View key={property.id}>
  //       <Text style={styles.resultText}>{property.title}</Text>
  //       <Text style={styles.resultText}>{property.nbLocality}</Text>
  //       <Image source={ {uri: "http://d3snwcirvb4r88.cloudfront.net/" + "static/img/nopic_1bhk.jpg"} } style={styles.resultImage} />
  //     </View>)
  //   })}
  //   {this.state.searching ? <Text>Searching...</Text> : null}
  // </ScrollView>

  // render() {
  //   return (
  //     <View style={styles.scene}>
  //       <View style={styles.searchSection}>
  //         <TextInput style={styles.searchInput}
  //           returnKeyType="search"
  //           placeholder="Ingredients (comma delimited)"
  //           onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
  //           value={this.state.ingredientsInput}
  //         />
  //         <TouchableHighlight style={styles.searchButton} onPress={ () => this.searchPressed() }>
  //           <Text>Fetch Recipes</Text>
  //         </TouchableHighlight>
  //       </View>
  //       <ScrollView style={styles.scrollSection} >
  //         {!this.state.searching && this.recipes().map((recipe) => {
  //           return <TouchableHighlight key={recipe.id}  style={styles.searchButton} onPress={ () => this.props.navigate({ key: 'Detail', id: recipe.id}) }>
  //           <View>
  //             <Image source={ { uri: recipe.thumbnail } } style={appStyle.resultImage} />
  //             <Text style={ appStyle.resultText } >{recipe.title}</Text>
  //           </View>
  //         </TouchableHighlight>
  //         })}
  //         {this.state.searching ? <Text>Searching...</Text> : null }
  //       </ScrollView>
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    // height: 30,
    // flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flex: 0.1,
  },
  scrollSection: {
    // flex: 0.8
  },
  searchButton: {
    // flex: 0.3,
  },
  searchInput: {
    flex: 0.7,
  },
  resultImage: {
    height: 150,
  },
  resultText: {
    // backgroundColor: '#000',
    // color: '#FFF',
    height: 20,
  }
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    location: state.location
  };
}

export default connect(mapStateToProps)(Home);
