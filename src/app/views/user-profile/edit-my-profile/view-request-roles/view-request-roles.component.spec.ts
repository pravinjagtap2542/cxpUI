import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestRolesComponent } from './view-request-roles.component';

describe('ViewRequestRolesComponent', () => {
  let component: ViewRequestRolesComponent;
  let fixture: ComponentFixture<ViewRequestRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
