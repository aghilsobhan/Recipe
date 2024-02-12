import { async } from 'regenerator-runtime';
import {API_URL} from '../js/config'
import {getJson} from "../js/view/helpers"
export const state={
    recipe:{},
    search:{
        query:'',
        results:[]
    }
}
export const loadRecipe=async function(id){
    try {
        const data=await getJson(`${API_URL}/${id}`);
         let { recipe } = data.data;
          state.recipe = {
            id: recipe.id,
            publisher: recipe.publisher,
            title: recipe.title,
            sourcUrl: recipe.source_url,
            image: recipe.image_url,
            serving: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredient: recipe.ingredients,
          };
        
    } catch (error) {
        console.log(error)
        //alert(error);
       
    }

}
export const loadSearchRsault=async function(query){
    try {
        const res=await    getJson(`${API_URL}/?search=${query}`);
 state.search.results=res.data.recipes.map(rec=>{
    return {
        id:rec.id,
        title:rec.title,
        publisher:rec.publisher,
        image:rec.image_url,
    }
 })
        console.log(res);
    } catch (error) {
   throw error     
    }
 
}
loadSearchRsault('pizza');