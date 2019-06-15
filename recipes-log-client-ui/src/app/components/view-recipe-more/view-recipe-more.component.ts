import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './../../models/recipe-model';
import { RecipeService } from '../../services/recipe.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { routePaths } from '../../route-paths';
import { FeedbackService } from './../../services/feedback.service';

@Component({
  selector: 'view-recipe-more',
  templateUrl: './view-recipe-more.component.html',
  styleUrls: ['./view-recipe-more.component.scss']
})
export class ViewRecipeMoreComponent implements OnInit {

  recipe: RecipeModel;
  numOfVotes: any = 0;

  constructor(
    private recipeService: RecipeService,
    private feedService: FeedbackService,
    private router: Router,
    private route: ActivatedRoute) {
    
   
    this.initRecipeIdFromRoute();
  }

  ngOnInit() {
    this.initFeedback();
  }
  
  initFeedback() {
    const { route, router, feedService } = this;
    route.params.subscribe((p: Params) => {
      const id: string = p['id'];
      if (id) {
        feedService.getVote(id)
          .subscribe((feed: any) => {
            console.log(feed);
            this.numOfVotes = 5
          })
      }
    });
  }

  initRecipeIdFromRoute() {
    const { route, router, recipeService } = this;
    route.params.subscribe((p: Params) => {
      const id: string = p['id'];

      if (id) {
        this.recipe = recipeService.recipes.find((rp: RecipeModel) => rp['_id'] === id);
      }

      if (this.recipe) {
        console.log(this.recipe)
      } else {
        router.navigate([routePaths.root]);
      }
    });
  }

  get getIngredients() {
    const { ingredients } = this.recipe;
    return ingredients.length > 0 ? this.recipe.ingredients.replace(/\n/g, ",") : 'no-ingredients';
  }

  get ready() {
    return true;
  }

  updateVote(vote: number) {
    if(this.numOfVotes <= 0) {
      this.numOfVotes = 0;
      return;
    }
    this.numOfVotes = this.numOfVotes += vote;
  }
}
