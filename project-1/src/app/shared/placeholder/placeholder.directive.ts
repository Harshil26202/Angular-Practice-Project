import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}