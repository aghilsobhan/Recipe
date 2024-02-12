import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import viewRecipe from './view/viewRecipe.js';
import searchView from './view/searchView.js';
import resaultView from './view/resaultView.js';
if(module.hot){
  module.hot.accept();
}
const controlRecipe = async function () {
  try {
    const id = window.location;
    console.log(id);
    if(!id) return;
    viewRecipe.renderSpinner();

    //1 -  loadeRecipe
    await model.loadRecipe('5ed6604591c37cdc054bc886');

    //2- render Recipe
    viewRecipe.render(model.state.recipe);
  } catch (error) {
    viewRecipe.renderError();
    console.log(error);
  }
};
const controlSearchResult = async function () {
  try {
    resaultView.renderSpinner();
    const getQuery = searchView.getQuery();
    if (!getQuery) return;
    await model.loadSearchRsault(getQuery);
    console.log(model.state.search.results);
    resaultView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  viewRecipe.addHandlerRender(controlRecipe);
  searchView.addEventHandler(controlSearchResult);
};
init();
///////////////////////////////////////
