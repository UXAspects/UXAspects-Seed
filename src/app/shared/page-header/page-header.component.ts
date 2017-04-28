import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
    selector: 'my-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.less']
})

export class PageHeaderComponent implements AfterViewInit {

    expanded: boolean;
    searchInput: HTMLInputElement;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        this.searchInput = this.elementRef.nativeElement.querySelector('input');
    }

    goBack() { }

    expandSearch(event: any) {
        this.expanded = !this.expanded;

        if (this.expanded) {
            setTimeout(_ => this.searchInput.focus());
        }
    }
}