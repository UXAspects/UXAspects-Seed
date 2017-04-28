import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
    selector: 'my-content-header',
    templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent {

    heading: string;
    breadcrumbs: string[] = [];

    constructor(router: Router) {

        router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
            let activeRoute = this.getActiveRoute(router.routerState.snapshot.root);
            
            // get the heading from the deepest route
            this.heading = activeRoute.data.title;
            this.breadcrumbs = this.getBreadcrumbs(activeRoute);
        });
    }

    getActiveRoute(route: ActivatedRouteSnapshot) {
        let activeRoute = route;

        while (activeRoute.children.length !== 0) {
            activeRoute = activeRoute.firstChild;
        }

        return activeRoute;
    }

    getBreadcrumbs(route: ActivatedRouteSnapshot) {
        let breadcrumbs = [];
        
        // ignore the immediate route - start with parent
        route = route.parent;

        // go through each parent and get their titles
        while (route.parent) {
            if (route.data.title) {
                breadcrumbs.push(route.data.title);
            }

            route = route.parent;
        }

        return breadcrumbs.reverse();
    }
}