import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'list2-comp',
    templateUrl: 'list2.component.html',
    styles: [".bbox { color: grey; background:#ececec; padding:5px 10px}"]
})

export class List2Component{
    @Input() lis:any;
}