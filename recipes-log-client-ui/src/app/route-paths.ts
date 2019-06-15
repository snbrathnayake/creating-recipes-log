export const routePaths = {
    root: '',
    createRecipe: 'create-recipe',
    viewRecipes: 'view-recipes',
    recipeDetail: 'view-recipe-more/:id',
}

export const sliceToSlash = (path: string) => path.slice(0, path.indexOf('/')); // only export 'recipe-detail -> [not:/id]'