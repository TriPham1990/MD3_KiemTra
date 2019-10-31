import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsreadingComponent } from './isreading.component';

describe('IsreadingComponent', () => {
  let component: IsreadingComponent;
  let fixture: ComponentFixture<IsreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
