import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RecipeModel } from './../models/recipe-model';

@Injectable()
export class RecipeService {

  private _recipes: RecipeModel[] = [];

  constructor(private app: AppService) { }

  getRecipes(): Observable<RecipeModel[]> {
    const result = new Subject<RecipeModel[]>();
    const { app } = this;

    this._recipes = [];

    app.getService<RecipeModel[]>(this.recipesPrefix)
      .subscribe((recipes: RecipeModel[]) => {
        this._recipes = recipes;
        result.next(this.recipes)
      }, (e) => this.recipes)

    return result;
  }

  postRecipe(body: RecipeModel): Observable<RecipeModel> {
    const result = new Subject<RecipeModel>();
    const { app } = this;

    app.postService<RecipeModel>(this.recipesPrefix, body)
      .subscribe((recipe: RecipeModel) => {
        result.next(recipe)
      }, e => result.error(e))
    return result;
  }

  private get recipesPrefix(): string {
    return this.app.urlWithApiVersion('recipes');
  }


  get recipes(): RecipeModel[] {
    return this._recipes;
  }

}
