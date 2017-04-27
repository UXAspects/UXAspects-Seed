import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'my-content-header',
    templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent {
    
    activeRoute: string[];
    breadcrumb = [{
        link: "samples",
        title: "Samples",
        children: [{
            link: "sample",
            title: "Sample 1"
        }]
    },{
        link: 'test',
        title: 'test'
    }];
    titles: Array<string> = [];
    heading: string;

    constructor(router:Router) {
        router.events.subscribe((event) => {
            if(event instanceof NavigationEnd){
                let route = '';
                if(event.urlAfterRedirects){
                    route = event.urlAfterRedirects;
                } else {
                    route = event.url;
                }
                this.activeRoute = route.split('/');
                this.activeRoute.shift();
                
                for(let i = 0; i < this.activeRoute.length; i++) {
                    for(let j = 0; j < Object.keys(this.breadcrumb).length; j++) {
                        if(this.breadcrumb[j].link === this.activeRoute[0]){
                            this.titles.push(this.breadcrumb[j].title);
                            this.activeRoute.shift();
                            this.getChildTitles(this.breadcrumb[j]);
                        }
                    }
                }
            }
        });
    }

    getChildTitles(currentBreadcrumb) {
        currentBreadcrumb = currentBreadcrumb;
        while(currentBreadcrumb.children){
            currentBreadcrumb = this.getTitle(currentBreadcrumb);
        }
        this.heading = this.titles.pop();
    }

    getTitle(currentBreadcrumb) {
        for(let i = 0; Object.keys(currentBreadcrumb).length; i++){
            if(currentBreadcrumb.children[i].link === this.activeRoute[0]) {
                this.titles.push(currentBreadcrumb.children[i].title);
                this.activeRoute.shift();
                return currentBreadcrumb.children[i];
            }
        }
    }
}