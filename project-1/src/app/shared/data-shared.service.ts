import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipes.model";
import { exhaustMap, map,take,tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeservice: RecipeService, private authSerivce: AuthService){

    }

    storeRecipes(){
        const recipes = this.recipeservice.getRecipes();
        this.http.put('https://angular-practice-8a933-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {

        });
    }
    fetchRecipes(){
        return this.http.get<Recipe[]>('https://angular-practice-8a933-default-rtdb.firebaseio.com/recipes.json'
        ).pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
                });
            }),
            tap(recipes => {
            this.recipeservice.setRecipes(recipes);
        })
    );
    }
}