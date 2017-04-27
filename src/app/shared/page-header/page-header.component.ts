import { Component } from '@angular/core';

@Component({
    selector: 'my-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.less']
})

export class PageHeaderComponent {

    goBack() {}

    expandSearch(event: any) {
        let element = event.target;
        while ((element = element.parentElement) && !element.classList.contains('navbar-static-top'));
        element.classList.toggle('show-search');
        if(element.classList.contains("show-search")){
            element = element.getElementsByClassName("navbar-form-search")[0];
            element = element.getElementsByTagName("INPUT")[0];
            element.focus();
        }
    }
}