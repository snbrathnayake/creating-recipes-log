import { Component,  } from '@angular/core';

import { RecipeModel } from '../../models/recipe-model';
import { RecipeService } from '../../services/recipe.service';
import { routePaths } from '../../route-paths';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent {

  formRecipe: FormGroup;
  showMessage: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.formRecipe = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      category: new FormControl(),
      title: new FormControl(),
      chef: new FormControl(),
      restaurant: new FormControl(),
      description: new FormControl(),
      ingredients: new FormControl(),
      process: new FormControl(),
      image_url: new FormControl(),
    });
  }

  onSubmit() {
    const body: RecipeModel = Object.assign({}, this.formRecipe.value);
    const { recipeService, router } = this;
    let msg;
    recipeService.postRecipe(body)
      .subscribe((res: any) => {
        if (res.status === 201) {
          this.showMessage = true;
          msg = setTimeout(() => {
            this.showMessage = false;
            clearTimeout(msg);
            router.navigate([routePaths.root])
          }, 2000)
          this.reset();
        }
      }, e => console.log(e))

  }

  reset() {
    this.formRecipe.reset();
  }

}
