import { NgModule } from "@angular/core";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item/recipes-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared-module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipesItemComponent,    
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
})
export class RecipesModule {

}