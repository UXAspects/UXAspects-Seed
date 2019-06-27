import { AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';
import { NavigationMenuService } from '@ux-aspects/ux-aspects';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.less']
})
export class SideNavigationComponent implements AfterViewInit, OnDestroy {

  private _menuService: NavigationMenuService;
  private _subscription: Subscription;
  private _collapsed: boolean = false;
  private _limit: number;

  constructor(@Inject('$navigationMenu') menuService: any) {
    this._menuService = menuService;
    this._limit = this._menuService.collapseAtWidth();
    this._subscription = fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(this.resize.bind(this));
  }

  /**
   * Toggle the visibility of the navigation menu
   */
  toggle(): void {
    this._menuService.visible() ? this._menuService.hide() : this._menuService.show();
  }

  /**
   * Handle window resize - collapse if window gets too small
   */
  resize(): void {

    // determine if the menu should be collapsed
    const collapse = window.innerWidth < this._limit;

    // stop here if the menu doesn't need to change state
    if (this._collapsed === collapse) {
      return;
    }

    // update the menu state based on the window size
    collapse ? this._menuService.hide() : this._menuService.show();

    // update the state of the menu
    this._collapsed = collapse;
  }

  ngAfterViewInit(): void {
    $('#side-menu').metisMenu();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
