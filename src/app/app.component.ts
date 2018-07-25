import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Breadcrumb, PageHeaderIconMenu } from '@ux-aspects/ux-aspects';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {

  header: string;
  breadcrumbs: Breadcrumb[] = [];
  menus: PageHeaderIconMenu[] = [
    {
      icon: 'hpe-search'
    },
    {
      icon: 'hpe-notification',
      dropdown: [
        {
          icon: 'hpe-chat',
          title: 'You have 16 messages',
          subtitle: '4 minutes ago',
          divider: true
        },
        {
          icon: 'hpe-social-twitter',
          title: '3 New Followers',
          subtitle: '12 minutes ago',
          divider: true
        },
        {
          icon: 'hpe-cloud',
          title: 'Server Rebooted',
          subtitle: '4 minutes ago'
        }
      ]
    },
    {
      icon: 'hpe-actions',
      dropdown: [
        {
          header: true,
          title: 'John Doe',
          divider: true
        },
        {
          icon: 'hpe-user-settings',
          title: 'Settings'
        },
        {
          icon: 'hpe-logout',
          title: 'Log out'
        }
      ]
    }
  ];

  private _subscription: Subscription;

  constructor(router: Router, private _route: ActivatedRoute) {

    // perform initial navigation - required in a hybrid application
    router.initialNavigation();

    // watch for changes to the active route
    this._subscription = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.update.bind(this));
  }

  /**
   * Update Page Header and Breadcrumbs
   */
  update(): void {

    let route = this._route.snapshot;
    const breadcrumbs = [];

    // iterate through all the active routes
    while (route) {

      // if a header was defined then take it into account
      if (route.data.header) {

        // store the header
        this.header = route.data.header;

        // add the header to the list of breadcrumbs
        breadcrumbs.push({ title: this.header });
      }

      route = route.firstChild;
    }

    // filter out the current header from the breadcrumbs
    this.breadcrumbs = breadcrumbs.filter(breadcrumb => breadcrumb.title !== this.header);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
