import { TestBed, async } from '@angular/core/testing';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHeaderModule } from '@ux-aspects/ux-aspects';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MockMenuService } from './shared/side-navigation/side-navigation.component.spec';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        PageHeaderModule,
        UpgradeModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: '$navigationMenu', useValue: new MockMenuService() }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
