import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

// export const searchedRecipes = createReducer({}, {
// });
export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state = {}, action) {
    // let newState = {}
    action.recipes.data.forEach( (recipe) => {
      let id = recipe.id
      state[id] = Object.assign({}, recipe, { id });
    });

    console.log("State length", Object.keys(state).length);

    return state;
    // return newState;
  },

});

export const recipeCount  = createReducer(0, {
  [types.ADD_RECIPE](state, action){
    return state + 1;
  },
  [types.SET_SEARCHED_RECIPES](state, action) {
    return action.recipes.data.length;
  }
});

export const location = createReducer({}, {
  [types.ADD_LOCATION](state, action){
    console.log("Add location reducer", state);
    console.log("Location action", action);
    return Object.assign({}, state, action.location);
    // return state;
  },
});
