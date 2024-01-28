export const state={
    recipe:{}
}
export const loadRecipe=async function(id){
    try {
        const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
          );
          const data = await res.json();
          if (!res.ok) throw new Error(`${data.status} (${res.status})`);
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