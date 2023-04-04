import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor( private recipeSerice: RecipeService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(){
    this.subscription = this.recipeSerice.recipeChanged.subscribe(
      (recipes: Recipe[])=> {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeSerice.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
