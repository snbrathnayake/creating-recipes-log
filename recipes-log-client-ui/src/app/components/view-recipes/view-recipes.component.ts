import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe-model';
import { routePaths, sliceToSlash } from '../../route-paths';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.scss']
})
export class ViewRecipesComponent implements OnInit {

  recipes: RecipeModel[] = [];
  categories: string[] = [];
  Form: FormGroup;
  selectedRecipe = 'default';
  isRecipeSelected = false;

  constructor(private recipeSerice: RecipeService, private router: Router) {
    // this.recipeSerice.getRecipes().subscribe((res: RecipeModel[]) => {
    //   this.recipes = res;
    // }, (e) => console.log(e))
  }

  ngOnInit() {
    this.recipeSerice.getRecipes().subscribe((res: RecipeModel[]) => {
      this.recipes = res;
      this.setCategories(this.recipes);
    }, (e) => console.log(e))

    this.Form = new FormGroup({
      recipeList: new FormControl('default'),
    });
  }

  onChange(newValue) {
    this.selectedRecipe = newValue;
    this.isRecipeSelected = this.selectedRecipe !== 'default';


    if (this.isRecipeSelected) {
      this.recipes = this.recipeSerice.recipes.filter(recipe => recipe.category === this.selectedRecipe);
    } else {
      this.recipes = this.recipeSerice.recipes;
    }

  }

  recipeDetail(recipe: RecipeModel) {
    const path = sliceToSlash(routePaths.recipeDetail);
    this.router.navigate([path, recipe._id]);
  }

  get ready(): boolean {
    return this.recipes.length > 0;
  }

  private setCategories(recipes: RecipeModel[]): void {
    let unique: string[] = [];

    recipes.filter((recipe) => {
      if (!unique.includes(recipe.category)) {
        unique.push(recipe.category);
      }
    });
    unique.map((category: string) => this.categories.push(category));
  }

}
