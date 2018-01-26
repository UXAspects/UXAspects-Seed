import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SideNavigationComponent } from './side-navigation.component';

declare const $: any;

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SideNavigationComponent ],
      providers: [
        { provide: '$navigationMenu', useValue: new MockMenuService() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;
    $.fn.extend({
      metisMenu: function() {}
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


export class MockMenuService implements NavigationMenuService {

  show(): void { }

  hide(): void { }

  visible(): boolean {
    return true;
  }

  collapseAtWidth(): number {
    return 200;
  }

  setCollapseAtWidth(width: number): void { }

  setDefaultCollapseAtWidth(): void { }

}
