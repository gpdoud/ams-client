import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSearchListComponent } from './asset-search-list.component';

describe('AssetSearchListComponent', () => {
  let component: AssetSearchListComponent;
  let fixture: ComponentFixture<AssetSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
