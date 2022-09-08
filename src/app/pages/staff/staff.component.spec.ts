import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { StaffComponent } from './staff.component';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;
  let auth0ClientSpy: any;

  beforeEach(() => {
    auth0ClientSpy = jasmine.createSpyObj('Auth0Client', ['loginWithRedirect']);

    TestBed.configureTestingModule({
      declarations: [StaffComponent],
      imports: [],
      providers: [
        {
          provide: HIGHLIGHT_OPTIONS,
          useValue: {
            coreLibraryLoader: () => import('highlight.js/lib/highlight'),
            languages: {
              json: () => import('highlight.js/lib/languages/json'),
            },
          },
        },
        { provide: AuthService, useValue: auth0ClientSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
