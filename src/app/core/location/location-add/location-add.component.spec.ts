import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAddComponent } from './location-add.component';

describe('LocationAddComponent', () => {
  let component: LocationAddComponent;
  let fixture: ComponentFixture<LocationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
