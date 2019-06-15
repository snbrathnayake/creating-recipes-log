import { Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { ViewRecipesComponent } from './components/view-recipes/view-recipes.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { routePaths } from './route-paths';
import { ViewRecipeMoreComponent } from './components/view-recipe-more/view-recipe-more.component';

export const routes: Routes = [
  {
    path: routePaths.root,
    component: RootComponent,
    pathMatch: 'full',
  },
  {
    path: 'view-recipe-more/:id',
    component: ViewRecipeMoreComponent,
  },
  {
    path: 'view-recipes',
    component: ViewRecipesComponent,
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
  },
];