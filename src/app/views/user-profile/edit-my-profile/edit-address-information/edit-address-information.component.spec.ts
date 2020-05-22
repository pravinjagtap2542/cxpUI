import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressInformationComponent } from './edit-address-information.component';

describe('EditAddressInformationComponent', () => {
  let component: EditAddressInformationComponent;
  let fixture: ComponentFixture<EditAddressInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddressInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddressInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
