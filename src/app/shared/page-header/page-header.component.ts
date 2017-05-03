import { Component, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'my-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.less']
})

export class PageHeaderComponent implements AfterViewInit, OnDestroy {

    expanded = false;
    navbar: HTMLElement;
    searchBar: HTMLInputElement;
    observer: MutationObserver;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        this.navbar = this.elementRef.nativeElement.querySelector('.navbar-static-top');
        this.searchBar = this.elementRef.nativeElement.querySelector('.expand-input input');

        this.observer = new MutationObserver(mutations => {
            mutations.filter(mutation => mutation.attributeName === 'class')
                .forEach(mutation => {

                    let element = mutation.target as HTMLElement;

                    if (!element.classList.contains('show-search')) {
                        this.expanded = false;
                    }

                });
        });

        this.observer.observe(this.navbar, { attributes: true });
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }



    expandSearch(event: any) {
        this.expanded = !this.expanded;
        
        if (this.expanded) {
            setTimeout(_ => this.searchBar.focus());
        }
    }
}
