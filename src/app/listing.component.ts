import { Component, Input } from "@angular/core";

@Component({
    moduleId : module.id,
    selector: 'listing-comp',
    templateUrl: 'listing.component.html',
    styles: ['.box { border: 2px solid #ccc; padding: 10px 20px; background: red;}']
})

export class ListingComponent{

    @Input() des: any;

}