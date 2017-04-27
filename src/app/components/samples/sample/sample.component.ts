import { Component } from '@angular/core';

@Component({
    selector: 'my-sample',
    templateUrl: './sample.component.html'
})

export class SampleComponent {

    title: string;

    constructor() {
        this.title = 'Sample 1 Page'
    }
}