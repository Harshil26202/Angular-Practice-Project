import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directives";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaaceholderDirective,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [
        AlertComponent
      ]
})
export class SharedModule {

}