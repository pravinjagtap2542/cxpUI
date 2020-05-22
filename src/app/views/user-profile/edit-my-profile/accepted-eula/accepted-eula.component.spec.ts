import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedEulaComponent } from './accepted-eula.component';

describe('AcceptedEulaComponent', () => {
  let component: AcceptedEulaComponent;
  let fixture: ComponentFixture<AcceptedEulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedEulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedEulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
