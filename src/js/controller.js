
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import viewRecipe from './view/viewRecipe.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    //if (!id) return;
    viewRecipe.renderSpinner();

    //1 -  loadeRecipe
    await model.loadRecipe('5ed6604591c37cdc054bc886');
  
    //2- render Recipe
    viewRecipe.render(model.state.recipe);
  } catch (error) {
    console.log(error)
   // alert(error);
    //viewRecipe.ErrorTag();
  }

};
controlRecipe();
///////////////////////////////////////
