import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {

        // when the route is changed scroll to the top of the page
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
        });

        // manually perform initial navigation - required in hybrid app
        this.router.initialNavigation();
    }

}