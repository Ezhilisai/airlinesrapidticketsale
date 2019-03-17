import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperlayoutComponent } from './stepperlayout.component';

describe('StepperlayoutComponent', () => {
  let component: StepperlayoutComponent;
  let fixture: ComponentFixture<StepperlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
