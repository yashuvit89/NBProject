import * as types from './types'
import Api from '../lib/api'

// let REQUEST_URL = "http://www.nobroker.in/api/v1/property/filter/region/ChIJLfyY2E4UrjsRVq4AjI7zgRY/?

// export function fetchRecipes(ingredients) {
//   return (dispatch, getState) => {
//     const params = [
//       `i=${encodeURIComponent(ingredients)}`,
//       'p=1'
//     ].join('&')
//     return Api.get(`/api/?${params}`).then(resp => {
//       dispatch(setSearchedRecipes({recipes: resp}));
//     }).catch( (ex) => {
//       console.log(ex);
//     });
//   }
// }

export function fetchRecipes() {
  return (dispatch, getState) => {
    const params = [
      'ageNo=1',
      'radius=1',
      'rent=0,2000000',
      'orderBy=nbRank,desc',
      'city=bangalore',
      'latitude=12.9279232',
      'longitude=77.62710779999998',
      'placeId=ChIJLfyY2E4UrjsRVq4AjI7zgRY',
      'lat_lng=12.9279232,77.62710779999998',
      'sharedAccomodation=0'
    ].join('&')
    return Api.get(`/api/v1/property/filter/region/ChIJLfyY2E4UrjsRVq4AjI7zgRY/?${params}`).then(resp => {
      // console.log("Inside fetch done", resp);
      dispatch(setSearchedRecipes({recipes: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearchedRecipes({ recipes }) {
  // console.log("Inside set searched recipes", { recipes });
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}
