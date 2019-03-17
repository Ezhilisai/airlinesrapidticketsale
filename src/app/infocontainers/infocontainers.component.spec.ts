import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocontainersComponent } from './infocontainers.component';

describe('InfocontainersComponent', () => {
  let component: InfocontainersComponent;
  let fixture: ComponentFixture<InfocontainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocontainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocontainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
