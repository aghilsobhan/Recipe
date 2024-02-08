import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import viewRecipe from './view/viewRecipe.js';

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    viewRecipe.renderSpinner();

    //1 -  loadeRecipe
    await model.loadRecipe('5ed6604591c37cdc054bc886');

    //2- render Recipe
    viewRecipe.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  viewRecipe.addHandlerRender(controlRecipe);
};
init();
///////////////////////////////////////
