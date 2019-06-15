import { RecipeModel } from '../../models/recipe-model';
import { EventEmitter, Output, Input, Component } from '@angular/core';

@Component({
  selector: 'view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent {

  @Output() recipeMoreClicked = new EventEmitter<void>();
  @Input() recipe: RecipeModel;

  constructor() { }


  get ready(): boolean {
    return this.recipe !== undefined;
  }
  get recipeDecription() {
    const { recipe } = this;
    return (recipe.description.length > 200) ? `${recipe.description.slice(0, 200)}...` : recipe.description;
  }

  get recipeTitle() {
    const { recipe } = this;
    return (recipe.title.length > 22) ? `${recipe.title.slice(0, 22)}...` : recipe.title;
  }
}
