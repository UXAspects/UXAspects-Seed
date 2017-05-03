import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(router: Router) {
        router.initialNavigation();
    }

}