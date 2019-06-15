import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { routes } from './routes';
import { ViewRecipesComponent } from './components/view-recipes/view-recipes.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { AppService } from './services/app.service';
import { RecipeService } from './services/recipe.service';
import { ViewRecipeMoreComponent } from './components/view-recipe-more/view-recipe-more.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { FeedbackService } from './services/feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    NavBarComponent,
    FooterBarComponent,
    ViewRecipesComponent,
    ViewRecipeComponent,
    SpinnerComponent,
    CreateRecipeComponent,
    ViewRecipeMoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [
    AppService,
    FeedbackService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
